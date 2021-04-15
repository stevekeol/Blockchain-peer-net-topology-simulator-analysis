// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");

// const port = process.env.PORT || 3001;
// // const index = require("./routes/index");

// const app = express();
// // app.use(index);

// const server = http.createServer(app);

// const io = socketIo(server);

// let interval;

// io.on("connection", (socket) => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => getApiAndEmit(socket), 1000);
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });
// });

// const getApiAndEmit = socket => {
//   const response = new Date();
//   // Emitting a new message. Will be consumed by the client
//   socket.emit("FromAPI", response);
// };

// server.listen(port, () => console.log(`Listening on port ${port}`));


//--------------------------------

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Welcome Realtime Server</h1>');
});

//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 0;

io.on('connection', function(socket){
  console.log('a user connected');
  
  //监听新用户加入
  socket.on('login', function(obj){
    //将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
    socket.name = obj.userid;
    
    //检查在线列表，如果不在里面就加入
    if(!onlineUsers.hasOwnProperty(obj.userid)) {
      onlineUsers[obj.userid] = obj.username;
      //在线人数+1
      onlineCount++;
    }
    
    //向所有客户端广播用户加入
    io.emit('login', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
    console.log(obj.username+'加入了聊天室');
  });
  
  //监听用户退出
  socket.on('disconnect', function(){
    //将退出的用户从在线列表中删除
    if(onlineUsers.hasOwnProperty(socket.name)) {
      //退出用户的信息
      var obj = {userid:socket.name, username:onlineUsers[socket.name]};
      
      //删除
      delete onlineUsers[socket.name];
      //在线人数-1
      onlineCount--;
      
      //向所有客户端广播用户退出
      io.emit('logout', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
      console.log(obj.username+'退出了聊天室');
    }
  });
  
  //监听用户发布聊天内容
  socket.on('message', function(obj){
    //向所有客户端广播发布的消息
    io.emit('message', obj);
    console.log(obj.username+'说：'+obj.content);
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});