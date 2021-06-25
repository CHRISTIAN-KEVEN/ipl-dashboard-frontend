import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../config';
import MatchDetailsCard from './components/Match-Details-Card'; 
import MatchSmallCard from './components/Match-Small-Card';
import {Link } from 'react-router-dom';
import './Team.scss'

const Team = (props) => {
    
    console.log('Props', props);

    const [team , setTeam] = useState(null);
    const [matches, setMatches] = useState();
    const {teamName} = useParams();
    console.log('Params', useParams());
    useEffect(() => {
        (async () => {
            const response = await fetch(API.team(teamName));
            const data = await response.json();
           await setTeam(data.data);
         data.data && setMatches(data.data.matches);
            console.log('Data received ', data.data);
        })();
        // fetchMatches();
    }, [teamName]);

    if(team === undefined) {
        return (
            <h1>Team {teamName} not found !</h1>
        )
    }
    return (
        <div className="TeamPage">
            <div className="head row mt-4">
               {  team && <h1 className="team-name col-9 d-flex align-items-end p-0">{team.teamName}</h1>}
               <div className="col-3 pull-right">Pie Chart component</div>
            </div>
           
            <div className="row">
              <h4 className="latest-matches-text font-weight-bold">Latest Matches</h4>
            </div>
            { 
              matches && matches.length && <MatchDetailsCard teamName={team.teamName} match={matches[0]}/>
            }
            
            {
                matches && 
                    <div className="row mt-4 small-card">
                        {
                          matches.length && 
                           matches.slice(1).map(match => <div className="col-md-3 pl-0"><MatchSmallCard teamName={team.teamName} match={match} key={match.lgId}/></div>)
                        }
                        <div className="d-flex justify-content-center align-items-center col-md-3 more">
                            <Link to={`/teams/${teamName}/matches/2018`} className="more">{'More >'}</Link>
                        </div>
                   </div>
            }
            
        </div>
    )
}

export default Team;