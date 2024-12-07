// Creamos el express app object

let express = require ('express')
let app = express()
const port = 3000 


// Ruta /example
app.get("/example", (req, res) => {
    res.send('Hello from the example ROUTE handler!')
})






app.listen(port, () => console.log(`Server is running at ${port}`))


module.exports = app