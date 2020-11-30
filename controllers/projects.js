const async = require('async');
const bcrypt = require('bcrypt');
const { json } = require('express');
const Projects = require('../models/project');

function list(req, res, next) {
  const page = req.query.page ? req.query.page : 1;
  const limit = req.query.limit ? req.query.limit : 10;
  Projects.paginate({
    $or: [
      {_managerId: req.user},
      {_ownerId: req.user},
      {_teamIds: req.user}
    ]
  }, {page: page, limit: limit}).then(project => res.status(200).json({
      message: res.__('project.list.ok'),
      objs: project
  })).catch(error => res.status(500).json({
      message: res.__('project.list.err'),
      obj: error
  }));
  }
  
  function index(req, res) {
    let id = req.params.id;
    Projects.findOne({_id: id}).then(project => res.status(200).json({
        message: res.__('project.index.ok'),
        objs: project
    })).catch(error => res.status(500).json({
        message: res.__('project.index.err'),
        obj: error
    }));
  }
  
  function create(req, res) {

    let projectName = req.body.projectName;
    let requestDate = req.body.requestDate;
    let startDate = req.body.startDate;
    let projectDescription = req.body.projectDescription;
    let managerId = req.body.managerId;
    let ownerId = req.body.ownerId;
    let teamIds = req.body.teamIds;

    let project = new Projects({
      _projectName : projectName,
      _requestDate : requestDate,
      _startDate : startDate,
      _projectDescription : projectDescription,
      _managerId : managerId,
      _ownerId : ownerId,
      _teamIds : teamIds
    });

    project.save().then(project => res.status(200).json({
      message : res.__('project.create.ok'),
      objs : project
    })).catch(err=> res.status(500).json({
      message : res.__('project.create.err'),
      objs : err
    }));

  }
  
  function update(req, res) {
    let id = req.params.id;

    let project = new Object();

    if(req.body.projectName)
      project._projectName = req.body.projectName;
    if(req.body.requestDate)
      project._requestDate = req.body.requestDate;
    if(req.body.startDate)
      project._startDate = req.body.startDate;
    if(req.body.projectDescription)
      project._projectDescription = req.body.projectDescription;
    if(req.body.managerId)
      project._managerId = req.body.managerId;
    if(req.body.ownerId)
      project._ownerId = req.body.ownerId;
    if(req.body.teamIds)
      project._teamIds = req.body.teamIds;

    Projects.findOneAndUpdate({_id: id}, project, {omitUndefined: true}).then(project => res.status(200).json({
        message: res.__('project.update.ok'),
        objs: project
    })).catch(error => res.status(500).json({
        message: res.__('project.update.err'),
        obj: error
    }));
  }
  
  function destroy(req, res) {
    const id = req.params.id;
    Projects.deleteOne({_id: id}).then(project => res.status(200).json({
        message: res.__('project.destroy.ok'),
        objs: project
    })).catch(error => res.status(500).json({
        message: res.__('project.destroy.err'),
        obj: error
    }));
  }
  
  module.exports = {
    list,
    create,
    update,
    destroy,
    index
  }