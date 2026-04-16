import bcrypt from "bcryptjs";

const hashPassword = async () => {
  const plainPassword = "Confiz@123";

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  console.log("HASHED PASSWORD:", hashedPassword);
};

hashPassword();