const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./Routes/Router");

const server = express();

server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: true }));
server.use(morgan("dev"));
server.use(cors());
server.use("/", routes);

////////////////////////////////TEST


const jwt = require("jsonwebtoken");
const {SIGNATURE} = process.env
server.get("/decode", (req, res)=>{
    try {
        const {token} = req.body
        jwt.verify(token, SIGNATURE, (err, decoded) => {
            if (err) {
                return res.status(400).json(err)
            } else {
                return res.status(200).json(decoded)
            }
          });
    } catch (error) {
        return res.status(444).json({error:error.message})
    }
})
////////////////////////////////TEST

module.exports = server;
