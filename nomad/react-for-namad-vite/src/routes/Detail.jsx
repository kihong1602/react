import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default function Detail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const json = await (
        await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).data;
    setDetails(json);
    setLoading(false);
  }
  useEffect(() => {
    getDetails();
  }, []);
  return <div>
    {loading ? <h1>Loading...</h1> : <h1>Details</h1>}
  </div>
}