import sqlite from 'sqlite'
import SQL from 'sql-template-strings';

const initializeDatabase = async () => {

  const db = await sqlite.open('./db.sqlite');
  
  const getTowelsList = async () => {

    const rows = await db.all("SELECT towel_id AS id, color, price, wet FROM Towels")
      return rows
  
  }
  
  const controller = {
    getTowelsList
  }

  return controller
}

const createTowel = async (props) => {
  const { color, price, wet } = props
  const result = await db.run(SQL`INSERT INTO Towels (color, price, wet) VALUES (${color}, ${price}, ${wet})`);
  const id = result.stmt.lastID
  return id
}

const deleteTowel = async (id) => {
  const result = await db.run(SQL`DELETE FROM Towels WHERE towel_id = ${id}`);
  if(result.stmt.changes === 0){
    return false
  }
  return true
}

const updateTowel = async (id, props) => {
  const { color, price, wet } = props
  const result = await db.run(SQL`UPDATE Towels SET price=${price} WHERE contact_id = ${id}`);
  if(result.stmt.changes === 0){
    return false
  }
  return true
}

const getTowel = async (id) => {
  const TowelsList = await db.all(SQL`SELECT Towel_id AS id, color, price, wet FROM Towels WHERE towel_id = ${id}`);
  const towel = towelsList[0]
  return towel
}

/**
 * retrieves the contacts from the database
 * @param {string} orderBy an optional string that is either "name" or "email"
 * @returns {array} the list of contacts
 */
const getTowelsList = async (orderBy) => {
  let statement = `SELECT towel_id AS id, color, price, wet FROM Towels`
  switch(orderBy){
    case 'color': statement+= ` ORDER BY color`; break;
    case 'price': statement+= ` ORDER BY price`; break;
    case 'wet': statement+= ` ORDER BY wet`; break;

    default: break;
  }
  const rows = await db.all(statement)
  return rows
}

const controller = {
  createTowel,
  deleteTowel,
  updateTowel,
  getTowel,
  getTowelsList
}

return controller


export default initializeDatabase


