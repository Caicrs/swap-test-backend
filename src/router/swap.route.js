const route = require('express').Router();
const controllerSwaps = require('../controllers/swap.controller');

route.get('/all-orders', controllerSwaps.allOrders);

route.post('/create-swap', controllerSwaps.createSwap);

route.post('/assign-swap', controllerSwaps.assignSwap);

module.exports = route;