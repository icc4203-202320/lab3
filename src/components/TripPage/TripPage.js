import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {Box, Container, Paper, Stack, styled} from "@mui/material";
import SpinnerOfDoom from "../HomePage/SpinnerOfDoom";
import {useLocation} from "react-router-dom";
import "./TripPage.css";


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,

}));


function TripPage(props, {trip}) {
    let path = useLocation().pathname;
    let tripId = path.split("/")[2];

    const GET_DATA = gql`
    query {
        trip(id: ${tripId}) {
          id
          name
          description
          startDate
          endDate
          destinations {
            id
            name
            country
            city
          }
        }
    }
    `;


    const { loading, error, data } = useQuery(GET_DATA);

    if (loading) return  < SpinnerOfDoom color={'secondary.main'} />;
    if (error) return <h1>Error: {error.message}</h1>;



    let start = new Date(data.trip.startDate);
    let end = new Date(data.trip.endDate);
    let today = new Date();

    let destinations = new Set(data.trip.destinations);

    return (
        <Box className={"GroupStack2"} sx={{ mx: 2 }}>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
            <Item className={"TripCard"} sx={{bgcolor: 'background.paper' }}>
            <Paper className={"PaperTrip"}>
                <Container sx={{ mx: 2 }}>
                    <h3>{data.trip.name}</h3>
                    <h4>{data.trip.description}</h4>
                    {today < start ? <><h4>Upcoming</h4>
                        <h6 >This trip starts: {start.getDay() + "/" + start.getMonth() + "/" + start.getFullYear()}</h6></> :
                    today > start && today < end ? <><h4>Ongoing</h4>
                        <h6 >This trip started: {start.getDay() + "/" + start.getMonth() + "/" + start.getFullYear()}</h6></> :
                        <>
                            <h6 >This trip started: {start.getDay() + "/" + start.getMonth() + "/" + start.getFullYear()}</h6>
                            <h6>And ended: {end.getDay() + "/" + end.getMonth() + "/" + end.getFullYear()}</h6>
                        </>   }





                </Container>
            </Paper>
            </Item>
            <React.Fragment>



            {(Array.from(destinations).map((destination) => (

                <Paper key={destination.id} className={"PaperDestination"}>
                    <Container sx={{ mx: 2 }}>


                <div >
                    <h3>{destination.name}</h3>
                    <h4>{destination.city}</h4>
                    <h5>{destination.country}</h5>

                </div>

                    </Container>
                </Paper>
            )))}


            </React.Fragment>

            </Stack>
        </Box>

    );
}

export default TripPage;
