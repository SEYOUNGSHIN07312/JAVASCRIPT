// // 매개변수와 인자의 불일치 허용

// // [1] 매개변수보다 인자의 개수가 적을 경우 
// const threeArgs = function (arg1, arg2, arg3) {
//     return [arg1, arg2, arg3]
// }

// threeArgs() // undefined, undefined, undefined


// // Spread syntax (Rest parameters)
// const restArgs = function (arg1, arg2, ...restArgs) {
//     return [arg1, arg2, restArgs]
// }

// restArgs(1, 2, 3, 4, 5) // [1, 2, [3, 4, 5]]


// // Arrow Function
// const arrow1 = function (name) {
// 	return `hello, ${name}`
// }

// // [1] function 키워드 삭제 가능
// const arrow2 = (name) => {return `hello, ${name}`}

// // [2] 인자 1개면 () 생략 가능
// const arrow3 = name => {return `hello, ${name}`}

// // [3] 함수 바디가 return 표현식 1개일 경우 {}, return 삭제 가능
// const arrow4 = name => `hello, ${name}`

// console.log(arrow1('SHIN'))
// console.log(arrow2('SHIN'))
// console.log(arrow3('SHIN'))
// console.log(arrow4('SHIN'))

// const myFunc = function() {
//     console.log(this)
// }

// myFunc()

const colors = ['red', 'blue', 'green']
printFunc = function (color) {
    console.log(color)
}

// 미리 정의된 함수 사용
colors.forEach(printFunc)

// 바로 선언해서 사용 가능
const result = colors.forEach(function (color, index, array) {
    console.log(color)
    console.log(index)
    console.log(array)
})

console.log(result)

// Arrow Function 사용
array.forEach(element => {
    return console.log(color)
})


// 반환 값이 true인 값만 뽑아서 배열로 만들기
const fruitFilter = function (product) {
    return product.type === 'fruit'
}


const tests = [90, 90, 80, 77]

// acc(바톤) = total, element = x, initial value = 0
const sum = tests.reduce(function (total, x) {
    return total + x
}, 0)

sum()













const add = function (a, b) {
    return a + b
}

// function 키워드 삭제
const add2 = (a, b) => {return a + b}
// 함수 바디가 return문 한 줄일 경우 중괄호과 return 삭제 가능
const add3 = (a, b) => a + b


let noArgs = function () {
    return 'No args'
}

let noArgs2 = () => 'No args'
let noArgs3 = _ => 'No args'

let returnObject = function () {
    return { key:'value'}
}

let returnObject2 = () => {return {key:'value'}}

let returnObject3 = function () {
    return {key:'value'}
}

let returnObject4 = () => ({key:'value'})