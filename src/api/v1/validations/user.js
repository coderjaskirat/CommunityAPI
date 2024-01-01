const minNameLength = 3;

const checkName = (name) => {
    if(!name) {
        return false;
    }
    return true;
}

const minPasswordLength = 6;

module.exports = { minNameLength, minPasswordLength, checkName };