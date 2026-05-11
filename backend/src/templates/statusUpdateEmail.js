import { baseEmail } from "./baseEmail.js";

export const statusUpdateEmail = (name, status) =>
  baseEmail(
    `Application Update`,
    `
    <p>Hi ${name},</p>
    <p>Your application status is:</p>
    <h3 style="color:#4f46e5">${status}</h3>
    `
  );