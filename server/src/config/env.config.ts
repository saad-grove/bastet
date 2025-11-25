import "dotenv/config";

export const envConfig = {
  dbUrl: process.env.MONGO_URL!,
};
