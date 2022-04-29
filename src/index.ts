import dotenv from "dotenv";
import server from "./server";

dotenv.config();

const { sequelize } = require("./db");
const PORT = process.env.PORT;

sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
