import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMovieCredits,
  fetchMovieDetail,
  fetchMovieSimilar,
  image342,
} from "../api";
import Loading from "../components/Loading";
import Cast from "../components/Cast";
import Smilar from "../components/Smilar";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovieCredits();
    getMovieDetail();
    getSimilar();
  }, [id]);

  const getMovieDetail = async () => {
    const data = await fetchMovieDetail(id);
    setMovie(data);
  };

  const getMovieCredits = async () => {
    const data = await fetchMovieCredits(id);
    setCast(data.cast);
    setIsLoading(false);
  };

  const getSimilar = async () => {
    const data = await fetchMovieSimilar(id);
    setSimilar(data.results);
  };

  const onChange = (time, timelineItems) => {
    console.log(time, timelineItems);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="w-full flex-col  relative mt-8">
      <div className="w-[100%] border-2 border-black p-5">
        <div className="flex gap-5 items-center">
          <div className="box"></div>
          <h1 className="text-[26px] font-bold uppercase">{movie.title}</h1>
        </div>
        <br />
        <div className="flex justify-start gap-[130px] items-start deteils">
          <img src={image342(movie?.poster_path)} alt={movie?.title} />
          <div>
            <table className="table">
              <tbody>
                <tr className="flex items-center">
                  <td className="table-td">Genres:</td>
                  <td className="table-td_item">
                    {movie?.genres &&
                      movie?.genres.map((genre, index) => (
                        <p key={index}>{genre.name}</p>
                      ))}
                  </td>
                </tr>
                <tr className="flex items-center">
                  <td className="table-td">{movie?.status}</td>
                  <td className="table-td_item">
                    {movie?.release_date?.split("-")[0]} {""} year
                  </td>
                </tr>
                <tr className="flex items-center">
                  <td className="table-td">Time:</td>
                  <td className="table-td_item">{movie?.runtime} min</td>
                </tr>
                <tr className="flex items-center">
                  <td className="table-td">Language</td>
                  <td className="table-td_item">{movie?.original_language}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="subtitle">
          {" "}
          <div className="w-full mb-4">
            {" "}
            <h2>BRIEF ABOUT THE FILM:</h2>
          </div>{" "}
          <div className="w-[55%] flex justify-center">
            <p>
              {" "}
              {movie?.overview ?? ""}{" "}
              {movie?.overview?.length > 500
                ? movie?.overview.slice(0, 510) + "..."
                : movie?.overview}
            </p>
          </div>
        </div> */}
      </div>
      <div>{movie?.id && cast.length > 0 && <Cast cast={cast} />}</div>
      <div>
        {movie?.id && similar.length > 0 && <Smilar similar={similar} />}
      </div>
    </div>
  );
};

export default Details;
