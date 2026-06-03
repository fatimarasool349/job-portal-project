import { baseEmail } from "./baseEmail.js";

export const recruiterSignupEmail = (name, company) =>
  baseEmail(
    `Welcome Recruiter ${name}`,
    `
    <p>You are assigned to <b>${company}</b>.</p>
    <p>You can now post jobs and manage applications.</p>
    `
  );