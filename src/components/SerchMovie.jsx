import { useCallback, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { fetchSearchMovie, image185 } from "../api";
import { debounce } from "lodash";
import Loading from "./Loading";
import Movie from "../assets/movie-time.png";

const SearchMovie = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (searchText) => {
    if (searchText && searchText.length > 3) {
      setIsLoading(true);
      fetchSearchMovie({
        query: searchText,
        page: "1",
      }).then((data) => {
        setIsLoading(false);
        console.log("API - Request");
        setResult(data.results || []); // Ensure data.results is an array or default to an empty array
      });
    } else {
      setResult([]);
      setIsLoading(false);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <div>
      <div className="w-full flex items-center border rounded-full mt-5 p-3">
        <input
          type="text"
          placeholder="Search movie"
          onChange={(e) => handleTextDebounce(e.target.value)}
          className="w-full bg-transparent outline-none"
        />
        <div className="bg-neutral-400 rounded-full">
          <AiOutlineClose className="text-3xl" onClick={() => navigate("/")} />
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : result.length > 0 ? (
        <div className="search-card">
          {result.map((item) => (
            <div key={item.id}>
              <Link to={`/details/${item.id}`}>
                <img src={image185(item.poster_path)} alt={item.title} />
                <h1>
                  {item.title.length > 20
                    ? item.title.slice(0, 14) + "..."
                    : item.title}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <div className="text-center">
            {" "}
            <img src={Movie} alt="" />
            <h1 className="text-3xl">Movie not found</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
