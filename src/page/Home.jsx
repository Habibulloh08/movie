import { useEffect, useState } from "react";
import {
  // fetchSoonMovie,
  fetchTopRetedMovie,
  fetchTredingMovie,
  fetchUpcomingMovie,
} from "../api";
import Trending from "../components/Trending";
import Upcoming from "../components/Upcoming";
import TopReted from "../components/TopReted";
import Loading from "../components/Loading";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topReted, setTopReted] = useState([]);
  // const [sooniMovie, setSoonMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingData = await fetchTredingMovie();
        // console.log(trendingData);
        setTrending(trendingData.results);

        const upcomingData = await fetchUpcomingMovie();
        // console.log(upcomingData);
        setUpcoming(upcomingData.results);

        const topRatedData = await fetchTopRetedMovie();
        // console.log(topRatedData);
        setTopReted(topRatedData.results);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="mt-8">
      <div className="flex gap-2">
        <div className="box"></div>
        <h2 className="text-2xl font-bold md:xl:sm:w-20">Premyera</h2>
      </div>
      <br />
      <div>{trending.length > 0 && <Trending trending={trending} />}</div>
      <div className="flex gap-2">
        <div className="box"></div>
        <h2 className="text-2xl font-bold">Upcoming</h2>
      </div>
      <br />
      <div>{upcoming.length > 0 && <Upcoming upcoming={upcoming} />}</div>
      <div className="flex gap-2">
        <div className="box"></div>
        <h2 className="text-2xl font-bold">Topreting</h2>
      </div>
      <br />
      <div>{topReted.length > 0 && <TopReted topReted={topReted} />}</div>
    </div>
  );
};

export default Home;
