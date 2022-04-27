import dotenv from "dotenv";
import server from "./server";
dotenv.config();

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Listening in port ${PORT}`));
