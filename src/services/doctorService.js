import db from '../models/index';
require('dotenv').config;
import _ from 'lodash';

const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;
let bulkCreateSchedule = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let schedule = data.arrSchedule;
            if (!data.arrSchedule || !data.doctorId || !data.date) {
                resolve({
                    errCode: -1,
                    errMessage: 'Missing require parameter...',
                });
            } else {
                if (schedule && schedule.length > 0) {
                    schedule = schedule.map((item) => {
                        item.maxNumber = MAX_NUMBER_SCHEDULE;
                        return item;
                    });
                }
                let existing = await db.Schedule.findAll({
                    where: { doctorId: data.doctorId, date: data.date },
                    attribute: ['timeType', 'date', 'doctorId', 'maxNumber'],
                    raw: true,
                });

                let toCreate = _.differenceWith(schedule, existing, (a, b) => {
                    return a.timeType === b.timeType && +a.date === +b.date;
                });
                console.log('============', toCreate);
                if (toCreate && toCreate.length > 0) {
                    await db.Schedule.bulkCreate(toCreate);
                    resolve({
                        errCode: 0,
                        errMessage: 'Ok',
                    });
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};

let getScheduleByDate = (doctorId, date) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!doctorId || !date) {
                resolve({
                    errCode: -1,
                    errMessage: 'Missing require parameter...',
                });
            } else {
                let dataSchedule = await db.Schedule.findAll({
                    where: {
                        doctorId: doctorId,
                        date: date,
                    },
                    include: [
                        {
                            model: db.Allcode,
                            as: 'availableTime',
                            attributes: ['valueEn', 'valueVi'],
                        },
                    ],
                    raw: false,
                    nest: true,
                });
                if (!dataSchedule) dataSchedule = [];
                resolve({
                    errCode: 0,
                    data: dataSchedule,
                });
            }
        } catch (error) {
            console.log(error);
        }
    });
};
let getDoctorExtraInfoById = (doctorId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!doctorId) {
                resolve({
                    errCode: -1,
                    errMessage: 'Missing require parameter...',
                });
            } else {
                let dataDoctorExtraInfo = await db.Doctor_Info.findOne({
                    where: {
                        doctorId: doctorId,
                    },
                    exclude: ['id', 'doctorId'],
                    include: [
                        {
                            model: db.Allcode,
                            as: 'priceTypeData',
                            attributes: ['valueEn', 'valueVi'],
                        },
                        {
                            model: db.Allcode,
                            as: 'provinceTypeData',
                            attributes: ['valueEn', 'valueVi'],
                        },
                        {
                            model: db.Allcode,
                            as: 'paymentTypeData',
                            attributes: ['valueEn', 'valueVi'],
                        },
                    ],
                    raw: false,
                    nest: true,
                });
                if (!dataDoctorExtraInfo) dataDoctorExtraInfo = {};
                resolve({
                    errCode: 0,
                    data: dataDoctorExtraInfo,
                });
            }
        } catch (error) {
            console.log(error);
        }
    });
};
let getProfileDoctorById = (doctorId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!doctorId) {
                resolve({
                    errCode: -1,
                    errMessage: 'Missing require parameter...',
                });
            } else {
                let dataProfileDoctorById = await db.User.findOne({
                    where: {
                        id: doctorId,
                    },
                    attributes: { exclude: ['password'] },
                    include: [
                        {
                            model: db.Allcode,
                            as: 'positionData',
                            attributes: ['valueEn', 'valueVi'],
                        },
                        {
                            model: db.Markdown,
                            attributes: {
                                exclude: ['id', 'doctorId'],
                            },
                        },
                        {
                            model: db.Doctor_Info,
                            attributes: {
                                exclude: ['id', 'doctorId'],
                            },
                            include: [
                                {
                                    model: db.Allcode,
                                    as: 'priceTypeData',
                                    attributes: ['valueEn', 'valueVi'],
                                },
                                {
                                    model: db.Allcode,
                                    as: 'provinceTypeData',
                                    attributes: ['valueEn', 'valueVi'],
                                },
                                {
                                    model: db.Allcode,
                                    as: 'paymentTypeData',
                                    attributes: ['valueEn', 'valueVi'],
                                },
                            ],
                        },
                    ],
                    raw: false,
                    nest: true,
                });
                if (dataProfileDoctorById && dataProfileDoctorById.avatar) {
                    dataProfileDoctorById.avatar = Buffer.from(
                        dataProfileDoctorById.avatar,
                        'base64'
                    ).toString('binary');
                }
                if (!dataProfileDoctorById) dataProfileDoctorById = {};
                resolve({
                    errCode: 0,
                    data: dataProfileDoctorById,
                });
            }
        } catch (error) {
            console.log(error);
        }
    });
};

let getExaminationPriceById = (doctorId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!doctorId) {
                resolve({
                    errCode: -1,
                    errMessage: 'Missing require parameter...',
                });
            } else {
                let dataExaminationPriceById = await db.User.findOne({
                    where: {
                        id: doctorId,
                    },
                    attributes: { exclude: ['password', 'avatar'] },
                    include: [
                        {
                            model: db.Doctor_Info,
                            attributes: {
                                exclude: ['id', 'doctorId'],
                            },
                            include: [
                                {
                                    model: db.Allcode,
                                    as: 'priceTypeData',
                                    attributes: ['valueEn', 'valueVi'],
                                },
                            ],
                        },
                    ],
                    raw: false,
                    nest: true,
                });
                if (!dataExaminationPriceById) dataExaminationPriceById = {};
                resolve({
                    errCode: 0,
                    data: dataExaminationPriceById,
                });
            }
        } catch (error) {
            console.log(error);
        }
    });
};

module.exports = {
    bulkCreateSchedule,
    getScheduleByDate,
    getDoctorExtraInfoById,
    getProfileDoctorById,
    getExaminationPriceById,
};
