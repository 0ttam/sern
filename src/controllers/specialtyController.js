import specialtyService from '../services/speciatlyService';

const postCreateNewSpecialty = async (req, res) => {
    try {
        let info = await specialtyService.handelPostCreateNewSpecialty(
            req.body
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
const getSpecialtyById = async (req, res) => {
    try {
        let info = await specialtyService.handelGetSpecialtyById(req.query.id);
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const putEditSpecialtyById = async (req, res) => {
    try {
        let info = await specialtyService.handelEditSpecialtyById(req.body);
        return res.status(200).json(info);
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server...',
        });
    }
};
const handleDeleteSpecialty = async (req, res) => {
    try {
        let info = await specialtyService.handelDeleteSpecialtyById(req.query.id);
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
    postCreateNewSpecialty,
    getSpecialtyById,
    putEditSpecialtyById,
    handleDeleteSpecialty,
};
