
const requsetLogger = (req, res, next) => {  

console.log('Method:',req.method)
console.log('Path:',req.path)
console.log('Body:',req.body)

}
const unknownEndpoint = (req,res) => {
    res.status(404).send({
        Error: 'Unknown endpoint'
    })
}

module.exports = {
    requsetLogger,
    unknownEndpoint
}