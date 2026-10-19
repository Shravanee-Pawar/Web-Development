const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url == "/") {
        res.write("<h1>Welcome to Home Page</h1>");
    } else if (req.url == "/about") {
        res.write("<h1>About Page</h1>");
    } else {
        res.write("<h1>404 Page Not Found</h1>");
    }

    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});