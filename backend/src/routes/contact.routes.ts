import { Router } from "express";
import { z } from "zod";

export const contactRouter = Router();

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(2000)
});

contactRouter.post("/", (req, res) => {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid contact form data",
      details: result.error.flatten()
    });
  }

  return res.status(201).json({
    message: "Contact request received",
    data: result.data
  });
});