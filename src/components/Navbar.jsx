import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.gif";
import { ControlOutlined } from "@ant-design/icons";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="w-full h-auto mx-auto px-[10px] container ">
      <div className="flex justify-between items-center gap-12">
        <div className="flex items-center justify-center md:w-42 lg:w-800 logo">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="w-[25%] ">
          <ul className="flex gap-4 cursor-pointer list">
            <li>Bosh Sahifa</li>
            <li>Kinolar</li>
            <li>Seriallar</li>
            <li>Janr</li>
            <li>Multik</li>
          </ul>
          <div className="burger">
            <ControlOutlined onClick={menuToggle} />
          </div>
        </div>
      </div>{" "}
      {toggle && (
        <div className="h-[240px] ">
          <hr />
          <div className="bg-black w-full   mt-5 mb-5 flex justify-start tems-center">
            <ul className="flex-row -5 justify-center w-full bg-red-400 ">
              <Link to={'/'}>
                <li className="w-full flex items-center h-[40px] bg-slate-800 pl-5 mb-0.5">
                  <button onClick={() => navigate("/")}>Bosh Sahifa</button>
                </li>
              </Link>

              <li className="w-full flex items-center h-[40px] bg-slate-800 pl-5 mb-0.5">
                {" "}
                <button>Serialar</button>
              </li>
              <li className="w-full flex items-center h-[40px] bg-slate-800 pl-5 mb-0.5">
                {" "}
                <button>Hin kino</button>
              </li>
              <li className="w-full flex items-center h-[40px] bg-slate-800 pl-5 mb-0.5">
                {" "}
                <button>Multfilim</button>
              </li>
            </ul>
          </div>{" "}
          <br />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
