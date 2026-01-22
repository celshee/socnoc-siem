const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.json({ message: "Logs drill-down endpoint" });
});

module.exports = router;
