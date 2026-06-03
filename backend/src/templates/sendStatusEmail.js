import sendEmail from "../utils/sendEmail.js";
import { baseEmail } from "./baseEmail.js";

export const sendStatusEmail = async (application) => {
  try {
    const title = "Application Status Updated";

    let statusColor = "#4f46e5";

    if (application.status === "rejected") {
      statusColor = "#ef4444";
    } else if (application.status === "accepted") {
      statusColor = "#22c55e";
    } else if (application.status === "shortlisted") {
      statusColor = "#3b82f6";
    }

    const content = `
<p>
  Hi <b>${application.firstName} ${application.lastName || ""}</b>,
</p>
      <p>Your application for:</p>

      <p style="font-size:16px;color:#111;font-weight:600">
        ${application.job.title}
      </p>

      <p style="margin-top:10px">
        has been updated to:
      </p>

      <p>
        <span style="
          background:${statusColor};
          color:#fff;
          padding:6px 12px;
          border-radius:6px;
          font-weight:bold;
          text-transform:uppercase;
        ">
          ${application.status}
        </span>
      </p>

      <p style="margin-top:20px;color:#555">
        We will notify you about further updates regarding your application.
      </p>
    `;

    const html = baseEmail(title, content);

    await sendEmail(application.email, "Application Status Update", html);
  } catch (error) {
    console.log("sendStatusEmail error:", error.message);
  }
};
