import '../css/index.css'

console.log('hello world 123')

let fun1 = (p) => console.log('func1', p)
let fun2 = (p) => console.log('func2', p)

export const func3 = (callback) => {
  fun1 = callback
}

const aa = '123abc'