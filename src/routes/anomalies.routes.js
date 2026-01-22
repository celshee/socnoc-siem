const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.json({ message: "Anomalies endpoint" });
});

module.exports = router;
