Object2.prototype2 ={
    _proto2_ = null
}

function Object2(){
    this._proto2_ = Object2.prototype2;
}




var h4 = {}
    h4.name =""


function  apple(){
    // this.name ="zhangsan"
    this._proto2_ =apple.prototype2
}

// apple.imformatoion ={
    apple.prototype2 ={
    // price : 20
    _proto2_ : null
}

let obj =new Object2()
console.log(obj._proto2_._proto2_)