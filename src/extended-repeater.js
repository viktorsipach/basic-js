module.exports = function repeater(str, options) {
    let resultStr = '';

    if (options.repeatTimes === undefined) {
        resultStr =  `${str}${options.addition}`;
    } else if (options.additionSeparator) {
        const numberToSlice = options.separator.length * -1;
        const numberToSliceAddStr = options.additionSeparator.length * -1;
        const addStr = `${options.addition}${options.additionSeparator}`.repeat(options.additionRepeatTimes).slice(0,numberToSliceAddStr);
        resultStr = `${str}${addStr}${options.separator}`.repeat(options.repeatTimes).slice(0,numberToSlice);
    }  else if (options.addition) {
        const numberToSlice = options.separator.length * -1;
        resultStr =  `${str}${options.addition}${options.separator}`.repeat(options.repeatTimes).slice(0,numberToSlice); 
    } else if (options.separator === undefined) {
        options.separator = '+';
        const numberToSlice = options.separator.length * -1;
        resultStr =  `${str}${options.separator}`.repeat(options.repeatTimes).slice(0,numberToSlice);
    } else if (options.separator) {
        const numberToSlice = options.separator.length * -1;
        resultStr =  `${str}${options.separator}`.repeat(options.repeatTimes).slice(0,numberToSlice);
    }
    return  resultStr;
    
};


