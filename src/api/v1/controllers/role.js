const Role = require('../models/Role');

const getAll = async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
        // res.json({message: 'getRoles'});
    } catch (e) {
        res.status(500).json({message: 'Something went wrong, try again'});
    }
}

const create = async (req, res) => {
    try {
        if(req.body.name < 2) {
            res.status(400).json({
                status: false,
                content: {
                    message: "Name should be at least 2 characters."
                }
            });
        }
        const { name } = req.body;
        const role = new Role({ name });
        await role.save();
        res.status(201).json({
            status: true,
            content: {
                data: role
            }
        });
    } catch (e) {
        // res.status(500).json({message: 'Something went wrong, try again'});
        res.status(500).json({message: e.message});
        console.log(e);
    }
}

module.exports = { getAll, create };
