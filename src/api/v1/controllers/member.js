const addMember = async (req, res) => {
    const { community, role } = req.body;
    try {
        const member = await Member.create({
            community,
            role,
            user: req.user
        });
        res.status(201).json({
            success: true,
            data: member
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        });
    }
};

const removeMember = async (req, res) => {
    const { community, role } = req.body;
    try {
        const member = await Member.findOneAndDelete({
            community,
            role,
            user: req.user
        });
        res.status(200).json({
            success: true,
            data: member
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        });
    }
};

module.exports = { addMember, removeMember };
