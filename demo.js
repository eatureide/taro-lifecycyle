var globalPromise = null
var p = () => {
    if (globalPromise) return globalPromise
    globalPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        }, 2000)
    })
    return globalPromise
}

async function a() {
    var res = await p()
    console.log(res)
}
async function b() {
    var res = await p()
    console.log(res)
}
async function c() {
    var res = await p()
    console.log(res)
}
a()
b()
c()