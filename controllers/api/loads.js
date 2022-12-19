const Load = require('../../models/load');

module.exports = {
    create,
    show,
    index
}


 async function create (req, res)  {
  try {
    const load = new Load(req.body);
    await load.save();
    res.json(load);
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
}
async function index (req, res) {
    const load = await Load.find({}).sort('name').populate().exec()
    

    res.json(load);
  }

async function show(req,res) {
    const loads = await Load.findById(req.body);
    res.json(loads)
}