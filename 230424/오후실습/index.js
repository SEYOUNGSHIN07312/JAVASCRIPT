// const button = document.querySelector('button')

// console.log(button)


// 1. button.addEventListener('이벤트종류', '실행시킬 함수' -> 동작)
// 2. button.addEventListener('이벤트종류', '실행시킬 콜백함수')

// button.addEventListener('click', test)

// 함수표현식 -> 변수 호이스팅 발생 / 선언 이전 참조 불가능
// function test() {
//     console.log('hello world')
// }


// const A = document.querySelector('input')

// A.addEventListener('input', (event) => {
//         console.log(event)
//         console.log('hello world')
// }, true)









document.querySelector('button').addEventListener('click', ()=>{
    console.log('hello world')
    console.log(this)
})