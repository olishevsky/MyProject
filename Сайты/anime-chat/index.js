var app = require('express')();
var http = require('http').Server(app);
let io = require('socket.io')(http);

var usersOnline = 0;
var roomsOnline = 0;
var roomsArray = [];
var usersArray = [];
var heroesArray = [];

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.use(require('express').static(__dirname + '/public'));

http.listen(3002, function(){
	console.log('listening on *:3002');
});
io.on('connection', function(socket){
	
	console.log('connected new client');
	
	socket.on('userOnline', function(){
		socket.emit('userOnline', usersOnline);
	})
	
	socket.on('userConnetion', function(userCookie, nameHero){
		usersArray[usersOnline] = userCookie;
		heroesArray[usersOnline] = nameHero;
		usersOnline++;
		if(usersOnline & 1){
			if(usersOnline == 1){
				roomsArray[0] = "room-0";
				socket.join(roomsArray[0]);
				socket.emit("userRoom", roomsArray[0]);
			}
			else{
				roomsArray[(usersOnline - 1) / 2] = "room-" + (usersOnline - 1) / 2;
				socket.join(roomsArray[(usersOnline - 1) / 2]);
				socket.emit("userRoom", roomsArray[(usersOnline - 1) / 2]);
			}
		}
		else{
			socket.join(roomsArray[(usersOnline - 2) / 2]);
			socket.emit("userRoom", roomsArray[(usersOnline - 2) / 2]);
			io.to(roomsArray[(usersOnline - 2) / 2]).emit("heroStart", roomsArray[(usersOnline - 2) / 2]);
		}
	})
	
	socket.on('message', function(data, nameHero, roomUser) {
		io.to(roomUser).emit('message', nameHero + ": " + data);
	})
	socket.on('hero', function(userCookie, roomUser) {
		var i = 0;
		while(usersArray[i] != userCookie){
			i++;
		}
		if(i & 1){
			socket.emit('hero', heroesArray[i - 1]);
		}
		else{
			socket.emit('hero', heroesArray[i + 1]);
		}
	})
	
	socket.on('userDisconnection', function(userCookie, roomUser){
		var i = 0;
		while(usersArray[i] != userCookie){
			if(usersArray[i] != undefined){
				break;
			}
			i++;
		}
		if(usersOnline & 1){
			if(usersArray[i + 1] != undefined){
				usersArray.splice(i + 1, i + 1);
				heroesArray.splice(i + 1, i + 1);
				usersOnline--;
			}
			usersArray.splice(i, i);
			heroesArray.splice(i, i);
			usersOnline--;
		}
		else{
			usersArray.splice(i, i);
			heroesArray.splice(i, i);
			usersOnline--;
			usersArray.splice(i - 1, i - 1);
			heroesArray.splice(i - 1, i - 1);
			usersOnline--;
		}
		io.to(roomUser).emit('message', "Ваш собеседник убежал. Вы будете возвращены в лоби через 5 секунд.");
		io.to(roomUser).emit('liveRoom');
	})
});

//Веб-сокет