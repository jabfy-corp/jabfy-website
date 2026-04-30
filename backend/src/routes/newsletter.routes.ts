import { Router } from "express";
import { z } from "zod";

export const newsletterRouter = Router();

const newsletterSchema = z.object({
  email: z.string().email()
});

newsletterRouter.post("/", (req, res) => {
  const result = newsletterSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid email",
      details: result.error.flatten()
    });
  }

  return res.status(201).json({
    message: "Newsletter subscription received",
    email: result.data.email
  });
});