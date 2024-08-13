/* ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═ 
═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═
═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═ 
═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═ 
═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═ 
═  ═  ═  ═  ═  ═  ═  ═  ═  ═  ═
═  ═  ═  ═  ═  ═  ═  ═ 
═  ═  ═  ═  ═
═  ═ 
═ 

SCRIPT V1.5 DEL SISTEMA ESPECIALIZADO DE SOLICITUDES DEL DEPARTAMENTO DE EDUCACIÓN FÍSICA SISDEF 
Hecho por: Jorge Sierra
Fecha: 10/08/2024
*/

CREATE DATABASE sisdef;
USE sisdef; 

CREATE TABLE registro_Usuarios (
user_id INT (10) NOT NULL, 
username VARCHAR (25) NOT NULL, 
ph_number INT (10) NOT NULL, 
e_mail VARCHAR (25) NOT NULL  
);

CREATE TABLE registro_Solicitudes (
user_id INT (10) NOT NULL,  
st_name VARCHAR (25) NOT NULL, 
st_grade VARCHAR (25) NOT NULL, 
item VARCHAR (25) NOT NULL, 
size1 VARCHAR (25) NOT NULL   
);

Insert into registro_Usuarios (user_id, username, ph_number, e_mail) values 
('1018455016', 'Antonio Pérez', '3114432810', 'a@e_mail.com'),
('2018455016', 'Carlos González', '3124432810', 'c@e_mail.com'),
('3018455016', 'Juan Jiménez', '3134432810', 'j@e_mail.com'),
('4018455016', 'Ricardo Reyes', '3144432810', 'r@e_mail.com'),
('5018455016', 'Pedro Martínez ', '3154432810', 'p@e_mail.com');

show DATABASES;
show tables from sisdef;