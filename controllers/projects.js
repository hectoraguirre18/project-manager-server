function list(req, res) {
    res.send('respond with a project');
  }
  
  function index(req, res) {
    var id = req.params.id;
    res.send('findById: ' + id);
  }
  
  function create(req, res) {
    res.send('un post');
  }
  
  function update(req, res) {
    res.send('un update');
  }
  
  function destroy(req, res) {
    res.send('un delete');
  }
  
  module.exports = {
    list,
    create,
    update,
    destroy,
    index
  }