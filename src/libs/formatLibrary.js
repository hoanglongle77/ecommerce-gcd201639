export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-4);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export const formatPrice = (price) => {
  const numPrice = Number(price);

  if (isNaN(numPrice)) {
    return "Invalid Price";
  }

  const formattedPrice = numPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedPrice;
};

export const calculateSubtotal = (products) => {
  return products.reduce((subtotal, item) => {
    return subtotal + item.product.price * item.quantity;
  }, 0);
};

export const formatDateString = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

export const formatTime = (dateString) => {
  const date = new Date(dateString);
  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  return date.toLocaleTimeString("en-US", options);
};
