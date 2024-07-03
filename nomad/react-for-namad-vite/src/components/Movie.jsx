import PropTypes from "prop-types";
import {Link} from "react-router-dom";

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string)
}

export default function Movie({title, coverImage, summary, genres}) {
  return <div>
    <h2>
      <Link to={'/movie'}>{title}</Link>
    </h2>
    <img src={coverImage} alt={title}/>
    <p>{summary}</p>
    <ul>
      {genres.map((g, index) => <li key={index}>{g}</li>)}
    </ul>
  </div>;
}