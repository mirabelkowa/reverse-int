module.exports = function reverse (n) {
    return n.toString().split('').filter(item => item != '-').reverse().join('')
}
