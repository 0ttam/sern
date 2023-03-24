import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import doctorController from '../controllers/doctorController';

let router = express.Router();

let initAppRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/create', homeController.getCreate);
    router.get('/read-page', homeController.getRead);
    router.get('/edit', homeController.getEdit);
    router.get('/delete', homeController.getDelete);
    router.post('/create-user', homeController.postUser);
    router.post('/update-user', homeController.postUpdateUser);

    router.post('/api/login', userController.handleLogin);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    router.put('/api/edit-user', userController.handleEditUser);

    router.get('/api/all-code', userController.getAllCode);
    router.get('/api/top-doctor-home', doctorController.getTopDoctorHome);

    return app.use('/', router);
};

module.exports = initAppRouter;
