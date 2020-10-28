const async = require('async');
const bcrypt = require('bcrypt');
const { json } = require('express');
const Projects = require('../models/project');

function list(req, res, next) {
  const page = req.params.page ? req.params.page : 1;
  Projects.paginate({}, {page: page, limit: 100}).then(project => res.status(200).json({
      message: 'Proyectos encontrados correctamente',
      objs: project
  })).catch(error => res.status(500).json({
      message: 'No se pudieron encontrar los proyectos',
      obj: error
  }));
  }
  
  function index(req, res) {
    let id = req.params.id;
    Projects.findOne({_id: id}).then(user => res.status(200).json({
        message: 'Proyecto encontrado correctamente',
        objs: project
    })).catch(error => res.status(500).json({
        message: 'No se pudo encontrar el proyecto',
        obj: error
    }));
  }
  
  function create(req, res) {

    let proyectName = req.body.projectName;
    let requestDate = req.body.requestDate;
    let startDate = req.body.startDate;
    let proyectDescription = req.body.proyectDescription;
    let managerId = req.body.managerId;
    let ownerId = req.body.ownerId;
    let teamLds = req.body.teamLds;

    let project = new Projects({
      _proyectName : proyectName,
      _requestDate : requestDate,
      _startDate : startDate,
      _proyectDescription : proyectDescription,
      _managerId : managerId,
      _ownerId : ownerId,
      _teamLds : teamLds
    });

    project.save().then(obj => res.status(200).json({
      message : 'proyecto creado correctamente',
      objs : project
    })).catch(err=> res.status(500).json({
      message : 'no se pudo almacenar el proyecto',
      objs : err
    }));

  }
  
  function update(req, res) {
    let id = req.params.id;

    let project = new Object();

    if(req.body.projectName)
        user._proyectName = req.body.projectName;
    if(req.body.requestDate)
        user._requestDate = req.body.requestDate;
    if(req.body.startDate)
        user._startDate = req.body.startDate;
    if(req.body.proyectDescription)
        user._proyectDescription = req.body.proyectDescription;
    if(req.body.managerId)
        user._managerId = req.body.managerId;
    if(req.body.ownerId)
        user._ownerId = req.body.ownerId;
    if(req.body.teamLds)
        user._teamLds = req.body.teamLds;

    Projects.findOneAndUpdate({_id: id}, project, {omitUndefined: true}).then(project => res.status(200).json({
        message: 'Proyecto actualizado correctamente',
        objs: project
    })).catch(error => res.status(500).json({
        message: 'No se pudo actualizar el proyecto',
        obj: error
    }));
  }
  
  function destroy(req, res) {
    const id = req.params.id;
    Projects.deleteOne({_id: id}).then(project => res.status(200).json({
        message: 'Proyecto eliminado correctamente',
        objs: project
    })).catch(error => res.status(500).json({
        message: 'No se pudo eliminado el proyecto',
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