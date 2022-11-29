const calculate = (calc) => {
    let nums = calc.split(/[/*+-]+/) // Regex to turn string into an array of numbers by splitting by multiple delminiators
    nums = nums.map(item => Number(item)) // convert strings to Numbers

    const operations = calc.split(/[0.0-9]+/) // use Regex to split by numbers and make an array of operations
    let operationsClone = structuredClone(operations) // deep copy of array of operations for later manipulation within maps

    // console.log(nums)
    // console.log(operations)

    operations.map(op => { // mapping over the operations
        if(op === '*' || op === '/'){ // first map checking for multiplaction or divide (because of order of operations)
            let mapIndex = operationsClone.indexOf(op)  // creating an index from the clone because the cloned array will be manipulated
            
            if(op === '*') { // if statement to check if operation is multiply or divide
                nums[mapIndex] = nums[mapIndex-1] * nums[mapIndex] // performs the operation on the numbers either side of the operation and sets it to the rightmost operation
            } else {
                nums[mapIndex] = nums[mapIndex-1] / nums[mapIndex]
            }
            
            nums.splice(mapIndex-1, 1) // removes the first number the operation was performed on leaving only the calcualted result
            operationsClone.splice(operationsClone.indexOf(op), 1) // removes the operation that has just been performed from the cloned array
        } 
        return nums
    })

    operations.map(op => { 
        if(op === '+' || op === '-'){ // second map checking for addition or subtraction (because of order of operations)
            let mapIndex = operationsClone.indexOf(op)  // creating an index from the clone because the cloned array will be manipulated
            
            if(op === '+') { // if statement to check if operation is addition or subtraction
                nums[mapIndex] = nums[mapIndex-1] + nums[mapIndex] // performs the operation on the numbers either side of the operation and sets it to the rightmost operation
            } else {
                nums[mapIndex] = nums[mapIndex-1] - nums[mapIndex]
            }
            
            nums.splice(mapIndex-1, 1) // removes the first number the operation was performed on leaving only the calcualted result
            operationsClone.splice(operationsClone.indexOf(op), 1) // removes the operation that has just been performed from the cloned array
        }
        return nums 
    })

    console.log('final nums = ', nums[0])
    
    return nums[0]
}

export default calculate;