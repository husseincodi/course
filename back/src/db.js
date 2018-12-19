import sqlite from 'sqlite'
import SQL from 'sql-template-strings';

const test = async () => {

  const db = await sqlite.open('./db.sqlite');

  await db.run(`CREATE TABLE Towels (towel_id INTEGER PRIMARY KEY AUTOINCREMENT, color TEXT NOT NULL, price INTEGER NOT NULL, wet INTEGER);`);

  const stmt = await db.prepare(SQL`INSERT INTO Towels (color, price, wet) VALUES (?, ?, ?)`);
  let i = 0;
  while(i<10){
    await stmt.run(`towel ${i}`,`towel${i}@server.com`);
    i++
  }

  await stmt.finalize();


  const rows = await db.all("SELECT towel_id AS id, color, price,wet FROM Towels")
  rows.forEach( ({ id, color, price, wet }) => console.log(`[id:${id}] - ${color} - ${price} - ${wet}`) )
}

export default { test }
