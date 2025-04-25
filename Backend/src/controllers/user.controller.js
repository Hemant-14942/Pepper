import userModel from "../models/user.model.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {v2 as cloudinary} from "cloudinary"

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing Details!" });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Enter a Valid Email" });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Enter a Strong Password",
      });
    }

    const user = await userModel.findOne({ email });

    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "User Already Exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing Details!" });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Enter a Valid Email" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Doesn't Exist" });
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      success: true,
      message: "Logged In Successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, gender, dob, phone, address } = req.body;
    const imageFile = req.file;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Enter a Valid Email" });
    }

    let updateData = { name, gender, dob, phone, address };

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
      updateData.image = imageUpload.secure_url;
    }

    if (password) {
      if (password.length < 8) {
        return res.status(400).json({ success: false, message: "Enter a Strong Password (Min 8 chars)" });
      }
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await userModel.findOneAndUpdate({email},updateData)

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User Not Found" });
    }

    return res.status(200).json({ success: true, message: "User Updated Successfully", user: updatedUser });

  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

export { registerUser,loginUser,updateUser };
