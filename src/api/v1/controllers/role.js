const Role = require('../models/Role');
const { minNameLength } = require('../validations/role');

const getAll = async (req, res) => {
    try {
        const roles = await Role.find();
        limit = 10;
        let pages = Math.floor(roles.length / limit);
        let page = Number(req.query.page) || 1;
        let startIndex = (page - 1) * limit;
        let endIndex = page * limit;

        res.json({
            status: true,
            content: {
                meta: {
                    total: roles.length,
                    pages: pages,
                    page: page
                },
                data: roles.slice(startIndex, endIndex)
            }
        });
    } catch (e) {
        res.status(500).json({message: 'Something went wrong, try again'});
    }
}

const create = async (req, res) => {
    try {
        if(!minNameLength(req.body.name)) {
            res.status(400).json({
                status: false,
                content: {
                    param: "name",
                    message: "Name should be at least 2 characters.",
                    code: "INVALID_INPUT"
                }
            });
        }
        const { name } = req.body;
        const role = new Role({ name });
        await role.save();
        res.status(201).json({
            status: true,
            content: {
                data: {
                    _id: role._id,
                    name: role.name,
                    created_at: role.created_at,
                    updated_at: role.updated_at
                }
            }
        });
    } catch (e) {
        res.status(500).json({message: 'Something went wrong, try again'});
    }
}

module.exports = { getAll, create };
