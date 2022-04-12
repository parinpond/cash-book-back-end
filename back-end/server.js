require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.NODE_DOCKER_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});