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
  //use the `fs.statSync()` method to retrieve the size of the image file,
  // which we will later use to set the `Content-Length` header of the response.
  const stat = fs.statSync(filePath); // get the file statistics

  // setting the response headers, and specify the `Content-Type` header as `image/jpeg` 
  //to indicate that  returning a JPEG image, and set the `Content-Length` header to the size of the image 
  //file we retrieved earlier.
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