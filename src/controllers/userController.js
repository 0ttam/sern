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
        errMessage: 'OK',
        users: users,
    });
};
const handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    return res.status(200).json(message);
};
const handleDeleteUser = async (req, res) => {
    if (!req.query.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter!',
        });
    }
    console.log(req.query.id);
    let message = await userService.deleteUser(req.query.id);
    return res.status(200).json(message);
};
const handleEditUser = async (req, res) => {
    let data = req.body;
    if (!data) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter!',
        });
    }
    let message = await userService.editUser(data);
    return res.status(200).json(message);
};

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
    handleDeleteUser: handleDeleteUser,
    handleEditUser: handleEditUser,
};
