import { ops } from "./App";

const calculate = (calc) => {
    let operation = [];

    [...calc].forEach((char) => {
        if(ops.includes(char)){
            operation = operation + char
        } else {
            operation = operation + JSON.stringify(char)
        }
    })
    console.log(operation)
}

export default calculate;