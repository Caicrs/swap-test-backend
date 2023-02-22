const swapService = require('../services/swap.service');

const createSwap = (req, res) => {
  const newSwap = swapService.createSwap(req.body);
  res.status(newSwap).send(newSwap);
};

const assignSwap = (req,res) => {
  const signSwap = swapService.signateOrder(req.body);
  res.status(signSwap).send(signSwap);
}

const allOrders = (req,res) => {
  const list = swapService.listOrders(req.query.paymentTokenAddress);
  res.status(list).send(list);
}

module.exports = {
     createSwap,
     assignSwap,
     allOrders
};