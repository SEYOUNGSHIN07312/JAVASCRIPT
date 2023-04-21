const itsme = {
    name : '신세영',
    age : 29,
    gender : 'femail',
    country : '울산',
    height : '159',
    favorite_food : '김치찌개',
    blood_type : 'B',
    mbti : 'INFJ',
    birth : '1995-07-31',
}


// const age = 31
// const obj = {
//     name : '신세영',
//     age : age,
// } // 이 경우 age, 로 축약 가능


// const obj = {
//     name : '신세영',
//     age : 29,
// }


// const {name} = obj
// const {age} = obj

// console.log(name, age)



const numList4 = [1, 2, 3, 4, 5]

const a = numList4.filter(num => !(num % 2)).map(num => num ** 2)
console.log(a)