import { Request, Response } from "express";
import { io } from "../index";

export default {
  create: async (request: Request, response: Response) => {
    const url = `http://localhost:8080/uploads/${request.file?.filename}`;
    const { author, date } = request.body;

    io.emit("message", {
      url,
      author,
      date
    });

    return response
      .status(201)
      .json({ url, author, date });
  },
};