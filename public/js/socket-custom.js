var socket= io();
socket.on('connect',function(){
    console.log("conectado al servidor");
})
//on es para escuchar informcion
socket.on('disconnect',function(){
    console.log("desconectado del servidor");
})
//emit para enviar informacion, estrurtura=> emit("nombrefuncion",paramtro) el parametro puede ser cualquoer cosa
socket.emit("enviarMensaje",{
    usuario: "fernando",
    mensaje: "hola mundo desde socket"
},function(resp){
    console.log(resp)
});
socket.on("enviarMensaje",function(mensaje){
    console.log(mensaje);
})