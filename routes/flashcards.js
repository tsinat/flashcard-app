var express = require('express');
var router = express.Router();

var Flashcard = require('../models/flashcard');


//GET /api/flashcards  ----> return array of all flashcards
//POST /api/flashcards ----> create a new flashcard

router.get('/', (req, res) => {
    Flashcard.find({}, (err, flashcards) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(flashcards);
        }
    });
});
router.get('/:id', (req, res) => {
    Flashcard.findById(req.params.id, (err, flashcard) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(flashcard);
        }
    });
});
router.get('/categories/:category', (req, res) => {
    console.log(req.params.category);
    Flashcard.find({
        'category': req.params.category
    }, (err, flashcards) => {
        if (err) {
            res.status(400).send(err);
        } else {
            console.log('result:', flashcards);
            res.send(flashcards);
        }
    });
});
router.delete('/:id', (req, res) => {

    Flashcard.findByIdAndRemove(req.params.id, (err, flashcard) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send();
        }
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    var flashcard = new Flashcard(req.body);
    flashcard.save((err, savedFlashcard) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(savedFlashcard)
        }
    });
});

router.put('/:id', (req, res) => {
    //req.params.id ---> document id
    //req.body ---> update obj
    Flashcard.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {
        new: true
    }, (err, flashcard) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(flashcard);
        }
    })
})
module.exports = router;
