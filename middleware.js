module.exports = {
    ValidateActionsID,
    ValidateProjectsID,
    ValidateActionsBody,
    ValidateProjectsBody
}

function ValidateActionsID(req, res, next) {
    if (isNaN(req.params.id)) {
        res.status(400).json("Please provide a correct ID")
    } else {
        if (!req.actions) {
          req.actions = {}  
        }
        req.actions.id = req.params.id
        next()
    }
}

function ValidateProjectsID(req, res, next) {
    if (isNaN(req.params.id)) {
        res.status(400).json("Please provide a correct ID")
    } else {
        if (!req.projects) {
            req.projects = {}
        }
        req.projects.id = req.params.id
        next()
    }
}

function ValidateActionsBody(req, res, next) {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        res.status(400).json("Please provide action info")
    } else if (!req.body.notes) {
        res.status(400).json("Please provide notes")
    } else if (!req.body.project_id) {
        res.status(400).json("Please provide the project ID")
    } else if (!req.body.description) {
        res.status(400).json("Please provide a description")
    } else {
        if (!req.actions) {
          req.actions = {}  
        }
        req.actions.action = req.body
        next()
    }
}

function ValidateProjectsBody(req, res, next) {
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        res.status(400).json("Please provide project info")
    } else if (!req.body.name) {
        res.status(400).json("Please provide a name")
    } else if (!req.body.description) {
        res.status(400).json("Please provide a description")
    } else {
        if (!req.projects) {
            req.projects = {}
        }
        req.projects.project = req.body
        next()
    }
}