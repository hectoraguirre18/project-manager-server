const async = require('async');
const bcrypt = require('bcrypt');
const story = require('../models/story');
const Story = require('../models/story');

function list(req, res, next) {
    const page = req.params.page ? req.params.page : 1;
    Story.paginate({},{
        page: page,
        limit: 100
    }).then(stories => res.status(200).json({
        message: res.__('story.findAll.ok'),
        objs: stories
      })).catch(error => res.status(500).json({
        message: res.__('story.findAll.err'),
        obj: error
      }));
}

function index(req, res) {
    let id = req.params.id;
    Story.findOne({ _id: id }).then(user => res.status(200).json({
      message: res.__('story.findOne.ok'),
      objs: story
    })).catch(error => res.status(500).json({
      message: res.__('story.findOne.err'),
      obj: error
    }));
}

function update(req, res) {

    let id = req.params.id;

    let story = new Object();
  
    if (req.body.name)
      story._name = req.body.name;
    if (req.body.role)
      story._role = req.body.role;
    if (req.body.functionality)
      story._functionality = req.body.functionality;
    if (req.body.benefit)
      story._benefit = req.body.benefit;
    if (req.body.criteriaContent)
      story._criteriaContent = req.body.criteriaContent;
  
    Story.findOneAndUpdate({ _id: id }, story).then(story => res.status(200).json({
      message: res.__('story.update.ok'),
      objs: user
    })).catch(error => res.status(500).json({
      message: res.__('story.update.err'),
      obj: error
    }));
}

function destroy(req, res) {
    const id = req.params.id;
    Story.deleteOne({ _id: id }).then(story => res.status(200).json({
      message: res.__('story.delete.ok'),
      objs: user
    })).catch(error => res.status(500).json({
      message: res.__('story.delete.err'),
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