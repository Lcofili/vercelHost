// const express = require("express");
// const mongoose = require("mongoose");
// const Model = require("./Model");

// const newUser = async (req, res) => {
//   try {
//     const user = await Model.create({
//       name: req.body.name,
//       course: req.body.course,
//     });
//     res.status(200).json({ user });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // ALL USERS
// const allUser = async (req, res) => {
//   try {
//     const users = await Model.find();
//     res.status(200).json({ users });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// // get a single user

// const singleUser = async (req, res) => {
//   try {
//     const user = await Model.findById(req.params.id);
//     res.status(200).json(singleUser);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// //to update user

// const update = async (req, res) => {
//   try {
//     const user = await Model.findById(req.params.id);
//     const updateUser = await user.updateOne();
//     res.status(200).json({ updateUser });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // to delete user

// const deleteUser = async (req, res) => {
//   try {
//     const user = await Model.findById(req.params.id);
//     const deleteUser = await user.deleteOne();
//     res.status(200).json({ deleteUser });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// // to delete all user

// const deleteAllUser = async (req, res) => {
//   try {
//     const user = await Model.deleteMany();
//     res.status(200).json({ user });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// module.exports = {
//   newUser,
//   allUser,
//   update,
//   singleUser,
//   deleteUser,
//   deleteAllUser,
// };
