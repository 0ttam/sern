import userService from '../services/userService';

const handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Missing inputs parameter!',
        });
    }
    let userData = await userService.handleUserLogin(email, password);
    return res.status(200).json({
        errCode: userData.errCode,
        errMessage: userData.errMessage,
        user: userData.user ? userData.user : {},
    });
};
const handleGetAllUsers = async (req, res) => {
    let userId = req.query.id; // ALL, id
    if (!userId) {
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Missing inputs parameter!',
        });
    }
    let users = await userService.getAllUsers(userId);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        users: users,
    });
};

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
};
