const arr = [1, 2, 3, 4, 5]
const brr = []

// forEach : 반환값 없음
arr.forEach((element) => {console.log(element)})
const a = arr.forEach((element) => {return element + 1})
console.log(a) // undefined

console.log('이얍')


// map : 반환값을 요소로 하는 배열 반환
const b = arr.map((element) => {return element + 1})
console.log(arr)
console.log(b)



// function test(element) {
//     console.log(element)
// }

// const test = function(element) {
//     console.log(element)
// }




// 반환되는 원소의 개수와 원본 배열의 원소의 개수를 비교해서 고차함수를 유추 가능함