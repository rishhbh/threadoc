import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { 
    register, 
    login, 
    logout, 
    verifyEmail, 
    getMe, 
    updateMe 
} from "../controllers/authController.js";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/verify/:token', verifyEmail);
router.get('/me', authMiddleware, getMe);
router.put('/me', authMiddleware, updateMe);

export default router;