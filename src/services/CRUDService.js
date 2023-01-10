import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hasPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hasPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === "1" ? true : false,
        image: data.image,
        roleId: data.roleId,
        positionId: data.positionId,
      });
      resolve("created a new user successfully!");
    } catch (error) {
      reject(error);
    }
  });
};
let showGetAllUsers = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll({});
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};
let getUserUpdate = (idUserUpdate) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userUpdate = await db.User.findOne({
        where: { id: idUserUpdate },
        raw: true,
      });
      if (userUpdate) {
        resolve(userUpdate);
      }
    } catch (error) {
      console.log(error);
    }
  });
};
let updateUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: data.id } });
      if (user) {
        user.id = data.id;
        user.email = data.email;
        user.password = data.password;
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.phoneNumber = data.phoneNumber;
        user.address = data.address;
        user.gender = data.gender;
        user.roleId = data.roleId;
        user.positionId = data.positionId;
        user.image = data.image;

        await user.save();
        resolve("update successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  });
};
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
  showGetAllUsers: showGetAllUsers,
  getUserUpdate: getUserUpdate,
  updateUser: updateUser,
};
