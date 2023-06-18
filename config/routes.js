const express = require('express')
const route = express.Router()
const userController = require('../controller/Controller')

//Home Page with posts
route.get('/feed', userController.getHomePage)

//Form for posting
route.get('/add-new', userController.addNew)
route.post('/feed', userController.createArticle)

//Edit page and post changes
route.get('/feed/1/:id', userController.getFullArticle)
route.get('/feed/edit/1/:id', userController.getEditPage)
route.post('/update-article/:id', userController.updateArticle)

//Delete post
route.post('/delete-article/:id', userController.deleteArticle)

module.exports = route;