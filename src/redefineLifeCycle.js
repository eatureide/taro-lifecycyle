import React from 'react'

let originComponent = null
let originPureComponent = null
let originUseEffect = null

let globalTask = null
let globalPromise = null
let globalTaskComplete = false

function clearLifeCycleEffect(error) {
    error && console.log(error)
    globalTask = null
    globalPromise = null
    globalTaskComplete = true

    React.Component = originComponent
    React.PureComponent = originPureComponent
    React.useEffect = originUseEffect
}

async function handlePrefixTask() {
    if (globalPromise) return globalPromise
    if (globalTaskComplete) return
    globalPromise = new Promise(async (resolve, reject) => {
        try {
            await globalTask.apply(this)
            resolve()
        }
        catch (error) {
            reject(error)
        }
        finally {
            clearLifeCycleEffect()
        }
    })
    return globalPromise
}

function redefineComponentBody(originLifeCycle) {
    return async function () {
        try {
            await handlePrefixTask.apply(this)
        }
        catch (error) {
            clearLifeCycleEffect(error)
        }
        finally {
            originLifeCycle.apply(this)
        }
    }
}

async function redefineLifeCycle() {
    const { componentWillMount, componentDidMount } = this
    if (componentWillMount) {
        this.componentWillMount = redefineComponentBody(componentWillMount)
    }
    if (componentDidMount) {
        this.componentDidMount = redefineComponentBody(componentDidMount)
    }
}

function redefineComponent(component) {
    return class _redefineComponent extends component {
        constructor() {
            super()
            if (!globalTaskComplete) redefineLifeCycle.apply(this)
        }
    }
}

export default function init(prefixTask) {
    if (typeof prefixTask !== 'function') {
        throw Error('arguments error prefixTask is not a function')
    }
    globalTask = prefixTask
    originComponent = React.Component
    originPureComponent = React.PureComponent
    React.Component = redefineComponent(React.Component)
    React.PureComponent = redefineComponent(React.PureComponent)
}