const OrderDict = (array) => {
  let dict = {};

  array.map((item) => {
    dict[item.id] = {
      ...item,
      count: dict[item.id] ? dict[item.id].count + 1 : 1,
    };
    return null
  });
  const ordersArr = [];

  for (let key in dict) {
    ordersArr.push(dict[key]);
  }
  return ordersArr;
};

export default OrderDict;
