const { addListener } = require('process')
const feed=require('../model/Feed')

// Get homePage and render the index file
const getHomePage = (req, res) =>{
    feed.find()
    .sort({create_at: '-1'})
    .then((result) => res.render('index', {users: result}))
    .catch(err => console.log(err))
}

// get new page for rendering the index file for validation
const addNew = (req, res)=>{
    feed.find()
    .then((err) => res.render('add-new', {err: err.errors}))
    .catch(err => console.log(err))
}

// Post the Article in homepage
const createArticle = (req, res) => {
    let newArticle = new feed(req.body);
    newArticle.save()
.then(result => res.redirect('/feed'))
.catch(err=> res.render('add-new', {err : err.errors}))
}

// open a new page to edit or to delete an Message
const getFullArticle = (req, res) => {
    feed.findById(req.params.id)
    .then(result => res.render('fullArticle', {user : result}))
    .catch(err => console.log(err))
}

//Delete a message
const deleteArticle = (req, res) => {
    feed.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/feed'))
    .catch(err => console.log(err))
}

//open an message to edit
const getEditPage = (req, res) => {
    feed.findById(req.params.id)
    .then(result => {
        res.render('edit', {
            user: result            
        })
    })
    .catch(err => {console.log(err)})
}

// Update the edited message and redirect to feed/1 page
const updateArticle = (req, res) => {
    feed.findByIdAndUpdate(req.params.id, req.body)
    .then(result=> res.redirect(`/feed/1/${result._id}`))
    .catch(err => console.log(err))
}

//Get the update - exists only in the Ghulam's file

module.exports = {
    getHomePage,
    addNew,
    createArticle,
    getFullArticle,
    deleteArticle,
    updateArticle,
    getEditPage

}
