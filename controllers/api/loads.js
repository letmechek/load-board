const Load = require('../../models/load');

module.exports = {
    create
}


 async function create (req, res)  {
  try {
    const load = new Load(req.body);
    await load.save();
    res.send(load);
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
}