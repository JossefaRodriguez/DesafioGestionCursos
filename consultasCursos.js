const res = require('express/lib/response')
const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '120313',
    database: 'cursos_db',
    port: 5430
})

async function nuevoCurso(curso) {
    try {
        const result = await pool.query(`INSERT INTO cursos (nombre, nivel, fecha, duracionDias) VALUES ('${curso.nombre}', ${curso.nivelTecnico}, '${curso.fechaInicio}', ${curso.duracion}) RETURNING *`)
        return result.rows

    } catch (error) {
        return error
    }
}

async function obtenerCursos() {
    try {
        const result = await pool.query("SELECT id, nombre, nivel, to_char(fecha,'YYYY-MM-DD') AS fecha, duraciondias FROM cursos")
        return result.rows
    } catch (error) {
        return error
    }
}

async function editarCurso(id, curso) {
    try {
        const result = await pool.query(`UPDATE cursos SET nombre = '${curso.nombre}', nivel = ${curso.nivelTecnico}, fecha = '${curso.fechaInicio}', duraciondias = ${curso.duracion} WHERE id = ${id} RETURNING *`)
        return result.rows

    } catch (error) {
        return error
    }
}

async function eliminarCurso (id) {
    try {
        const result = await pool.query(`DELETE FROM cursos WHERE id = ${id} RETURNING *`)
        return result.rowCount
        
    } catch (error) {
        return error
    }
}


module.exports = { nuevoCurso, obtenerCursos, editarCurso, eliminarCurso }