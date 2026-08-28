const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const publicFolder = __dirname;

const server = http.createServer((req, res) => {
    let filePath = path.join(
        publicFolder,
        req.url === "/" ? "index.html" : req.url
    );

    const ext = path.extname(filePath).toLowerCase();

    const contentTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".ico": "image/x-icon"
    };

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 - File Not Found");
            return;
        }

        res.writeHead(200, {
            "Content-Type": contentTypes[ext] || "application/octet-stream"
        });

        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`Portfolio running at http://localhost:${PORT}`);
});