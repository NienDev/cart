import { useOrderContext } from "../context/OrderContext";

interface NotificationIconProps {
  numberOfNotifications: number;
  IconElement: JSX.Element;
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({
  IconElement,
  numberOfNotifications,
}) => {
  const icon: string =
    "fa-solid fa-cart-shopping rounded-[50%] border-[1px] p-2 border-black";

  const { toggleSideCart } = useOrderContext();

  return (
    <button
      onClick={() => {
        toggleSideCart();
      }}
      className="cursor-pointer relative"
    >
      {IconElement}
      <div className="absolute text-white bg-red-500 px-2 right-[-10px] top-[-10px] rounded-[50%]">
        {numberOfNotifications}
      </div>
    </button>
  );
};
