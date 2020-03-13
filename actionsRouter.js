const express = require("express");
const actionHelpers = require("./data/helpers/actionModel")
const middleware = require("./middleware");

const actions = express.Router()

actions.get("/", (req, res) => {
    actionHelpers.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

actions.get("/:id", middleware.ValidateActionsID, (req, res) => {
    const {id} = req.actions;
    actionHelpers.get(id)
    .then(response => {
        if (!response) {
            res.status(404).json("Please provide an existing ID")
        } else {
            res.status(200).json(response);
        }
    })
    .catch(err => {
        res.status(500).end()
    })
})

actions.post("/", (req, res) => {
    const action = req.body;
    actionHelpers.insert(action)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

actions.put("/:id", middleware.ValidateActionsID, (req, res) => {
    const {id} = req.actions;
    const change = req.body;
    
    actionHelpers.update(id, change)
    .then(response => {
        if (!response) {
            res.status(404).json("Please provide an existing ID")
        } else {
            res.status(200).json(response);
        }
    })
    .catch(err => {
        res.status(500).end()
    })
})

actions.delete("/:id", middleware.ValidateActionsID, (req, res) => {
    const {id} = req.actions;
    
    actionHelpers.remove(id)
    .then(response => {
        if (!response) {
            res.status(404).json("Please provide an existing ID")
        } else {
            res.status(200).json("deleted")
        }

    })
    .catch(err => {
        res.status(500).end()
    })
})


module.exports = actions