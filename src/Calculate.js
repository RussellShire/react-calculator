import { ops } from "./App";

const calculate = (calc) => {
    // let operation = [];
    // [...calc].forEach((char) => {
    //     if(ops.includes(char)){
    //         operation = operation + char
    //     } else {
    //         operation = operation + JSON.stringify(char)
    //     }
    // })
    // console.log(operation)

    let split = calc.split(/[/*+-]+/) //jumping into Regex to split by multiple delminiators
    split = split.map(item => Number(item)) // convert string to Number
    const splitOps = calc.split(/[0.0-9]+/)
    console.log(split)
    console.log(splitOps)

}

export default calculate;