const houses = require("./db.json")
let newHouseId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    
    updateHouse: (req, res) => {

    },

    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body

        let newHouse = {
            address,
            price,
            imageURL,
            id: newHouseId
        }
    
        houses.push(newHouse)
        res.status(200).send(houses)
        newHouseId++
    },

    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(movies)
    }
}
