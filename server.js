const express = require('express');
const app = express();
app("/",(req, res) => {
	res.send("the server is running");
});
app.listen(3000, () => {
	console.log("server running at http://localhost:5000");
});
