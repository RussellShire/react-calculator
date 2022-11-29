// import { ops } from "./App";

const calculate = (calc) => {
    let nums = calc.split(/[/*+-]+/) //jumping into Regex to nums by multiple delminiators
    nums = nums.map(item => Number(item)) // convert string to Number

    const operations = calc.split(/[0.0-9]+/)

    console.log(nums)

    operations.map((op, index) => {
        let calcuation = ''
        if(op === '*' || op === '/'){
            switch(op){
                case '*':
                    calcuation = nums[index-1] * nums[index]
                    break;
                case '/':
                    calcuation = nums[index-1] / nums[index]
                    break;
                default:
                    break;
            }
            nums[index-1] = 0
            nums[index] = calcuation
        } 
    })

    console.log(nums)

    operations.map((op, index) => {
        let calcuation = ''
        if(op === '+' || op === '-'){
            switch(op){
                case '+':
                    calcuation = nums[index-1] + nums[index]
                    break;
                case '-':
                    calcuation = nums[index-1] / nums[index]
                    break;
                default:
                    break;
            }
            nums[index-1] = 0
            nums[index] = calcuation
        } 
    })


    // console.log(typeof('+'))
    // console.log(calcuation)
    console.log(nums)
    console.log(operations)
    // console.log(operations.indexOf('+'))
}

export default calculate;