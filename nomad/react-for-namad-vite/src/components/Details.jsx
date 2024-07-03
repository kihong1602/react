import PropTypes from "prop-types";

Details.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default function Details({title, year, coverImage, like, runtime, rate, genres}) {
  return (
      <div>
        <h1>{title}</h1>
        <img src={coverImage} alt={title}/>
        <hr/>
        <p>{year}년 / {runtime}분</p>
        <p>Rate: {rate}</p>
        <p>Like: {like}</p>
        <p>Genres: {genres.map(value => `${value},`)}</p>
      </div>
  )
}