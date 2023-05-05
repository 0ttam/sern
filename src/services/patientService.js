import db from '../models/index';
require('dotenv').config;
import _ from 'lodash';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

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
                console.log('check user:', user[0]);
                // Create a booking record
                if (user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: { patientId: user[0].id },
                        defaults: {
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType,
                            reason: data.reason,
                        },
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

module.exports = {
    handelBookAppointment,
};
