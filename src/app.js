const express = require("express");
const cors = require("cors");

const overviewRoutes = require("./routes/overview.routes");
const anomaliesRoutes = require("./routes/anomalies.routes");
const logsRoutes = require("./routes/logs.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/overview", overviewRoutes);
app.use("/api/anomalies", anomaliesRoutes);
app.use("/api/logs", logsRoutes);

app.get("/health", (req, res) => {
    res.json({ status: "OK" });
});

module.exports = app;
