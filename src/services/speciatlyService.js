import db from '../models/index';
require('dotenv').config;
import _ from 'lodash';

const handelPostCreateNewSpecialty = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (
                !data.nameVi ||
                !data.image ||
                !data.contentMarkdown ||
                !data.contentHTML
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter.....',
                });
            } else {
                await db.Specialty.create({
                    nameVi: data.nameVi,
                    contentHTML: data.contentHTML,
                    contentMarkdown: data.contentMarkdown,
                    image: data.image,
                });
                resolve({
                    errCode: 0,
                    errMessage: 'Create new specialty success!',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};
const handelGetSpecialtyById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter.....',
                });
            } else {
                if (id === 'ALL') {
                    let data = await db.Specialty.findAll({
                        raw: true,
                    });
                    if (!_.isEmpty(data)) {
                        resolve({
                            errCode: 0,
                            errMessage: 'Get specialty success!',
                            data: data,
                        });
                    } else {
                        resolve({
                            errCode: -1,
                            errMessage: `Couldn't find any specialty!`,
                        });
                    }
                } else {
                    let data = await db.Specialty.findOne({
                        where: { id: id },
                        raw: true,
                    });
                    if (!_.isEmpty(data)) {
                        resolve({
                            errCode: 0,
                            errMessage: 'Get specialty success!',
                            data: data,
                        });
                    } else {
                        resolve({
                            errCode: -1,
                            errMessage: `Couldn't find any specialty!`,
                        });
                    }
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};
let handelEditSpecialtyById = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check id
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: `Missing required parameter ('id' field is empty)!`,
                });
            }
            // find user by id
            let specialty = await db.Specialty.findOne({
                where: { id: data.id },
                raw: false,
            });
            // check user is exist
            if (specialty) {
                specialty.id = data.id;
                specialty.nameVi = data.nameVi;
                specialty.contentHTML = data.contentHTML;
                specialty.contentMarkdown = data.contentMarkdown;
                if (data.image) {
                    specialty.image = data.image;
                }

                await specialty.save();
            } else {
                resolve({
                    errCode: 2,
                    errMessage: 'Specialty is not found!',
                });
            }
            resolve({
                errCode: 0,
                errMessage: 'Update specialty successfully!',
            });
        } catch (error) {
            reject(error);
        }
    });
};
const handelDeleteSpecialtyById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let specialty = await db.Specialty.destroy({ where: { id: id } });
            if (!specialty) {
                resolve({
                    errCode: 2,
                    errMessage: `The specialty isn't exist!`,
                });
            }
            resolve({
                errCode: 0,
                errMessage: 'Delete specialty successfully!',
            });
        } catch (error) {
            reject(error);
        }
    });
};

const handelGetListDoctorBySpecialtyAndDetailSpecialtyById = (
    specialtyId,
    provinceId
) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!specialtyId && !provinceId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter.....',
                });
            } else {
                let data = {};
                let dataDoctor = {};
                if (provinceId === 'ALL') {
                    dataDoctor = await db.Doctor_Info.findAll({
                        where: { specialtyId: specialtyId },
                        attributes: ['doctorId', 'specialtyId'],
                        include: [
                            {
                                model: db.User,
                                attributes: ['firstName', 'lastName', 'avatar'],
                                include: [
                                    {
                                        model: db.Markdown,
                                        attributes: ['description'],
                                    },
                                    {
                                        model: db.Allcode,
                                        as: 'positionData',
                                        attributes: ['valueEn', 'valueVi'],
                                    },
                                ],
                            },
                        ],
                        raw: true,
                        nest: true,
                    });
                } else {
                    dataDoctor = await db.Doctor_Info.findAll({
                        where: {
                            specialtyId: specialtyId,
                            provinceId: provinceId,
                        },
                        attributes: ['doctorId', 'specialtyId'],
                        include: [
                            {
                                model: db.User,
                                attributes: ['firstName', 'lastName', 'avatar'],
                                include: [
                                    {
                                        model: db.Markdown,
                                        attributes: ['description'],
                                    },
                                    {
                                        model: db.Allcode,
                                        as: 'positionData',
                                        attributes: ['valueEn', 'valueVi'],
                                    },
                                ],
                            },
                        ],
                        raw: true,
                        nest: true,
                    });
                }

                let dataSpecialty = await db.Specialty.findOne({
                    where: { id: specialtyId },
                });

                if (!_.isEmpty(dataSpecialty)) {
                    data = {
                        dataDoctor: dataDoctor,
                        dataSpecialty: dataSpecialty,
                    };
                    resolve({
                        errCode: 0,
                        errMessage: 'Get List doctor by specialtyId success!',
                        data: data,
                    });
                } else {
                    resolve({
                        errCode: -1,
                        errMessage: `Couldn't find any doctor!`,
                    });
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    handelPostCreateNewSpecialty,
    handelGetSpecialtyById,
    handelEditSpecialtyById,
    handelDeleteSpecialtyById,
    handelGetListDoctorBySpecialtyAndDetailSpecialtyById,
};
