import { useOrderContext } from "../context/OrderContext";
import data from "../data/data.json";

type CartItem = {
  id: number;
  quantity: number;
};

export const SideCart = () => {
  const {
    sideCartState,
    cartItems,
    toggleSideCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useOrderContext();

  const itemsOrder = cartItems.filter((item) => item.quantity > 0);

  const getTotal = (itemsOrder: CartItem[]) => {
    let sum = 0;
    itemsOrder.forEach((item) => {
      sum += item.quantity * data[item.id - 1].price;
    });
    return sum;
  };

  return (
    <>
      {sideCartState && (
        <div>
          <div className="fixed right-0 bg-white lg:w-[500px] md:w-[400px] sm:w-[300px] h-screen top-0 z-20">
            <button
              onClick={() => {
                toggleSideCart();
              }}
            >
              <i className="fa-solid fa-x w-full text-right p-4"></i>
            </button>
            <div className="">
              {itemsOrder.map((item) => (
                <div className="flex flex-row gap-4 mb-2 relative">
                  <img
                    className="h-20 w-40 object-contain flex object-"
                    src={data[item.id - 1].url}
                    alt=""
                  />
                  <div className="flex flex-col gap-1 items-start ">
                    <h2 className="font-semibold">{data[item.id - 1].name}</h2>
                    <p>${data[item.id - 1].price * item.quantity}</p>
                    <div className="w-full text-center flex gap-4">
                      <button
                        onClick={() => {
                          decreaseCartQuantity(item.id);
                        }}
                        className="border-[1px] rounded-[50%] border-black px-1"
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => {
                          increaseCartQuantity(item.id);
                        }}
                        className="border-[1px] rounded-[50%] border-black px-1"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                      }}
                    >
                      <i className="fa-solid fa-x absolute top-0 right-[20px] text-xs"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <hr className="" />
            <h2 className="ml-4">
              TOTAL:{" "}
              <span className="font-bold text-xl">${getTotal(itemsOrder)}</span>
            </h2>
          </div>
          <div className=" w-screen h-screen bg-black opacity-70 fixed"></div>
        </div>
      )}
    </>
  );
};
