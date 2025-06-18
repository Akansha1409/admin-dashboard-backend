import express from 'express';
const router = express.Router();

// Dummy user data for now
router.get('/', (req, res) => {
  res.json({ message: 'User routes working' });
});

export default router;