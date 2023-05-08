import patientService from '../services/patientService';

const postBookAppointment = async (req, res) => {
    try {
        let info = await patientService.handelBookAppointment(req.body);
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const postVerifyBookAppointment = async (req, res) => {
    try {
        let info = await patientService.handelVerifyBookAppointment(req.body);
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
    postBookAppointment,
    postVerifyBookAppointment,
};
