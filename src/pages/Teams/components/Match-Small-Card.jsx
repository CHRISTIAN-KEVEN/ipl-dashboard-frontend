
import React from 'react';
import { Link } from 'react-router-dom';
import './Match-Small-Card.scss';

const MatchSmallCard = (props) => {

    const { match, teamName } = props;
    console.log('Match received into component ', match);
   
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    return (
       otherTeam && <div className={`MatchSmallCard ${match.matchWinner === teamName ? 'won-background': 'lost-background'}`}>
           <p className="font-weight-bold p-0">vs</p>
           <h1><Link to={`/teams/${otherTeam}`} className="other-team-name">{otherTeam}</Link></h1>
           <p className="font-weight-bold">{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>
        
    )
}

export default MatchSmallCard