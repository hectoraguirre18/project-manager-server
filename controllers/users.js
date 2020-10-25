
function list(req,res){
    res.send('respond whit an user')
}
function index(req,res){
    var id = req.params.id;
    res.send('Find by id ' + id);
}
function create(req,res){
    res.send('post');
}
function update(req,res){
    res.send('update');
}
function destroy(req,res){
    res.send('delete');
}

module.exports = {
    list,
    index,
    create,
    update,
    destroy
}