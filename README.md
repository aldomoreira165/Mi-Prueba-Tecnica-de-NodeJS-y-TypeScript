# Prueba técnica de Java Script

A continuación se detalla un poco acerca del funcionamiento de lo solicitado para la prueba técnica. 

## Backend
Para el desarrollo del backend de la aplicación se utilizó NodeJS con Express. Como base de datos se usó MongoDB Atlas. Además, se hizo uso de las siguientes librerías:

- mongoose: Para realizar la conexión a MongoDB.
- express: Para levantar el servidor.
- cors: Para permitir las peticiones desde diferentes puertos.
- dotenv: Para las variables de entorno. 
- basic-auth: Para la autenticación del API.

A continuación se muestran algunas peticiones realizadas con Postman. 

- Insertar un alumno
    ![insertando backend](https://imgur.com/CrzLeyV.png)
- Consultar un alumno por grado
    ![consultando backend](https://imgur.com/WMy6bZo.png)
## Frontend
Para el frontend se utilizó React y Bootstrap. Y Axios para el consumo del API.
- Insertando alumno
    ![insertando frontend](https://imgur.com/93uYTXS.png)
- Consultando alumnos
    ![consultando frontend](https://imgur.com/EOklcfV.png)