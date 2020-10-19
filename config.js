// console.log(Math.sin(30 * Math.PI / 180))
// n1/n2=sina1/sina2
// 1/1.33=Math.sin(30 * Math.PI / 180)/Math.sin(x * Math.PI / 180)
// Math.sin(x * Math.PI / 180)=Math.sin(30 * Math.PI / 180)*1.33/1
// console.log(Math.sin(30 * Math.PI / 180) * 1.33 / 1) // 0.6649999999999999 0.665
// https://tool.520101.com/calculator/sanjiaohanshu/
// 41
const n1 = 1
    // const n2 = 1.33
const n2 = 2
const faster = (angle) => {
    let s = Math.sin(angle * Math.PI / 180) * n2 / n1
    return angle2 = Math.asin(s) * 180 / Math.PI
}
const slow = (angle) => {
    let s = Math.sin(angle * Math.PI / 180) * n1 / n2
    return angle2 = Math.asin(s) * 180 / Math.PI
}

// console.log(faster(30))
// console.log(slow(30))
// console.log(faster(slow(30)))

function Point(x, y) {
    this.x = x;
    this.y = y;
}
//已知起点终点求角度
function angle(start, end) {
    var diff_x = end.x - start.x,
        diff_y = end.y - start.y;
    return 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
}
// 已知角度半径求终点
function CenterRadiusPoint(center, angle, radius) {
    var p = new Point()
    var angleHude = angle * Math.PI / 180;
    p.x = (radius * Math.cos(angleHude)) + center.x;
    p.y = (radius * Math.sin(angleHude)) + center.y;
    return p;
}
//已知角度和斜边，求直角边
function hypotenuse(c, angle) {
    var radian = 2 * Math.PI / 360 * angle;
    return {
        a: Math.sin(radian) * c, //邻边
        b: Math.cos(radian) * c //对边
    }
}
//已知角度和直角边,求斜边c,对边a
function getAC(b, angle) {
    var radian = 2 * Math.PI / 360 * angle;
    return {
        c: b / Math.cos(radian),
        a: b * Math.tan(radian)
    }
}