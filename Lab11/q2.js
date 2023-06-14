/**
 * 
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000; // specify port number

// create a server instance
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'amrit.jpg'); // path to image file
  const stat = fs.statSync(filePath); // get the file statistics

  // set the response headers
  res.setHeader('Content-Type', 'image/jpeg');
  res.setHeader('Content-Length', stat.size);

  // create a readable stream to the file and pipe it to the response
  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
});

// start the server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});