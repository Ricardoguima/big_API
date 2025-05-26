class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await users.findAll();

            res.json({ users });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = UserController;