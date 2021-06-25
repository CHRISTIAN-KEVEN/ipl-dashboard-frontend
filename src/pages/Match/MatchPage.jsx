
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../../config';
import MatchDetailsCard from '../Teams/components/Match-Details-Card';
import './MatchPage.scss';

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
             matches.map(match => <div className="p-4">
                 <MatchDetailsCard teamName={teamName} match={match} key={match.lgId}/>
                 </div>)
           }
           {
               matches && matches.length === 0 &&
               <div className="d-flex justify-content-center align-items-center w-100 h-100">
                   <p className="no-data">
                    <strong>{teamName}</strong> has played no matches this year
                   </p>
               </div>
           }
           </React.Fragment>    
    );
}

export default MatchPage