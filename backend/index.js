require("dotenv").config();

const { app } = require("./app");
const { connectDB } = require("./config/db");

const PORT = process.env.PORT || 3002;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server", error.message);
    process.exit(1);
  });
