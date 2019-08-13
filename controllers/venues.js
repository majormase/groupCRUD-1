const express = require('express');
const router = express.Router();
const Venues = require('../models/venues.js');

router.get('/', (req, res)=>{
    Venues.find({}, (err, foundVenues)=>{
        res.json(foundVenues);
    });
});

router.delete('/:id', (req, res)=>{
    Venues.findByIdAndRemove(req.params.id, (err, deletedVenue)=>{
        res.json(deletedVenue);
    });
});

router.put('/:id', (req, res)=>{
    Venues.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedVenue)=>{
        res.json(updatedVenue);
    });
});

router.post('/', (req, res)=>{
    Venues.create(req.body, (err, createdVenue)=>{
        res.json(createdVenue); //.json() will send proper headers in response so client knows it's json coming back
    });
});

module.exports = router;
