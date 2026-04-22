import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "upload";

    if (req.baseUrl.includes("candidate")) {
      folder = "upload/candidates";
    } else if (req.baseUrl.includes("user")) {
      folder = "upload/users";
    }

    const uploadPath = path.join(process.cwd(), folder);

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });