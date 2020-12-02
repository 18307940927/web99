var nut = function(){  
      console.log("this is nut-1")   
 return "this is nut-2" } 
nut()
//没有返回执行数据，只是运行了第一句程序
var lichee = function (){    
    console.log("this is lichee-1")   
     return "this is lichee-2"
 }()
 console.log(lichee)
// console.log(lichee)使他返回执行数据
 var watermelon = function(){  
      console.log("this is watermelon-1") 
        return function pear(){      
           console.log("this is pear-1")   
        } 
    }
    watermelon()()
    let banana  = function banana(){   
         console.log("this is banana-1")   
         return ()=> function(){console.log("this is Anonymous function")}() 
    } 
    banana()()
    let grape = function redGrape(){   
         return {        
            name:"my name is red grape",        
            printMyName:()=>{            
                return ()=>{                
                    return Object.create({                   
                         name:"my name is grape nut",                   
                         printMyGrapeNut:function(){                       
                             console.log("this is MyGrapNut")                   
                         }                
                     })           
                 }       
             }    
         }
    }
