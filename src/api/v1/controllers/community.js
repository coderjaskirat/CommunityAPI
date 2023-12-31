const create = async (req, res) => {
    const { name, description } = req.body;
    try {
        const community = await Community.create({
            name,
            description,
            owner: req.user
        });
        res.status(201).json({
            success: true,
            data: community
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        });
    }
};

const getAll = async (req, res) => {
    try {
        const communities = await Community.find();
        res.status(200).json({
            success: true,
            data: communities
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        });
    }
};

const getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json({
            success: true,
            data: members
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        });
    }
};

const getMyOwnedCommunity = async (req, res) => {
    try {
        const communities = await Community.find({ owner: req.user });
        res.status(200).json({
            success: true,
            data: communities
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        });
    }
};

const getMyJoinedCommunity = async (req, res) => {
    try {
        const communities = await Member.find({ user: req.user });
        res.status(200).json({
            success: true,
            data: communities
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        });
    }
};

module.exports = { create, getAll, getAllMembers, getMyOwnedCommunity, getMyJoinedCommunity };