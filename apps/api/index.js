const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const offerup = require("./mocks/offerup");

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/api/offerup", (req, res) => {
  res.json({ offerup });
});

app.get("/api/offerup/:id", (req, res) => {
  const id = req.params.id;
  const vehicle = offerup.vehicles.find((v) => v.id === +id);
  res.json({ vehicle });
});

app.listen(PORT, () => {
  console.log(`API RUNNING: http://localhost:${PORT}`);
});
