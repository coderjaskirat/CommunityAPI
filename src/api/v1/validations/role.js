const minNameLength = (name) => {
    if(name.length < 2) {
        return false;
    }
    return true;
}

const checkName = (name) => {
    if(!name) {
        return false;
    }
    return true;
}

module.exports = { minNameLength, checkName };