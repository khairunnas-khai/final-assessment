// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Buat variabel yang menampung data orders
let orders = [];

// Fungsi untuk menambahkan order baru
function addOrder(customerName, items) {
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice: items.reduce((total, item) => total + item.price, 0),
    status: 'Menunggu',
  };
  orders.push(newOrder);
}

// Fungsi untuk memperbarui status order
function updateOrderStatus(orderId, status) {
  const orderIndex = orders.findIndex((order) => order.id === orderId);
  if (orderIndex !== -1) {
    orders[orderIndex].status = status;
  }
}

// Fungsi untuk menghitung total pendapatan dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.reduce((total, order) => {
    if (order.status === 'Selesai') {
      return total + order.totalPrice;
    }
    return total;
  }, 0);
}

// Fungsi untuk menghapus order
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};