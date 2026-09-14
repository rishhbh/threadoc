import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { authRateLimit } from "../middleware/rateLimitMiddleware.js";
import { 
    register, 
    login, 
    logout, 
    getMe, 
    updateMe 
} from "../controllers/authController.js";

const router = Router();

router.use(authRateLimit);

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', authMiddleware, getMe);
router.put('/me', authMiddleware, updateMe);

export default router;