// import { ops } from "./App";

const calculate = (calc) => {
    let split = calc.split(/[/*+-]+/) //jumping into Regex to split by multiple delminiators
    split = split.map(item => Number(item)) // convert string to Number

    const splitOps = calc.split(/[0.0-9]+/)

    console.log(split)

    splitOps.map((op, index) => {
        let calcuation = ''
        if(op === '*' || op === '/'){
            switch(op){
                case '*':
                    calcuation = split[index-1] * split[index]
                    break;
                case '/':
                    calcuation = split[index-1] / split[index]
                    break;
                default:
                    break;
            }
            split[index-1] = 0
            split[index] = calcuation
        } 
    })

    console.log(split)

    splitOps.map((op, index) => {
        let calcuation = ''
        if(op === '+' || op === '-'){
            switch(op){
                case '+':
                    calcuation = split[index-1] + split[index]
                    break;
                case '-':
                    calcuation = split[index-1] / split[index]
                    break;
                default:
                    break;
            }
            split[index-1] = 0
            split[index] = calcuation
        } 
    })


    // console.log(typeof('+'))
    // console.log(calcuation)
    console.log(split)
    console.log(splitOps)
    // console.log(splitOps.indexOf('+'))
}

export default calculate;