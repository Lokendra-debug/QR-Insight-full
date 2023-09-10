const express = require("express");
const Redis = require("ioredis");

const app = express();

require("dotenv").config()
const configuration={
    host:process.env.redisurl,
    port:16711,
    username:"default",
    password: process.env.redispassword


}


const client=new Redis(configuration)
// const client=new Redis()

app.use(express.json());

module.exports={
    client
}