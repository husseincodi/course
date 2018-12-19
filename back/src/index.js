import app from './app'
import db from './db'
app.get( '/', (req, res) => res.send("ok") );

app.listen( 8040, () => console.log('server listening on port 8080') )

db.test()
  