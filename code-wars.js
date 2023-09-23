function printArray(array) {

    let ans = array.map(removeComma)
    function removeComma(e) {
        return String(e)
    }

    console.log("ans:",ans)
}

// function printArray(array) {
//
//     let ans = array.join(",")
//
//     return ans
// }
// printArray(["h","o","l","a"])

function friend(friends){
    let ans=[]
    for(arrayElement in friends) {
        console.log(arrayElement)
        if(arrayElement.length === 4) {
            ans.push(arrayElement)
        }
    }
    console.log(ans)
    return ans
}

friend(["Ryan", "Kieran", "Jason", "Yous"])