import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import projectRoutes from './routes/project.routes.js';
import rateLimiter from './middleware/rateLimiter.js';
import swaggerUi from 'swagger-ui-express';

// ✅ Fix for JSON import (Render doesn't support assert syntax)
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const swaggerDocument = require('./swagger/swagger.json');

dotenv.config();
connectDB();

const app = express();

<<<<<<< HEAD
// ✅ Fix for platforms like Render/Railway
app.set('trust proxy', 1); // ← Add this line
=======
// ✅ Important for Render, Railway, etc.
app.set('trust proxy', 1);
>>>>>>> 1eda196 (Fix: Updated server.js to support Render deployment)

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(rateLimiter);

// ✅ Optional Health Check
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

