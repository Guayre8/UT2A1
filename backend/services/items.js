const db = require('./db')
const helper = require('../helper')

async function getData() {
  const rows = await db.query(
    'SELECT id, nombre, marca, tipo, precio FROM coleccion',
    []
  )
  const data = helper.emptyOrRows(rows)
  return { 
    data 
}
}

async function insertData(req, res) {
  const { nombre, marca, tipo, precio } = req.query

  const result = await db.query(
    'INSERT INTO coleccion (nombre, marca, tipo, precio) VALUES (?, ?, ?, ?)',
    [nombre, marca, tipo, Number(precio)]
  )

  return result.affectedRows
}

async function deleteData(req, res) {
  const { id } = req.query

  const result = await db.query(
    'DELETE FROM coleccion WHERE id = ?',
    [Number(id)]
  )

  return result.affectedRows
}

module.exports = {
  getData,
  insertData,
  deleteData
}
