export const loadAuth = () => {
  try {
    const data = localStorage.getItem("auth");
    if (!data) return null;

    const parsed = JSON.parse(data);

    return {
      ...parsed,
      role: parsed.role?.trim().toLowerCase(), // ✅ FIX HERE
    };
  } catch {
    return null;
  }
};