import React from "react";
import './TripCard.css';
import { Link } from "react-router-dom";
import {Button, Container} from "@mui/material";
import placeholder from "./placeholder.png";
import TripPage from "../../TripPage";

function TripCard({trip}) {
    const myImageStyle = { width: '75%',objectFit: 'contain' };
  return (

    <Container sx = {{ pt:2}} >
                <div className="trip-card" >

                    <div className="trip-card__image">
                        <img style={myImageStyle} src={placeholder}  alt={'placeholder'}/>
                    </div>
                    <div className="trip-card__content">
                        {/*<h3 className="TitleStyle">{props.name}</h3>*/}
                        {/*<p className="SubtitleStyle">{props.description.substring(0,50)}</p>*/}
                        <h3 className="TitleStyle">{trip?.name}</h3>
                        <p className="SubtitleStyle">
                            {trip?.description}
                        </p>
                    </div>
                </div>
    </Container>
  );
}
export default TripCard;
