import clinicService from '../services/clinicService';

const postCreateNewClinic = async (req, res) => {
    try {
        let info = await clinicService.handleCreateNewClinic(req.body);
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const getClinicById = async (req, res) => {
    try {
        let info = await clinicService.handleGetClinicById(req.query.id);
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const getListDoctorByClinicProvinceId = async (req, res) => {
    try {
        let info = await clinicService.handleGetListDoctorByClinicProvinceId(
            req.query.clinicId,
            req.query.specialtyId
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
const putEditClinicById = async (req, res) => {
    try {
        let info = await clinicService.handelEditClinicById(req.body);
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const handleDeleteClinic = async (req, res) => {
    try {
        let info = await clinicService.handleDeleteClinicById(req.query.id);
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
    postCreateNewClinic: postCreateNewClinic,
    getClinicById: getClinicById,
    getListDoctorByClinicProvinceId: getListDoctorByClinicProvinceId,
    putEditClinicById: putEditClinicById,
    handleDeleteClinic,
};
