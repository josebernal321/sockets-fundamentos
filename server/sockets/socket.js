const {io}=require('../server')


io.on('connection',(Client)=>{
    console.log('Usuario conectado');

    Client.emit('EnviarMensaje',{
        usuario:'administrados',
        comentario:'Bienvenido a esta pagina'
    })

    Client.on('disconnect',()=>{
        console.log('usuario desconectado');
    })

    Client.on('EnviarMensaje',(data,callback)=>{


        Client.broadcast.emit('EnviarMensaje',data)
        // if(mensaje.Usuario){
        //     callback({
        //         estado:'correcto'
        //     });
        // }else{
        //     callback({
        //         estado:'incorrecto'
        //     });
        // }
    })
})