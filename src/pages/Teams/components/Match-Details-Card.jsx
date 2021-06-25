import React from 'react';
import { Link } from 'react-router-dom';  
import './Match-Details-Card.scss';  

const MatchDetailsCard = (props) => {

    const { match, teamName } = props;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    return (
       match && 
       <div className={`row MasterDetailsCard ${match.matchWinner === teamName ? 'won-background' : 'lost-background'}`}>
        <div className="col-md-6">
           <p className="mb-0">vs</p>
           <h2><Link to={`/teams/${otherTeam}`} className="other-team-name font-weight-bold">{otherTeam}</Link></h2>
           <h5 className="font-weight-bold">{match.date}</h5>
           <p className="font-weight-bold mb-1 ">at {match.venue}</p>
           <p className="font-weight-bold mb-1">{match.matchWinner} won by {match.resultMargin} {match.result}</p>
         </div>
         <div className="col-md-6 pull-right">
           <div className="mb-1">
              <p className="font-weight-bold mb-0">First Innings</p>
              <p>{match.team1}</p>
           </div>
           <div className="mb-1">
              <p className="font-weight-bold mb-0">Second Innings</p>
               <p>{match.team2}</p>
           </div>
           <div className="mb-1">
              <p className="font-weight-bold mb-0">Man of the match</p>
              <p>{match.playerOfMatch}</p>
           </div>
           <div className="mb-1">
              <p className="font-weight-bold mb-0">Umpires</p>
              <p>{match.umpire1}, {match.umpire2}</p>
           </div>
         </div>
       </div>
        
       
    )
}

export default MatchDetailsCard