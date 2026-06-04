
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, increaseQuantity, decreaseQuantity }) => {
    const navigate = useNavigate();
  return (
    <div className="p-6">
        <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Back to Products
      </button>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 border-b py-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-contain"
          />

          <div>
  <h2>{item.title}</h2>
  <p>${item.price}</p>

  <div className="flex items-center gap-3 mt-2">
    <button
      onClick={() => decreaseQuantity(item.id)}
      className="px-3 py-1 bg-red-500 text-white rounded"
    >
      -
    </button>

    <span>{item.quantity}</span>

    <button
      onClick={() => increaseQuantity(item.id)}
      className="px-3 py-1 bg-green-500 text-white rounded"
    >
      +
    </button>
  </div>
</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;