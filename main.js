// console.log(Math.sin(30 * Math.PI / 180))
// n1/n2=sina1/sina2
// 1/1.33=Math.sin(30 * Math.PI / 180)/Math.sin(x * Math.PI / 180)
// Math.sin(x * Math.PI / 180)=Math.sin(30 * Math.PI / 180)*1.33/1
// console.log(Math.sin(30 * Math.PI / 180) * 1.33 / 1) // 0.6649999999999999 0.665
// https://tool.520101.com/calculator/sanjiaohanshu/
// 41
const n1 = 1
const n2 = 1.33
const faster = (angle) => {
    let s = Math.sin(angle * Math.PI / 180) * n2 / n1
    return angle2 = Math.asin(s) * 180 / Math.PI
}
const slow = (angle) => {
    let s = Math.sin(angle * Math.PI / 180) * n1 / n2
    return angle2 = Math.asin(s) * 180 / Math.PI
}

console.log(faster(30))
console.log(slow(30))
console.log(faster(slow(30)))