import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "upload/others";

    console.log("FIELDNAME:", file.fieldname);

    if (file.fieldname === "resume") folder = "upload/resumes";
    else if (file.fieldname === "profileImage") folder = "upload/profile";
    else if (file.fieldname === "logo") folder = "upload/company";
    else if (file.fieldname === "photos") folder = "upload/photos"; 

    // ensure folder exists (relative path ONLY)
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    cb(null, folder);
  },

  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname.replace(/\s/g, "");
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "resume") {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Resume must be PDF"), false);
    }
  } else {
    // images
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files allowed"), false);
    }
  }
};

export const upload = multer({
  storage,
  fileFilter,
});
