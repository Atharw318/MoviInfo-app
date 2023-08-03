import React from "react";
import "./ActorImageCard.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const ActorImageCard = ({ actor }) => {
  const base_url = "https://image.tmdb.org/t/p/w342";

  return (
    <Link  className="actor-card">
      <Fade delay={100}>
        <div className="actor-card__img-wrapper">
          <img
            className="actor-card__img-wrapper__img"
            src={
              actor.profile_path === null
                ? "/images/person_placeholder.jpeg"
                : base_url + actor.profile_path
            }
            alt={"img card"}
          />
        </div>
        <div className="actor-card__name">{actor.name}</div>
      </Fade>
    </Link>
  );
};

export default ActorImageCard;