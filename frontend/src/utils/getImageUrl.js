export const getImageUrl = (img) => {
  if (!img) {return "/default-avatar.png";}

  // already full URL (for future cloud use)
  if (img.startsWith("http")) {return img;}

  // correct handling of stored path
  return `http://localhost:5000${img}`;
};