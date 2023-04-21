const arr2 = [1, 2, 3, 4, 5]

const c = arr2.filter((element) => {
    return element % 2
})

console.log(c)

console.log(arr2.filter((element) => {
    if (element % 2){
        return element
    }
}))



console.log('###############################')


// 홀수의 개수 출력하기
const numList = [4, 3, 5, 1, 6, 5]

// [1] filter
const odd = numList.filter((element) => {
    return element % 2
})
console.log(odd.length)


// [2] forEach
let cnt = 0
// 숫자는 원시 타입이므로 재할당이 이루어짐
// const cnt = [0] : 배열은 참조 타입이므로 재할당이 아니라서 오류가 나지 않음
const odd2 = numList.forEach((element) => {
    if (element % 2) {
        // 제일 많이 쓰이는 형태 : cnt = cnt + 1
        cnt += 1
    }
})
console.log(cnt)



console.log('###############################')

const numList2 = [-5, 3, 4, 2, -7, -2, 7]
const pplus = []
const mminus = []

numList2.forEach((element) => {
    if (element > 0) {
        pplus.push(element)
    }
    else if (element < 0) {
        mminus.push(element)
    }
})

console.log(pplus)
console.log(mminus)



console.log('###############################')


const arr_1 = [1, 2, 3, 4, 5]
const square_1 = arr_1.map((element) => {
    return element * element
})
console.log(square_1)

const arr_2 = ['a', 'bcd', 'ef', 'g']
const len_2 = arr_2.map((element) => {
    return element.length
})
console.log(len_2)


// 빈 배열 생성
const newList = []
const newList2 = Array()



console.log('###############################')

const numList3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr_first = []
const arr_second = []

// forEach
numList3.forEach((element) => {
    if (element % 2) {
        arr_first.push(element)
    }

    if ( element > 3 && element < 9) {
        arr_second.push(element)
    }
})
console.log(arr_first)
console.log(arr_second)


// filter 자체가 조건문이기때문에 if 필요없음, map은 조건 필요함
const arr_first2 = numList3.filter((element) => {
    return element % 2
})
const arr_second2 = numList3.filter((element) => {
    return element > 3 && element < 9
})
console.log(arr_first2)
console.log(arr_second2)



console.log('###############################')

const bucketLists = [
    {
        id:1,
        text:"자기",
        done:false,
    },
    {
        id:2,
        text:"집가기",
        done:false,
    },
]

const notyet = bucketLists.filter((bucketList) => {
    return !bucketList.done
})

console.log(notyet)



console.log('###############################')


const arr3 = [1, 2, 3, 4, 5]

// find : 조건에 맞는 것중에 제일 처음 값을 반환
// some : 조건에 맞는 것이 하나라도 있으면 true 반환
// every : 조건에 안 맞는 것이 하나라도 있으면 false 반환
const find_1 = arr3.find((element, index, array) => {
    return element === 2
})
const some_1 = arr3.some((element) => element > 3)
const every_1 = arr3.every((element) => element > 3)

console.log(find_1) // 2
console.log(some_1) // true
console.log(every_1) // false


console.log('###############################')


