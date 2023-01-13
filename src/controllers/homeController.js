import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", { data: data });
  } catch (error) {
    console.log(error);
  }
};
let getCreate = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("createpage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};
let getRead = async (req, res) => {
  try {
    let data = await CRUDService.showGetAllUsers();
    return res.render("readpage.ejs", { data: data });
  } catch (error) {
    console.log(error);
  }
};

let postUser = async (req, res) => {
  try {
    let message = await CRUDService.createNewUser(req.body);
    return res.send(message);
  } catch (error) {
    console.log(error);
  }
};
let getEdit = async (req, res) => {
  try {
    let idUserUpdate = await req.query.id;
    let userUpdate = await CRUDService.getUserUpdate(idUserUpdate);
    return res.render("updatepage", { data: userUpdate });
  } catch (error) {
    console.log(error);
  }
};
let postUpdateUser = async (req, res) => {
  try {
    let userData = await req.body;
    if (userData) {
      let updateMessage = await CRUDService.updateUser(userData);
      if (updateMessage) {
        let data = await db.User.findAll();
        return res.render("homepage", { data: data });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
let getDelete = async (req, res) => {
  try {
    let userId = req.query.id;
    await CRUDService.deleteUserById(userId);
    let data = await db.User.findAll();
    return res.render("homepage", { data: data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHomePage: getHomePage,
  getCreate: getCreate,
  postUser: postUser,
  getRead: getRead,
  getEdit: getEdit,
  postUpdateUser: postUpdateUser,
  getDelete: getDelete,
};
