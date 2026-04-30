import { Router } from "express";

export const projectRouter = Router();

projectRouter.get("/", (_req, res) => {
  res.json({
    name: "Jabfy",
    tagline: "A secure and universal smart-home ecosystem.",
    phase: "Ideation and early technical exploration",
    vision:
      "Jabfy aims to build a secure smart-home ecosystem focused on IoT, local intelligence, and universal data interoperability.",
    pillars: [
      "IoT-first architecture",
      "Cybersecurity by design",
      "Universal JSON data bus",
      "Local-first automation",
      "Smart-home interoperability"
    ],
    roadmap: [
      {
        title: "Ideation",
        status: "current"
      },
      {
        title: "Technical choices",
        status: "in-progress"
      },
      {
        title: "Core prototype",
        status: "planned"
      },
      {
        title: "IoT integrations",
        status: "planned"
      }
    ]
  });
});