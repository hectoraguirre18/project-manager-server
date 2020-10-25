function list(req, res) {
    res.send('respond with a list');
}

function index(req, res) {
    var id = req.params.id;
    res.send('findbyid:' + id);
}

function create(req, res) {
    res.send('respond with a create');
}

function update(req, res) {
    res.send('respond with a update');
}

function destroy(req, res) {
    res.send('respond with a destroy');
}

module.exports = {
 list,
 create,
 update,
 destroy,
 index
}