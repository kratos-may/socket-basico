let {io} = require("../server");
io.on("connection", (client)=>{
    console.log("usuario conectado");

    client.emit("enviarMensaje",{
        usuario: " admin",
        mensaje: "Bienbenido a esta app"
    });

    client.on("disconnect", ()=>{
        console.log("usuario desconectado");
    })
    //escuchar al cliente
    client.on("enviarMensaje",(data,callback)=>{
        console.log(data);
        client.broadcast.emit("enviarMensaje",data);
        /*if(mensaje.usuario){
            callback({
                resp:"Todo salio bien"
            });
        }else{
            callback({
                resp:"algo salio mal"
            });
        }*/
    })
})