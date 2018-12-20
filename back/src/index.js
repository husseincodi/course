import app from './app'
import initializeDatabase from './db'

/* const start = async () => {
  const controller = await initializeDatabase()
  app.get('/', (req, res) => res.send("ok"));

  app.get('/Towels/list', async (req, res) => {
    const Towels_list = await controller.getTowelsList()
    res.json(Towels_list)
  })
  
  app.listen(8080, () => console.log('server listening on port 8080'))
}
start(); */
const start = async () => {
  const controller = await initializeDatabase()
  /** 
  ... previous code commmented out
   **/
  const id = await controller.createTowel({color:"Black",price:"35", wet:"1"})
  const Towel = await controller.getTowel(id)
  console.log("------\nmy newly created towel\n",towel)
 // await controller.updateContact(id, {name:"Brad Pitt"})
  await controller.updateTowel(id, {price:"35"})
  const updated_Towel = await controller.getTowel(id)
  console.log("------\nmy updated towel\n",updated_Towel)
  console.log("------\nlist of towels before\n",await controller.getTowelsList())
  await controller.deleteTowel(id)
  console.log("------\nlist of towels after deleting\n",await controller.getTowelsList())
  
}

  