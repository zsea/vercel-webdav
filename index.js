const express = require("express");
const app = express();
const product = require("./product");

app.use(express.json({ extended: false }));

app.use("/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));