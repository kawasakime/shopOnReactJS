export const loadData = () => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const saveData = (orders) => {
  localStorage.setItem("cart", JSON.stringify(orders));
};
