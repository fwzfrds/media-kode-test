// Soal 2
const arr = [1, 4, 2, 3, 5, 3, 2, 4]

const removeDuplicate = () => {
    let result = []

    arr.filter((elem, idx, item) => {
        idx === item.indexOf(elem) && result.push(elem)
    })

    return result.sort((a, b) => a - b)
}

console.log(removeDuplicate())
