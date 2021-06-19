
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../../config';
import MatchDetailsCard from '../Teams/components/Match-Details-Card';

const MatchPage = () => {

    const [matches, setMatches] = useState();
    const {teamName, year} = useParams();
    console.log('Params', useParams())
    useEffect(() => {

        const fetchMatch = async () => {
            fetch(API.matches(teamName, year)).then(response => {
                const responsePromise = response.json();
                responsePromise.then(data => {
                    console.log('Response ', data)
                    setMatches(data.data);
                });
               
            })
      };
        fetchMatch();
    }, [])

    return (
        <React.Fragment>
           <h1>Match Page</h1>
           {
             matches && matches.length &&
             matches.map(match => <MatchDetailsCard teamName={teamName} match={match} key={match.lgId}/>)
           }
           </React.Fragment>    
    );
}

export default MatchPage