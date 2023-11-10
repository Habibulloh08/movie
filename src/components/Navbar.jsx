import Logo from "../assets/logo.gif";
import { BarsOutlined } from "@ant-design/icons";
const Navbar = () => {
  return (
    <nav className="w-full  mx-auto px-[10px]">
      <div className="flex justify-between  items-center">
        <div className="flex items-center justify-center md:w-42 lg:w-800">
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-4 cursor-pointer list">
            <li>Bosh Sahifa</li>
            <li>Kinolar</li>
            <li>Seriallar</li>
            <li>Janr</li>
            <li>Multik</li>
          </ul>
          <div className="burger">
            <BarsOutlined />
          </div>
        </div>
      </div>{" "}
    </nav>
  );
};

export default Navbar;
