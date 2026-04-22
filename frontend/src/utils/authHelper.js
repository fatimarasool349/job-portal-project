export const loadAuth = () => {
  try {
    const data = localStorage.getItem("auth");
    if (!data) return null;

    const parsed = JSON.parse(data);

    // 🚨 safety check (VERY IMPORTANT)
    if (!parsed || typeof parsed !== "object") return null;
    if (!parsed.user || typeof parsed.user !== "object") return null;

    return {
      user: parsed.user,
      token: parsed.token,
      role: parsed.role?.trim().toLowerCase() || null,
    };
  } catch (err) {
    console.log("Auth parse error:", err);
    return null;
  }
};