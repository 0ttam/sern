import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';

let router = express.Router();

let initAppRouter = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/create", homeController.getCreate);
    router.get("/read-page", homeController.getRead);
    router.get("/edit", homeController.getEdit);
    router.get("/delete", homeController.getDelete);
    router.post("/create-user", homeController.postUser);
    router.post("/update-user", homeController.postUpdateUser);
    
    router.post("/api/login", userController.handleLogin);
    return app.use("/", router);
}

module.exports = initAppRouter;