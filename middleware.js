module.exports = {
    ValidateActionsID,
    ValidateProjectsID
}

function ValidateActionsID(req, res, next) {
    if (isNaN(req.params.id)) {
        res.status(400).json("Please provide a correct ID")
    } else {
        req.actions = {...req.params}
        next()
    }
}

function ValidateProjectsID(req, res, next) {
    if (isNaN(req.params.id)) {
        res.status(400).json("Please provide a correct ID")
    } else {
        req.projects = {...req.params}
        next()
    }
}

