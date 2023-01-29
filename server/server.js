const { Router, application } = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

require('dotenv').config();

const router = Router();
const apiKey = process.env.HELIUS_API_KEY;
const PORT = process.env.PORT || 3000;

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));

router.post('/api/parse-transactions', async (req, res) => {
  console.log(req.body);
  try {
    const address = req.body.address;
    const url = `https://api.helius.xyz/v0/addresses/${address}/transactions?api-key=${apiKey}`;
    const { data } = await axios.get(url);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
});

application.use(router);

application.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
