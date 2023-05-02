import userService from '../services/userService';
import doctorService from '../services/doctorService';

const getTopDoctorHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let data = await userService.getTopDoctorHomeService(+limit);
        return res.status(200).json(data);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const getAllDoctor = async (req, res) => {
    try {
        let data = await userService.getAllDoctorService();
        return res.status(200).json(data);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const postInfoDoctor = async (req, res) => {
    try {
        let response = await userService.postInfoDoctorService(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const getDetailDoctor = async (req, res) => {
    let id = req.query.id;
    try {
        if (!id) {
            return res.status(200).json({
                errCode: -1,
                errMessage: 'Error from server...',
            });
        } else {
            let response = await userService.getDetailDoctorService(id);
            return res.status(200).json(response);
        }
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const updateDetailInfoDoctor = async (req, res) => {
    try {
        let response = await userService.updateDetailInfoDoctorService(
            req.body
        );
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const bulkCreateSchedule = async (req, res) => {
    try {
        let info = await doctorService.bulkCreateSchedule(req.body);
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const getScheduleByDate = async (req, res) => {
    try {
        let info = await doctorService.getScheduleByDate(
            req.query.doctorId,
            req.query.date
        );
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const getDoctorExtraInfoById = async (req, res) => {
    try {
        let info = await doctorService.getDoctorExtraInfoById(
            req.query.doctorId
        );
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const getProfileDoctorById = async (req, res) => {
    try {
        let info = await doctorService.getProfileDoctorById(req.query.doctorId);
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const getExaminationPriceById = async (req, res) => {
    try {
        let info = await doctorService.getExaminationPriceById(
            req.query.doctorId
        );
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};

module.exports = {
    getTopDoctorHome: getTopDoctorHome,
    getAllDoctor: getAllDoctor,
    postInfoDoctor: postInfoDoctor,
    getDetailDoctor: getDetailDoctor,
    updateDetailInfoDoctor: updateDetailInfoDoctor,
    bulkCreateSchedule: bulkCreateSchedule,
    getScheduleByDate: getScheduleByDate,
    getDoctorExtraInfoById: getDoctorExtraInfoById,
    getProfileDoctorById: getProfileDoctorById,
    getExaminationPriceById: getExaminationPriceById,
};
