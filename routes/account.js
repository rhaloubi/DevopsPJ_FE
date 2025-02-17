const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const authMiddleware = require('../middleware/auth');

// Add new route for getting account by user_id
router.get('/user/:userId', authMiddleware, accountController.getAccountByUserId);

// Existing routes
router.post('/', authMiddleware, accountController.createAccount);
router.get('/', authMiddleware, accountController.getAllAccounts);
router.get('/:id', authMiddleware, accountController.getAccount);
router.put('/:id', authMiddleware, accountController.updateAccount);
router.delete('/:id', authMiddleware, accountController.deleteAccount);

module.exports = router;