const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const productsRoutes = require("./routes/products.routes");
const deconsignationRoutes = require("./routes/deconsignation.routes");

app.use("/api/products", productsRoutes);
app.use("/api/deconsignations", deconsignationRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
