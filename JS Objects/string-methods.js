let isValidPassword = function(password) {
    return password.length >= 9 && !password.includes('password')
}




console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123ukksdllkbmm'))
console.log(isValidPassword('asdfpassword'))
