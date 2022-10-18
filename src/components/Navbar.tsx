import { Link } from "react-router-dom";
import { useOrderContext } from "../context/OrderContext";
import { NotificationIcon } from "./NotificationIcon";
export const Navbar: React.FC = () => {
  const iconStyles: string = "rounded-[50%] border-[1px] p-2 border-black";

  const { getQuantityOfAllItems } = useOrderContext();

  return (
    <nav className="flex flex-row justify-between px-24 shadow-xl py-6 mb-6">
      <div>Logo</div>
      <ul className="flex gap-8 flex-row items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        <NotificationIcon
          IconElement={
            <i className={`fa-solid fa-cart-shopping ${iconStyles}`}></i>
          }
          numberOfNotifications={getQuantityOfAllItems()}
        />
      </ul>
    </nav>
  );
};
