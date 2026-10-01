const express = require("express");
const cors = require("cors");

const noticeRoutes = require("./routes/noticeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Notice Routes
app.use("/api/notices", noticeRoutes);

app.get("/", (req, res) => {
res.send("College ERP Backend Running");
});

app.listen(5000, () => {
console.log("Server Running on Port 5000");
});
