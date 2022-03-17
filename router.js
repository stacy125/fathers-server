let express = require('express');
// const controller = require('./controller');
let router = new express.Router();
let eventJson = require('./eventData.json');

router.get('/', (request, response) => {
    response.json({
        sentence: "Welcome to Fatherhood Is Lit api click on the link",
        link: "https://fatherhoodislit.herokuapp.com/events",
        linkEdit: "https://fatherhoodislit.herokuapp.com/events/:id"


    })
})

// router.get('/events', controller.read)
// router.post('/events', controller.create)
// router.put('/events/:id', controller.update)
// router.delete('/events/:id', controller.delete)

module.exports = router