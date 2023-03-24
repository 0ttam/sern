import db from '../models/index';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: [
                        'email',
                        'password',
                        'roleId',
                        'firstName',
                        'lastName',
                    ],
                    raw: true,
                });
                if (user) {
                    //compare password
                    let check = await bcrypt.compareSync(
                        password,
                        user.password
                    );
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'Ok';
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password!';
                    }
                } else {
                    //return error
                    userData.errCode = 2;
                    userData.errMessage = 'User is not found';
                }
            } else {
                //return error
                userData.errCode = 1;
                userData.errMessage =
                    "Your's Email isn't exist in System. Plz try other email!";
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    });
};

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { email: email } });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
};
let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    raw: true,
                    attributes: { exclude: ['password'] },
                });
            } else if (userId !== 'ALL' && userId) {
                users = await db.User.findOne({
                    raw: true,
                    where: { id: userId },
                    attributes: { exclude: ['password'] },
                });
            }
            resolve(users);
        } catch (error) {
            reject(error);
        }
    });
};
let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            //check email is exist
            let check = await checkUserEmail(data.email);
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage:
                        'Your email is already in used. Plz try another email!',
                });
            } else {
                //check email found
                if (data.email) {
                    let hasPasswordFromBcrypt = await hashUserPassword(
                        data.password
                    );
                    await db.User.create({
                        email: data.email,
                        password: hasPasswordFromBcrypt,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        address: data.address,
                        phoneNumber: data.phoneNumber,
                        gender: data.gender,
                        avatar: data.avatar,
                        roleId: data.roleId,
                        positionId: data.positionId,
                    });
                    resolve({
                        errCode: 0,
                        errMessage: 'Ok',
                    });
                } else if (!data.email) {
                    resolve({
                        errCode: 1,
                        errMessage: 'Email not yet entered',
                    });
                }
            }
        } catch (error) {
            reject(error);
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
let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.destroy({ where: { id: id } });
            if (!user) {
                resolve({
                    errCode: 2,
                    errMessage: `The user isn't exist!`,
                });
            }
            resolve({
                errCode: 0,
                errMessage: 'Delete user successfully!',
            });
        } catch (error) {
            reject(error);
        }
    });
};
let editUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hasPasswordFromBcrypt = '';
            // check id
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: `Missing required parameter ('id' field is empty)!`,
                });
            }
            // find user by id
            let user = await db.User.findOne({
                where: { id: data.id },
                raw: false,
            });
            // check user is exist
            if (user) {
                user.id = data.id;
                user.email = data.email;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.phoneNumber = data.phoneNumber;
                user.address = data.address;
                user.gender = data.gender;
                user.roleId = data.roleId;
                user.positionId = data.positionId;
                if (data.avatar) {
                    user.avatar = data.avatar;
                }

                await user.save();
            } else {
                resolve({
                    errCode: 2,
                    errMessage: 'User is not found!',
                });
            }
            resolve({
                errCode: 0,
                errMessage: 'Created a new user successfully!',
            });
        } catch (error) {
            reject(error);
        }
    });
};
let getAllCodeService = (typeInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!typeInput) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing require parameters!',
                });
            } else {
                let res = {};
                let allcode = await db.Allcode.findAll({
                    where: { type: typeInput },
                });
                res.errCode = 0;
                res.data = allcode;
                resolve(res);
            }
        } catch (e) {
            reject(e);
        }
    });
};
let getTopDoctorHomeService = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!limitInput) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing require parameters!',
                });
            } else {
                let res = {};
                let topDoctor = await db.User.findAll({
                    raw: true,
                    nest: true,
                    where: { roleId: 'R2' },
                    attributes: { exclude: ['password'] },
                    limit: limitInput,
                    order: [['createdAt', 'DESC']],
                    include: [
                        {
                            model: db.Allcode,
                            as: 'positionData',
                            attributes: ['valueEn', 'valueVi'],
                        },
                        {
                            model: db.Allcode,
                            as: 'genderData',
                            attributes: ['valueEn', 'valueVi'],
                        },
                    ],
                });
                res.errCode = 0;
                res.topDoctor = topDoctor;
                resolve(res);
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    editUser: editUser,
    getAllCodeService: getAllCodeService,
    getTopDoctorHomeService: getTopDoctorHomeService,
};
