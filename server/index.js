const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

const {getHouses, updateHouse, createHouse, deleteHouse} = require("./controller.js")

app.get("/api/houses", getHouses)
app.put("/api/houses/:id", updateHouse)
app.post("/api/houses", createHouse)
app.delete("/api/houses/:id", deleteHouse)


app.listen(4004, () => console.log("Docked at port 4004"))