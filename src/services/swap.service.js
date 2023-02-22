const Web3 = require('web3')
const { OpenSeaSDK, Network, OpenSeaAPI } = require('opensea-js')
const provider = new Web3.providers.HttpProvider("https://rpc.ankr.com/eth_goerli");
const web3 = new Web3(provider);
const seaport = new OpenSeaSDK(web3.currentProvider, {
  networkName: Network.Goerli
});
const openSea = new OpenSeaAPI(web3.currentProvider);

// Current Error : API Error 500: Internal server error. OpenSea has been alerted, but if the problem persists please contact us via Discord: https://discord.gg/opensea
  const listOrders = async (data) => {
    const orders = await seaport.api.getOrders({
      protocol: 'seaport',
      orderDirection: 'asc',
      orderBy: 'created_date',
      side: data.side, 
      paymentTokenAddress: data
    });
    return orders
  };

  // Current Error : API Error 403: Unauthorized. Full message was '{"success":false,"errors":["Missing an API Key, which is required for this request."]}'
  const createSwap = async (data) => {
    const result = await openSea.postOrder(
      {
        parameters: {
          offerer: data.parameters.offerer,
          offer: data.parameters.offer,
          consideration: data.parameters.consideration,
          startTime: data.parameters.startTime,
          endTime: data.parameters.endTime,
          orderType: data.parameters.orderType,
          zone: data.parameters.zone,
          zoneHash: data.parameters.zoneHash,
          salt: data.parameters.salt,
          conduitKey: data.parameters.conduitKey,
          totalOriginalConsiderationItems: data.parameters.totalOriginalConsiderationItems,
          counter: data.parameters.counter
      },
      signature: data.signature},
      {
        side: data.side,
        protocol: data.protocol
      })
    return result
  };

  // Current Error : API Error 403: Unauthorized. Full message was '{"success":false,"errors":["Missing an API Key, which is required for this request."]}'
  const signateOrder = async(data) => {
    const result = await seaport.fulfillOrder({
      order: data.order,
      accountAddress: data.myAddress,
    });
    return result
  }

  module.exports = {
    createSwap,
    signateOrder,
    listOrders
  };