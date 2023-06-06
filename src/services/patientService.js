import db from '../models/index';
require('dotenv').config;
import _ from 'lodash';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
import emailServer from './emailService';
import { v4 as uuidv4 } from 'uuid';

let handelBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (
                !data.email ||
                !data.doctorId ||
                !data.date ||
                !data.timeType ||
                !data.doctorId ||
                !data.address ||
                !data.phoneNumber ||
                !data.gender ||
                !data.lastName ||
                !data.firstName
            ) {
                resolve({ errCode: 1, errMessage: 'Missing parameter' });
            } else {
                // Upsert patient
                let hashUserPassword = (password) => {
                    return new Promise(async (resolve, reject) => {
                        try {
                            let hashPassword = await bcrypt.hashSync(
                                password,
                                salt
                            );
                            resolve(hashPassword);
                        } catch (error) {
                            reject(error);
                        }
                    });
                };
                let hasPasswordFromBcrypt = await hashUserPassword(
                    data.phoneNumber
                );
                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        roleId: 'R3',
                        lastName: data.lastName,
                        firstName: data.firstName,
                        gender: data.gender,
                        address: data.address,
                        password: hasPasswordFromBcrypt,
                        phoneNumber: data.phoneNumber,
                    },
                });
                // Create a booking record
                if (user && user[0]) {
                    let token = uuidv4();
                    let [patient, created] = await db.Booking.findOrCreate({
                        where: { patientId: user[0].id, statusId: 'S2' },
                        defaults: {
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType,
                            reason: data.reason,
                            token: token,
                        },
                    });
                    if (created === true) {
                        await emailServer.sendSimpleEmail({
                            email: data.email,
                            firstName: data.firstName,
                            lastName: data.lastName,
                            firstNameDoctor: data.firstNameDoctor,
                            lastNameDoctor: data.lastNameDoctor,
                            timeDisplay: data.timeDisplay,
                            dayDisplay: data.dayDisplay,
                            languages: data.languages,
                            linkRedirect: buildUrlEmail(data.doctorId, token),
                        });
                        resolve({
                            data: user,
                            errCode: 0,
                            errMessageVi:
                                'Đăng kí khám bệnh thành công. Vui lòng kiểm tra email!',
                            errMessageEn:
                                'Successful registration for medical examination. Please check your email!',
                        });
                    } else if (created === false) {
                        resolve({
                            data: user,
                            errCode: 0,
                            errMessageVi:
                                'Thông tin đăng kí đã tồn tại. Vui lòng kiểm tra lại email!',
                            errMessageEn:
                                'Registration information already exists. Please check your email again!',
                        });
                    }
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};
let buildUrlEmail = (doctorId, token) => {
    let result = `${process.env.URL_REACT}/verify-book-appointment?token=${token}&doctorId=${doctorId}`;
    return result;
};
let handelVerifyBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data || !data.doctorId || !data.token) {
                resolve({ errCode: 1, errMessage: 'Missing parameter' });
            } else {
                let appointment = await db.Booking.findOne({
                    where: {
                        doctorId: data.doctorId,
                        token: data.token,
                        statusId: 'S1',
                    },
                    raw: false,
                });
                if (appointment) {
                    appointment.statusId = 'S2';
                    await appointment.save();
                    resolve({
                        errCode: 0,
                        errMessage: 'Appointment confirmed successfully!',
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage:
                            'The user does not exist or the appointment is already booked!',
                    });
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};
let handleLoadListPatientByDoctorTime = (doctorId, date) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!doctorId || !date) {
                resolve({ errCode: 1, errMessage: 'Missing parameter' });
            } else {
                let listPatient = await db.Booking.findAll({
                    where: {
                        doctorId: doctorId,
                        date: date,
                        statusId: 'S2',
                    },
                    include: [
                        {
                            model: db.User,
                            as: 'patientData',
                            attributes: { exclude: ['password', 'avatar'] },
                            include: [
                                {
                                    model: db.Allcode,
                                    as: 'genderData',
                                    attributes: ['valueVi', 'valueEn'],
                                },
                            ],
                        },
                        {
                            model: db.Allcode,
                            as: 'timeTypeData',
                            attributes: ['valueVi', 'valueEn'],
                        },
                    ],
                    raw: false,
                    nest: true,
                });
                if (listPatient) {
                    resolve({
                        errCode: 0,
                        errMessage: 'get list patient successfully!',
                        data: listPatient,
                    });
                } else {
                    resolve({
                        errCode: 2,
                        errMessage: 'The patient does not exist!',
                    });
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};
let handleSendInvoiceAndRecipience = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data) {
                resolve({
                    errCode: 1,
                    errMessageVi: 'Thiếu tham số',
                    errMessageEn: 'Missing parameter',
                    errType: 'failed',
                });
            } else {
                let patient = await db.Booking.findOne({
                    where: { patientId: data.patientId, statusId: 'S2' },
                    raw: false,
                });

                await emailServer.sendInvoiceEmail({
                    email: data.patientEmail,
                    image: data.attachImage,
                    languages: data.languages,
                });
                if (patient) {
                    patient.statusId = 'S3';
                    await patient.save();
                }
                resolve({
                    data: patient,
                    errCode: 0,
                    errType: 'success',
                    errMessageVi:
                        'Gửi hóa đơn/đơn thuốc cho khách hàng thành công!',
                    errMessageEn:
                        'Send invoice/recipience to customer successfully!',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    handelBookAppointment,
    handelVerifyBookAppointment,
    handleLoadListPatientByDoctorTime,
    handleSendInvoiceAndRecipience,
};
