import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
import doctorController from '../controllers/doctorController';
import patientController from '../controllers/patientController';

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
    router.get('/api/get-all-doctor', doctorController.getAllDoctor);
    router.post('/api/post-info-doctor', doctorController.postInfoDoctor);
    router.get('/api/get-detail-doctor', doctorController.getDetailDoctor);
    router.put('/api/put-info-doctor', doctorController.updateDetailInfoDoctor);

    router.post(
        '/api/bulk-create-schedule',
        doctorController.bulkCreateSchedule
    );
    router.get('/api/get-schedule-by-date', doctorController.getScheduleByDate);
    router.get(
        '/api/get-doctor-extra-info-by-id',
        doctorController.getDoctorExtraInfoById
    );
    router.get(
        '/api/get-profile-doctor-by-id',
        doctorController.getProfileDoctorById
    );
    router.get(
        '/api/get-examination-price-by-id',
        doctorController.getExaminationPriceById
    );
    router.post(
        '/api/patient-book-appointment',
        patientController.postBookAppointment
    );

    return app.use('/', router);
};

module.exports = initAppRouter;
