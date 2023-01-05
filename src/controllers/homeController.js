import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", { data: JSON.stringify(data) });
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
let postUser = async (req, res) => {
  try {
    let message = await CRUDService.createNewUser(req.body);
    return res.send(message);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHomePage: getHomePage,
  getCreate: getCreate,
  postUser: postUser,
};
