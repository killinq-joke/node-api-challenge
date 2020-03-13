const express = require("express");
const projectsHelpers = require("./data/helpers/projectModel");
const mid = require("./middleware");

const projects = express.Router();

projects.get("/", (req, res) => {
  projectsHelpers
    .get()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500);
    });
});

projects.get("/:id", mid.ValidateProjectsID, (req, res) => {
    const {id} = req.projects;
  projectsHelpers
    .get(id)
    .then(response => {
        if (!response) {
            res.status(404).json("Please provide an existing ID")
        } else {
            res.status(200).json(response);
        }
      
    })
    .catch(err => {
      res.status(500);
    });
});

projects.get("/:id/actions", mid.ValidateProjectsID, (req, res) => {
    const {id} = req.params;
  projectsHelpers
    .getProjectActions(id)
    .then(response => {
        if (!response) {
            res.status(404).json("Please provide an existing ID")
        } else {
            res.status(200).json(response);
        }
      
    })
    .catch(err => {
      res.status(500);
    });
});

projects.post("/", (req, res) => {
    const project = req.body;
  projectsHelpers
    .insert(project)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500);
    });
});

projects.put("/:id", mid.ValidateProjectsID, (req, res) => {
    const {id} = req.params;
    const change = req.body;
  projectsHelpers
    .update(id, change)
    .then(response => {
        if (!response) {
            res.status(404).json("Please provide an existing ID")
        } else {
            res.status(200).json(response);
        }
      
    })
    .catch(err => {
      res.status(500);
    });
});

projects.delete("/:id", mid.ValidateProjectsID, (req, res) => {
    const {id} = req.params;
  projectsHelpers
    .remove(id)
    .then(response => {
        if (!response) {
            res.status(404).json("Please provide an existing ID")
        } else {
            res.status(200).json(response);
        }
      
    })
    .catch(err => {
      res.status(500);
    });
});

module.exports = projects;
