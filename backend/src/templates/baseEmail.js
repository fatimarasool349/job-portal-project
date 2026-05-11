export const baseEmail = (title, content) => `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f3f4f6;font-family:Arial">

  <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:10px;overflow:hidden">

    <div style="background:#4f46e5;padding:20px;color:white;text-align:center">
      <h2>Job Portal</h2>
    </div>

    <div style="padding:25px">
      <h3>${title}</h3>
      ${content}
    </div>

    <div style="text-align:center;padding:15px;font-size:12px;background:#f9fafb">
      © 2026 Job Portal
    </div>

  </div>

</body>
</html>
`;