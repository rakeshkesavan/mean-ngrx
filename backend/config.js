module.exports = {
  ENV: process.env.NODE_ENV || "development",
  PORT: process.env.port || 3000,
  URL: process.env.BASE_URL || "http://localhost:3000",
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb://rakesh:rakesh123@ds159812.mlab.com:59812/posts_api",
  JWT_SECTRET: process.env.JWT_SECRET || "jwtsecret"
};
