import React from "https://cdn.skypack.dev/react";
import PropTypes from "https://cdn.skypack.dev/prop-types";

import Video from './Video';

const Videos = props => (
    <ul className="movies">
      {props.movies.map(movie => (
        <li key={movie.id}>
          <Video {...movie} />
        </li>
      ))}
    </ul>
  );
  
  Videos.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
  };
  
  export default Videos;