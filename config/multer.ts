import multer from "multer";

const uploadConfig = multer.diskStorage({
  destination: "./uploads",
  filename: (request, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: uploadConfig });

export { upload };