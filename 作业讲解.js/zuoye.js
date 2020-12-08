// ; (function (x) {    
//     console.log("this is chestnut")    
//         return ((x) => function () {       
//         console.log("this is haw")        
//         x.printName= function(){               
//             console.log("this is x().printName")            
//             return this.name        }        
//                 return 200 + x.printName() + x()    
//             }())(
//                 () => { this.name=6666;console.log("this is pitaya"); 
//             return 3999 })
//          })()


+function(){
    console.log("this is pitaya")
}()




(function(){
    console.log("this is pitaya2")
 })(888)

console.log((function(x){
    console.log("this is pitaya2")
    return x
})(888))


console.log((function(x){
    console.log("this is pitaya2")
    return x()
})(() => { console.log("this is arrow function");
return 777}))





console.log((function(x){
    console.log("this is pitaya2")
    x.printName = function (){
        console.log("this is print name")
        return 223
    }
    return x() + x.printName()
})(() => { console.log("this is arrow function");
return 777}))



+function $(){    
    -function(){        
        console.log("this is pear")       
         void function(){            
            console.log("this is nut")            
            console.log($.name)        }()    }()    
            this.name="my name is $" }()



function watermelon (name,price,number){    
    this.name = name,    
    this.price = price,    
    this.number = number } 
    watermelon.prototype.getSum = function (){    
        console.log("完善这里的代码") }

            
function  $2(x){
            //console.log(typeof x)
            if(typeof x == "string"){
                let  targets = window.document.getElementsByTagName(x)
                if(targets.length>0){
                    let array = targets;
                    for (let index = 0; index < array.length; index++) {
                        const element = array[index];
                        element.style.backgroundColor="red"
                        
                    }        }
            }
        }
        


        //如何去遍历这个数组 
        var lichees = [    () => {        
            return function () {            
                console.log("this is number 1")()        }    },   
                 +function(){console.log("this is number 2")}(),
                {        name:"this is lichee 3"    },   
                 2000,    "this is lichee 4",    null,    new Object({}),  
                  Object.create({}),    Object.prototype,    new Object({}).__proto__,   
                  new Date(),   
                  function licheeNut(){        
                     return {            printNut:()=>{               
                          console.log("thisis printNut")           
                         }        }    },    
                          Object.prototype.tag = "this is tag",    Object.tag ]

window.$5 = function (){    
    console.log("this is $5 in window object") }
         window.document.$5 = function (){
             console.log("this is $5 in window document object") }
                         

