import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const PEPPER = process.env.PEPPER;

export const hashPassword = async (password: string) => {
  const saltRounds = 10;

  const pepperedPassword = password + PEPPER;
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(pepperedPassword, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  const pepperedPassword = password + PEPPER;
  return bcrypt.compare(pepperedPassword, hashedPassword);
};
