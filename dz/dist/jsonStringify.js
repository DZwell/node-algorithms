function stringify(input) {
    cnosole.log('here');
    switch (typeof input) {
        case 'string':
            return `""${input}""`;
        case 'boolean' || 'number':
            return `"${input}"`;
        default:
            break;
    }

}
console.log(stringify(''));