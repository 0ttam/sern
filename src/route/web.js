import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initAppRouter = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/create", homeController.getCreate);
    router.get("/read-page", homeController.getRead);
    router.get("/edit", homeController.getEdit);
    router.get("/delete", homeController.getDelete);
    router.post("/create-user", homeController.postUser);
    router.post("/update-user", homeController.postUpdateUser);
    return app.use("/", router);
}

module.exports = initAppRouter;