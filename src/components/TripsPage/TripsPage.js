import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import TripCard from "./TripCard/TripCard";
import './TripsPage.css';
import {Paper, Stack, styled} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {generatePath, useNavigate} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,

}));
//


let email = "audie_johns@schuppe.name";
const GET_DATA = gql`
query {
  user(email: "${email}") {
    firstName
    email
    trips {
      id
      name
      description
      startDate
      endDate
      }
    }
  }

`;

function TripsPage(props, {email}) {
    const { loading, error, data } = useQuery(GET_DATA);

    const navigate = useNavigate();


    if (loading) return  <CircularProgress />;
    if (error) return <h1>Error: {error.message}</h1>;


    return (
        <>
        <div className={"GroupStack"}>
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            sx={{ mx: 2 , mt: '90px'}}
        >
            <React.Fragment>


                {data?.user?.trips?.map((trip) => (

                    <Item key={trip.id}  trip={trip} onClick={()=>navigate(generatePath('./:trip_id', {trip_id: trip.id}))}>
                        <TripCard  trip={trip} />
                    </Item>

                ))}

            </React.Fragment>
        </Stack>
        </div>

        </>
    );
}


export default TripsPage;
