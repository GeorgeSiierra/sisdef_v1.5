/*
═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═ 
═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═
═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═ 
═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═ 
═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═ 
═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═
═  ═  ═  ═  ═  ═  ═  ═ 
═  ═  ═  ═  ═
═  ═ 
═ 

SERVICIO NACIONAL DEL SENA - SENA
Tecnología en Analisis y Desarrollo de Software
Javascript V1.5 DEL SISTEMA ESPECIALIZADO DE SOLICITUDES DEL DEPARTAMENTO DE EDUCACIÓN FÍSICA SISDEF 
Hecho por: Jorge Sierra
Fecha: 10/08/2024
*/

//Se crea la conexion con el servidor en el puerto 3000 a travéz de express
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname)));

// Obtener el cliente con mysql2
const mysql = require('mysql2/promise');

// Crear la conexion con la base de datos sisdef de MySQL
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'sisdef',
});

app.get('/registrar_solicitudes', async (req, res) => {

  res.sendFile(path.join(__dirname, 'registrarSolicitud.html'))

  // El console log le envia a la consola o cmd un mensaje cuando se conecte el cliente con el servidor
  console.log('El servidor esta listo para registrar solicitudes')
  
  //Se muestra en la consola los datos enviados desde el cliente
  console.log(req.query)

  //Se guarda la información en la tabla registro_Usuarios de la tabla sisdef en la base de datos de MySQL 
  //const [results, fields] = await connection.query(
    //"INSERT INTO `registro_solicitudes` (`user_id`, `st_name`, `st_grade`, `item`, `size1`) VALUES (?, ?, ?, ?,?);",
    //[req.query.user_id, req.query.st_name, req.query.st_grade, req.query.item, req.query.size1]
  //);

  //Redireccionar a otra página web mostrando un mensaje correcto
  //res.sendFile(path.join(__dirname, 'registrarSolicitudCorrecto.html'))
     
})


//Probar el Puerto y que salga en consola un mensaje caribeño si está activo correctamente
app.listen(port, () => {
  console.log(`Si, si Probando. Correcto en Puerto ${port}. Si, Si Caribe!!`)
})