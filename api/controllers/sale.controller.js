const { registerNewSale, allSaleService } = require('../services/sale.service');

async function requestToRegisterNewSale(req, res) {
  const saleToRegister = req.body;
  const createdSale = await registerNewSale(saleToRegister);
  return res.status(201).json(createdSale);
}

async function allSaleController(req, res) {
  const { id } = req.params;
  const getAllSale = await allSaleService(id);
  res.status(200).json(getAllSale);
}

module.exports = {
  requestToRegisterNewSale,
  allSaleController,
};
