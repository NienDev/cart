import { useOrderContext } from "../context/OrderContext";

interface cardProps {
  name: string;
  url: string;
  price: number;
  id: number;
}

export const Card = ({ name, url, price, id }: cardProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
  } = useOrderContext();
  const quantity = getItemQuantity(id);

  return (
    <button
      onClick={() => {
        increaseCartQuantity(id);
      }}
      className="shadow-md shadow-neutral-700/40 rounded-xl truncate w-60 h-40"
    >
      <div className="w-full h-[80%] truncate">
        <img
          className="w-full h-full object-cover object-center"
          src={url}
          alt={name}
        />
      </div>
      <div className="flex flex-row justify-between px-4 py-1">
        <h2 className="">{name}</h2>
        <p className="font-bold">${price}</p>
      </div>
    </button>
  );
};
