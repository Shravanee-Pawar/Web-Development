const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("visit", (url) => {
    console.log("Someone visited: " + url);
});

fs.writeFileSync("info.txt", "This data was read using a callback!");

const server = http.createServer((req, res) => {
    event.emit("visit", req.url);

    fs.readFile("info.txt", "utf8", (err, data) => {
        if (err) {
            res.end("Error reading file");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>" + data + "</h1>");
    });

    console.log("Request received, file is being read...");
});

server.listen(3000, () =>
    console.log("Server running at http://localhost:3000")
);