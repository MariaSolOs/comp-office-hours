import React from 'react';
import { gql, useQuery } from '@apollo/client';

import InstructorList from './InstructorList';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';
import { mainStyles } from './HomePageStyles';
const useStyles = makeStyles(mainStyles);

const GET_INSTRUCTORS = gql`
    query getInstructors {
        instructors {
            _id
            name 
            photo
        }
    }
`;

const HomePage = (props) => {
    const classes = useStyles();

    const { loading, data, error } = useQuery(GET_INSTRUCTORS);

    return (    
        <div className={classes.menu}>
            {loading? 
                <CircularProgress size={100}/> :
                error? 
                <p>We cannot schedule your appointment right now.</p>:
                <InstructorList
                instructors={data.instructors}/>}
        </div>
    );
}

export default HomePage;