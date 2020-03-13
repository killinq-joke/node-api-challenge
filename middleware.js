module.exports = {
    ValidateActionsID,
    ValidateProjectsID
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

