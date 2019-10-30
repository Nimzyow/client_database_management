const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Lets hope this application for dad will be great" })
);

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/clients", require("./routes/clients"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
