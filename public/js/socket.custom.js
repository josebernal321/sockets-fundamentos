
var socket=io();

socket.on('connect',function(){
    console.log('conectado al sevidor');
})

socket.on('disconnect',function(){
    console.log('perdimos la conexion');
})

socket.emit('EnviarMensaje',{
    Usuario:'Jose Bernal',
    Comentario:'Buenas Noches'
},function(res){
    console.log('servidor:',res)
})

socket.on('EnviarMensaje',function(res){
    console.log(res);
})
