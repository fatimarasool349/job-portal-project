import { baseEmail } from "./baseEmail.js";

export const userSignupEmail = (name) =>
  baseEmail(
    `Welcome ${name} 👋`,
    `
    <p>Your account has been created successfully.</p>
    <p>You can now apply for jobs and track status.</p>
    `
  );