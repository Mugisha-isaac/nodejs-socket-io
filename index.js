const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);
// console.log(io);
io.on('connection',(socket)=>{
    console.log('client connection received');
    socket.emit('sendToClient', {hello:'world'});

socket.on('receivedFromClient', (data)=>{
    console.log(data);
})

})
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

// io.on('connection',(socket)=>{
//     console.log('client connection received');
// })

http.listen(3000,()=>{
    console.log('server is running');
})