import db from '../models/index';
require('dotenv').config;
import _ from 'lodash';

const handleCreateNewClinic = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (
                !data.address ||
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
                await db.Clinic.create({
                    address: data.address,
                    nameVi: data.nameVi,
                    contentHTML: data.contentHTML,
                    contentMarkdown: data.contentMarkdown,
                    image: data.image,
                });
                resolve({
                    errCode: 0,
                    errMessage: 'Create new clinic success!',
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};
const handleGetClinicById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter.....',
                });
            } else {
                if (id === 'ALL') {
                    let listClinic = await db.Clinic.findAll({
                        order: [['createdAt', 'DESC']],
                    });
                    if (!listClinic) {
                        listClinic = {};
                    }
                    resolve({
                        errCode: 0,
                        data: listClinic,
                    });
                } else if ((id = 'ALL-NO-IMAGE')) {
                    let listClinic = await db.Clinic.findAll({
                        attributes: ['id', 'nameVi'],
                        order: [['createdAt', 'DESC']],
                    });
                    if (!listClinic) {
                        listClinic = {};
                    }
                    resolve({
                        errCode: 0,
                        data: listClinic,
                    });
                } else {
                    resolve({
                        errCode: 1,
                        errMessage: 'Missing parameter.....',
                    });
                }
            }
        } catch (e) {
            reject(e);
        }
    });
};

const handleGetListDoctorByClinicProvinceId = (clinicId, specialtyId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!clinicId && !specialtyId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter.....',
                });
            } else {
                let data = {};
                let dataDoctor = {};
                if (specialtyId === 'ALL') {
                    dataDoctor = await db.Doctor_Info.findAll({
                        where: { clinicId: clinicId },
                        attributes: ['doctorId', 'specialtyId', 'clinicId'],
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
                            clinicId: clinicId,
                            specialtyId: specialtyId,
                        },
                        attributes: ['doctorId', 'clinicId', 'specialtyId'],
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

                let dataClinic = await db.Clinic.findOne({
                    where: { id: clinicId },
                });

                if (!_.isEmpty(dataClinic)) {
                    data = {
                        dataDoctor: dataDoctor,
                        dataClinic: dataClinic,
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

let handelEditClinicById = (data) => {
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
            let clinic = await db.Clinic.findOne({
                where: { id: data.id },
                raw: false,
            });
            // check user is exist
            if (clinic) {
                clinic.id = data.id;
                clinic.nameVi = data.nameVi;
                clinic.address = data.address;
                clinic.contentHTML = data.contentHTML;
                clinic.contentMarkdown = data.contentMarkdown;
                if (data.image) {
                    clinic.image = data.image;
                }

                await clinic.save();
            } else {
                resolve({
                    errCode: 2,
                    errMessage: 'Clinic is not found!',
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

let handleDeleteClinicById = (clinicId) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check id
            if (!clinicId) {
                resolve({
                    errCode: 1,
                    errMessage: `Missing required parameter ('clinicId' field is empty)!`,
                });
            } else {
                let clinic = await db.Clinic.destroy({
                    where: { id: clinicId },
                });
                if (!clinic) {
                    resolve({
                        errCode: 2,
                        errMessage: `The specialty isn't exist!`,
                    });
                }
                resolve({
                    errCode: 0,
                    errMessage: 'Delete clinic success!',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    handleCreateNewClinic,
    handleGetClinicById,
    handleGetListDoctorByClinicProvinceId,
    handelEditClinicById,
    handleDeleteClinicById,
};
