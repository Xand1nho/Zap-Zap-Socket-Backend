import { Router } from "express";
import { upload } from "../config/multer";

import messageController from "./controllers/message";
import imageController from "./controllers/image";

const router = Router();

router.get("/", (request, response) => response.json("Hello World!"));

// Rotas de mensagens
router.post("/messages", messageController.create);

// Rotas de imagens
router.post("/images", upload.single("image"), imageController.create);

export default router;