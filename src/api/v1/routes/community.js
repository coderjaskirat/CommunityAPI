const express = require('express');
const router = express.Router();

const { create, getAll, getAllMembers, getMyOwnedCommunity, getMyJoinedCommunity } = require('../controllers/community');

router.post('/', create);
router.get('/', getAll);
router.get('/members', getAllMembers);
router.get('/my-owned', getMyOwnedCommunity);
router.get('/my-joined', getMyJoinedCommunity);

module.exports = router;
