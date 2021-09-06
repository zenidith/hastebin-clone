const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("code-display", { code: 'This is the code'})
})

app.listen(3000)
 