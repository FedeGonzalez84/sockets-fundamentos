var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor Web');
});

//emit: enviar informacion
//on: escuchar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respueta del server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log("Servidor: ", mensaje);
});