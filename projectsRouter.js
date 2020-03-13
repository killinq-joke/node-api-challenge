const express = require("express");
const projectsHelpers = require("./data/helpers/projectModel");

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

projects.get("/:id", (req, res) => {
    const {id} = req.params;
  projectsHelpers
    .get(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500);
    });
});

projects.get("/:id/actions", (req, res) => {
    const {id} = req.params;
  projectsHelpers
    .getProjectActions(id)
    .then(response => {
      res.status(200).json(response);
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

projects.put("/:id", (req, res) => {
    const {id} = req.params;
    const change = req.body;
  projectsHelpers
    .update(id, change)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500);
    });
});

projects.delete("/:id", (req, res) => {
    const {id} = req.params;
  projectsHelpers
    .remove(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500);
    });
});

module.exports = projects;
