const objectToArray = (obj) => {
    if (typeof obj === 'object') {
        console.log('Test')
    } else {
        throw `objectToArray take a object as a parameter. Recieved type ${typeof obj}`
    }
}

export default objectToArray