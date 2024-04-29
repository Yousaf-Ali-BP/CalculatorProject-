let pre_num=0
let current_num=0
let operation=""
let result=""
let isNewNum=true
let new_num=0
const display=document.getElementById("display")
function btnClick(val){
    if("0123456789.".includes(val)){
        if(isNewNum){
            display.value=val
            isNewNum=false
        }else{
            display.value+=val
        }
        new_num=parseFloat(display.value)
    }else if(['+','-','*','/'].includes(val)){
        if(!isNewNum){
            if(operation===""){
               pre_num=parseFloat(display.value)
                isNewNum=true 
            }else{
                current_num=parseFloat(display.value)
                result=calculate(pre_num,current_num,operation)
                display.value=result
                pre_num=result
                isNewNum=true
            }
            operation=val
        }
    }else if(val==='='){
        if(!isNewNum){
            current_num=parseFloat(display.value)
            result=calculate(pre_num,current_num,operation)
            display.value=result
            pre_num=result
            isNewNum=true
        }else{
            result=calculate(pre_num,new_num,operation)
            display.value=result
            pre_num=result
        }
    }else if(val==='AC'){
        pre_num=0
        current_num=0
        operation=""
        result=""
        isNewNum=true
        new_num=0
        display.value="0"
    }else if(val==='C'){
        display.value="0"
        isNewNum=true
    }
}

function calculate(num1,num2,operation){
    switch(operation){
        case'+':return num1+num2
        case'-':return num1-num2
        case'*':return num1*num2
        case'/':return num2 !==0 ? num1/num2:0
        default:return 0
    }
}

