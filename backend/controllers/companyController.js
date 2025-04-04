import { Company } from "../models/companyModel.js";
import cloudinary from "../utils/cloudinary/cloudinary.js";
import getDataUri from "../utils/cloudinary/datauri.js";

//@description     Register new company by admin
//@route           POST /api/v1/company/register
//@access          Private
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName || companyName.trim() === "") {
      return res.status(400).json({
        message: "Company name is required and cannot be empty.",
        success: false,
      });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "You can't register same company.",
        success: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully.",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//@description     Search all companies
//@route           GET /api/v1/company/get
//@access          Private
export const getCompany = async (req, res) => {
  try {
    const userId = req.id; // logged in user id
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({
        message: "Companies not found.",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//@description     Search Company By Id
//@route           GET /api/v1/company/get/:id
//@access          Private
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//@description     Update Company
//@route           PUT /api/v1/company/update/:id
//@access          Private
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;

    // Cloudinary ayega idhar
    let logo;

    if (req.file) {
      const file = req.file;
      const fileUri = getDataUri(file);

      const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
        folder: "jobPulseProject", // Optional: Specify a folder in Cloudinary
      });

      logo = cloudResponse.secure_url;
    }

    const updateData = { name, description, website, location, logo };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company information updated.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
