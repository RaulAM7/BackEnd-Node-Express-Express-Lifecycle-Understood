// Creamos el express app object

let express = require ('express')
let app = express()
const port = 3000 










app.listen(port, () => console.log(`Server is running at ${port}`))


module.exports = app