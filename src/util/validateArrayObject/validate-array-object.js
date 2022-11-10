const validateArrayObject = (obj) => {
    if (obj) {
        const keys = Object.keys(obj)
        const arrlength = obj[keys[0]]
        for (let i = 1; i < keys.length; i++) {
            if (arrlength !== obj[keys[i]].length) {
                return false
            }
        }
        return true
    }

    return false
}

export default validateArrayObject
