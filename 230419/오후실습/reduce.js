const arr_r_1 = [1, 2, 3, 4, 5]

// arr.forEach((element, index, array) => {})

// arr.reduce(acc, cur, index, array)
// arr.reduce(prev, cur, index, array)

const reduce_1 = arr_r_1.reduce((acc, cur, index, array) => {
    // cur 자리에 element들이 들어감
    // acc 과거값
    return acc + cur
}, 0)

console.log(reduce_1)

//      초기
// acc : 0 1 3 6 10 
// cur : 1 2 3 4 5
// a+c : 1 3 6 10 15(최종)
// a+c가 다음 acc로 반환됨



const arr111 = ['피카츄', '라이츄', '파이리', '꼬부기', '피카츄', '파이리']

const result = arr111.reduce((acc, cur) => {
    if (acc[cur]){
        acc[cur] = acc[cur] + 1
    } else {
        acc[cur] = 1
    }
    return acc
}, {})

console.log(result)