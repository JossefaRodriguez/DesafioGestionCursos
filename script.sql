-- Crear Base de Datos
CREATE DATABASE cursos_db;
-- Crear Tabla cursos
CREATE TABLE cursos(id SERIAL PRIMARY KEY, nombre VARCHAR(50), nivel SMALLINT, fecha DATE, duracionDias SMALLINT);