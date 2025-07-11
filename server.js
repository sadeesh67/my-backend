const express = require("express");
const mongoose = require("mongoose"); // Only once!
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");

require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Pinged your deployment. Connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);