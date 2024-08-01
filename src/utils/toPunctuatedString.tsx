const toPunctuatedString = (value:string|string[]) => Array.isArray(value) ? value.join(', ') : value;

export default toPunctuatedString;