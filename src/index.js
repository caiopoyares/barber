const server = require("./server");

server.listen(process.env.PORT || 8888, () =>
  console.log("listening on port 8888")
);
