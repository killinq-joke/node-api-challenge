const express = require("express");
const projectsHelpers = require("./data/helpers/projectModel")

const projects = express.Router();

projects.get("/", (req, res) => {
    projectsHelpers.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500)
    })
})

module.exports = projects;