import '../css/index.css'
import '../scss/main.scss'
import '../index.html'

console.log('hello world 1234')

let fun1 = (p) => console.log('func1', p)
let fun2 = (p) => console.log('func2', p)

export const func3 = (callback) => {
  fun1 = callback
}

const aa = '123abc'