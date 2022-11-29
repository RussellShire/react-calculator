const calculate = (calc) => {
    let nums = calc.split(/[/*+-]+/) //jumping into Regex to nums by multiple delminiators
    nums = nums.map(item => Number(item)) // convert string to Number

    const operations = calc.split(/[0.0-9]+/) // use regex to make an array of operations
    let operationsClone = structuredClone(operations) // deep copy of array of operations for manipulation within maps

    // console.log(nums)
    // console.log(operations)

    operations.map((op) => {
        let calcuation = ''
        let mapIndex = operationsClone.indexOf(op)

        if(op === '*' || op === '/'){
            if(op === '*') {
                calcuation = nums[mapIndex-1] * nums[mapIndex]
            } else {
                calcuation = nums[mapIndex-1] / nums[mapIndex]
            }
            
            nums[mapIndex] = calcuation
            nums.splice(mapIndex-1, 1)

            operationsClone.splice(operationsClone.indexOf(op), 1)
        } 
    })

    operations.map((op) => {
        let calcuation = ''
        let mapIndex = operationsClone.indexOf(op)
        
        if(op === '+' || op === '-'){
            if(op === '+') {
                calcuation = nums[mapIndex-1] + nums[mapIndex]
            } else {
                calcuation = nums[mapIndex-1] - nums[mapIndex]
            }
           
            nums[mapIndex] = calcuation
            nums.splice(mapIndex-1, 1)

            operationsClone.splice(operationsClone.indexOf(op), 1)
        } 
    })

    console.log('final nums = ', nums)
    // console.log(operations)
    // console.log(operations.indexOf('+'))
}

export default calculate;