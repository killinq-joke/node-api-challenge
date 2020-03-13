const express = require("express");
const actionHelpers = require("./data/helpers/actionModel")

const actions = express.Router()

actions.get("/", (req, res) => {
    actionHelpers.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500)
    })
   
})

module.exports = actions