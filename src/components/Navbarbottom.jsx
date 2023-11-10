import { SearchOutlined, StarOutlined } from "@ant-design/icons";

const Navbarbottom = () => {
  return (
    <div className="flex justify-between">
      <div className="searchbar ">
        <form className="flex items-center justify-between w-[100%] ">
          <input
            type="text"
            placeholder="Filim izlash"
            className="search-input "
          />
          <button className="searchbar-btn" type="submit" title="Izlash">
            <SearchOutlined />
          </button>{" "}
        </form>
      </div>
      <div className="search1"></div>
      <div className="flex gap-4 social">
        <p>insta</p>
        <p>insta</p>
        <p>insta</p>
        <p>insta</p>
      </div>
    </div>
  );
};

export default Navbarbottom;
