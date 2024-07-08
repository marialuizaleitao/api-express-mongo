import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
 res.writeHead(200, { "Content-Type": "text/plain" });
 res.end("Node.js application");
});

server.listen(PORT, () => {
 console.log("Listening on port " + PORT);
});
