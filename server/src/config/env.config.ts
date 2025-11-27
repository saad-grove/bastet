import "dotenv/config";

export const envConfig = {
  dbUrl: process.env.MONGO_URL!,
  port: 8080,
  jwtSecret: process.env.JWT_SECRET! || "sameoldtreva",
};
