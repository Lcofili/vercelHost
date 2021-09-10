const express = require("express");
const vercelModel = require("./Model");
// const path = require("path");
const router = express.Router();
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: "datco",
//   api_key: "826693875617278",
//   api_secret: "_hFtZv7sbMzZe7KELExUxx_XDNM",
// });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// const filefilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/gif"
//   ) {
//     cb(null, true);
//   } else {
//     cb("file format not supported");
//   }
// };

// const uploadImage = multer({
//   storage: storage,
//   filefilter: filefilter,
//   limits: {
//     filesize: 1024 * 1024 * 3,
//   },
// });

router.get("/", async (req, res) => {
  try {
    const newData = await vercelModel.find();
    res.status(200).json({
      mgs: "found successfully",
      data: newData,
    });
  } catch (err) {
    res.status(404).json({
      mgs: "error",
      data: err,
    });
  }
});

router.post("/", async (req, res) => {
  // res.json(result);
  // res.send(result);
  try {
    const newData = await vercelModel.create({
      name: req.body.name,
      course: req.body.course,
      // title: req.body.title,
      // category: req.body.category,
      // price: req.body.price,
      // description: req.body.description,
      // image: result.secure_url,
      // filepath: req.file.path,
      // cloud_id: result.public_id,
    });
    res.status(201).json({
      mgs: "created successfully",
      data: newData,
    });
  } catch (err) {
    res.status(400).json({
      mgs: "error",
      data: err,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const newData = await vercelModel.findById(req.params.id);
    res.status(200).json({
      msg: "found successfully",
      data: newData,
    });
  } catch (err) {
    res.status(404).json({
      mgs: "error",
      data: err,
    });
  }
});

router.patch("/:id", async (req, res) => {
  const findID = await vercelModel.findById(req.params.id);
  const worth = {
    name: req.body.name,
    course: req.body.course,
    // title: req.body.title,
    // category: req.body.category,
    // price: req.body.price,
    // description: req.body.description,
    // image: result.secure_url,
    // filepath: req.file.path,
    // cloud_id: result.public_id,
  };
  // if (findID) {
  //   await cloudinary.uploader.destroy(findID.cloud_id);
  // }
  const getData = await vercelModel.findByIdAndUpdate(req.params.id, worth, {
    new: true,
  });
  res.json({ data: getData, mgs: "updated" });
});

router.delete("/:id", async (req, res) => {
  try {
    const findID = await vercelModel.findById(req.params.id);
    // await cloudinary.uploader.destroy(findID.cloud_id);

    const deleted = await vercelModel.findByIdAndRemove(
      req.params.id,
      req.body
    );

    res.send("Entry Deleted");
  } catch (err) {
    res.status(400).json({
      mgs: error.message,
    });
  }
});

module.exports = router;
