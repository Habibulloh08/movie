import { SearchOutlined, StarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Navbarbottom = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div className="searchbar ">
        <form
          className="flex items-center justify-between w-[100%] "
          onClick={() => navigate("/search-movie")}
        >
          <input
            type="text"
            placeholder="Filim izlash"
            className="search-input"
          />
          <button className="searchbar-btn" type="submit" title="Izlash">
            <SearchOutlined />
          </button>{" "}
        </form>
      </div>
      <div className="search1"></div>
      <div className="flex gap-4 social">
        <p>Telegram</p>
        <p>Instagram</p>
        <p>Git hub</p>
      </div>
    </div>
  );
};

export default Navbarbottom;
