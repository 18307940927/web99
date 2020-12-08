function  pear(name){
    return "this is " +`${name}`
}

//模板字符串

console.log(pear ("大桃子"))

let str = 'return' + '`我是${name}`';

let func = new Function ('name' ,str)
console.log(func("大桃子"))


function func2(name){
    return "我是" + name
}
