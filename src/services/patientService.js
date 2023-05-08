import db from '../models/index';
require('dotenv').config;
import _ from 'lodash';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
import emailServer from './emailService';
import { v4 as uuidv4 } from 'uuid';
import { log } from 'console';

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
                    await db.Booking.findOrCreate({
                        where: { patientId: user[0].id },
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
                    await emailServer.senSimpleEmail({
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
                        errMessage: 'Save info patient success!',
                    });
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};
let buildUrlEmail = (doctorId, token) => {
    let result = `${process.env.URL_REACT}/api/verify-book-appointment?token=${token}&doctorId=${doctorId}`;
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
                console.log('appointment....', appointment);
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
module.exports = {
    handelBookAppointment,
    handelVerifyBookAppointment,
};
