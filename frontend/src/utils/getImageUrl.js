export const getImageUrl = (img) => {
  if (!img) return "/default-avatar.png";
  return `http://localhost:5000/upload/${img}`;
};