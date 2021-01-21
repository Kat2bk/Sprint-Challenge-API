// Write your "actions" router here!
const express = require('express');
const Actions = require('./actions-model');
const router = express.Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Actions.get(id);
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        next(error)
    }
})



module.exports = router;