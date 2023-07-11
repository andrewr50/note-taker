const router = require('express').Router();
const noteStorage = require('../db/noteStorage');

// /api/notes
router.get('/notes', (req, res) => {
  try {
    noteStorage.getNotes()
    .then((notes) => {
      return res.json(notes);
    });
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/notes', (req, res) => {
  try {
    noteStorage.addNote(req.body)
    .then((note) => res.json(note))
  } catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/notes/:id', (req, res) => {
  try {
    noteStorage.removeNote(req.params.id)
    .then(() => res.json({ ok: true }))

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;