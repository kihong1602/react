import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Details from "../components/Details.jsx";

export default function Detail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const json = await (
        await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).data;
    setDetails(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getDetails();
  }, []);

  return <div>
    {loading ? <h1>Loading...</h1> :
        <Details
            title={details.title}
            year={details.year}
            coverImage={details.large_cover_image}
            like={details.like_count}
            runtime={details.runtime}
            rate={details.rating}
            genres={details.genres}
        />
    }
  </div>
}