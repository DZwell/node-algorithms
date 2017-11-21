function stringifyArray(input) {
    
}



function stringify(input) {
    switch (typeof input) {
        case 'string':
            return `""${input}""`;
        case 'boolean' || 'number':
            return `"${input}"`;
        default:
            break;
    }

}
console.log(stringify(true));