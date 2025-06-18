import express from 'express';
const router = express.Router();

// Dummy project data for now
router.get('/', (req, res) => {
  res.json({ message: 'Project routes working' });
});

export default router;
