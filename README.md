# Desafio Gestion Cursos

Crear Base de Datos
`CREATE DATABASE cursos_db;`
Crear Tabla
`CREATE TABLE cursos(id SERIAL PRIMARY KEY, nombre VARCHAR(50), nivel SMALLINT, fecha DATE, duracionDias SMALLINT);`

Levantar servidor en http://localhost:8080

## REQUERIMIENTOS

1. Crear una ruta POST /curso que reciba un payload desde el cliente con los datos de un nuevo curso y los ingrese a la tabla cursos.
2. Crear una ruta GET /cursos que consulte y devuelva los registros almacenados en la tabla cursos.
3. Crear una ruta PUT /curso que reciba un payload desde el cliente con los datos de un curso ya existente y actualice su registro en la tabla cursos.
4. Crear una ruta DELETE /cursos que reciba el id de un curso como parámetro de la ruta y elimine el registro relacionado en la tabla cursos.
