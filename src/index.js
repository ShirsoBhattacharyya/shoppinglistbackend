const express = require("express");
const dbConnect = require("./components/config/db");
const listRouter=require('./components/features/routes/list.routes')
const cors = require("cors");
const server = express();
const PORT=process.env.PORT||8080;

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.get("/", (req, res) => {
  res.send("Welcome to Shopping List API");
});
server.use('/lists',listRouter);

server.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server started at port ${PORT}`);
});
