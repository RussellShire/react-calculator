const evaluateString = (calc) => {
    let nums = calc.split(/[/*+-]+/) 
    nums = nums.map(item => Number(item)) 

    const operations = calc.split(/[0.0-9]+/) 
    let operationsClone = structuredClone(operations)

    operations.map(op => { 
        if(op === '*' || op === '/'){ 
            let mapIndex = operationsClone.indexOf(op) 
            
            if(op === '*') { 
                nums[mapIndex] = nums[mapIndex-1] * nums[mapIndex]
            } else {
                nums[mapIndex] = nums[mapIndex-1] / nums[mapIndex]
            }
            
            nums.splice(mapIndex-1, 1) 
            operationsClone.splice(operationsClone.indexOf(op), 1) 
        } 
        return nums
    })

    operations.map(op => { 
        if(op === '+' || op === '-'){ 
            let mapIndex = operationsClone.indexOf(op)  
            
            if(op === '+') { 
                nums[mapIndex] = nums[mapIndex-1] + nums[mapIndex] 
            } else {
                nums[mapIndex] = nums[mapIndex-1] - nums[mapIndex]
            }
            
            nums.splice(mapIndex-1, 1) 
            operationsClone.splice(operationsClone.indexOf(op), 1) 
        }
        return nums 
    })

    console.log('final nums = ', nums[0])

    return nums[0]
}

export default evaluateString;
