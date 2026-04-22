import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const hashPassword = async () => {
  const plainPassword = process.env.ADMIN_PASSWORD;

  if (!plainPassword) {
    console.error("ADMIN_PASSWORD is not defined in .env");
    return;
  }

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  console.log("HASHED PASSWORD:", hashedPassword);
};

hashPassword();