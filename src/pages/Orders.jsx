import { useOrder } from "../context/OrderContext";
import { getOrderAge } from "../utils/timeAgo";

const Orders = () => {
  const { orders, deleteOrder } = useOrder();



  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">My Orders</h2>

      <ul className="space-y-5">
        {orders.map(order => {
          const { days, hours, minutes } = order.createdAt
            ? getOrderAge(order.createdAt)
            : { days: 0, hours: 0, minutes: 0 };

          return (
            <li
              key={order.id}
              className="flex justify-between items-center bg-white border rounded-xl p-5 shadow-md hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-lg font-semibold">{order.title}</h3>

                <p className="text-gray-600 text-sm">
                  ₹{order.price}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  ⏱ Created {days} day(s) {hours} hour(s) {minutes} minute(s) ago
                </p>
              </div>

              <button
                onClick={() => deleteOrder(order.orderId)}
                className="px-3 py-1 text-sm text-red-600 border border-red-300 rounded-md hover:bg-red-50 transition"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Orders;
