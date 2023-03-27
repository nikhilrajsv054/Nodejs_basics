const http = require("http");
const port = 8000;
const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  // res.end('great to see');
  // res.end('<h1>Gotcha!</h1>');

  // To read the html page and return it as response

  //

  let filepath;

  switch (req.url) {
    case "/":
      filepath = "./index.html";
      break;
    case "/profile":
      filepath = "./profile.html";
      break;
    default:
        filepath = './404.html';
  }
  fs.readFile(filepath,(error,data) =>{
    if(error){
        console.log('error',err);
        return res.end('<h1>Error!</h1>')
    }
    return res.end(data);
  })
};

// create server
const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server is up and running on port number:", port);
});
