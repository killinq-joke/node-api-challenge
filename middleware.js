module.exports = {
    ValidateID,
}

function ValidateID(req, res, next) {
    if (isNaN(req.params.id)) {
        res.status(400).end()
    } else {
        req.actions = {id: req.params.id}
        next()
    }
}

