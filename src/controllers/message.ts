import { Request, Response } from "express";
import { io } from "../index";

export default {
  create: async (request: Request, response: Response) => {
    const { message, author, date } = request.body;

    io.emit("message", { message, author, date });

    return response.status(201).json({
      message,
      author,
      date,
    });
  },
};