import app from "./app.js";


app.listen(process.env.PORT || 5000, () => {
    console.log(`Rodando em 5000`)
})