import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../config';
import MatchDetailsCard from './components/Match-Details-Card'; 
import MatchSmallCard from './components/Match-Small-Card';
import './Team.css'

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
            {  team && <h1>{team.teamName}</h1>}
            <p>Latest Matches</p>
            { 
              matches && matches.length && <MatchDetailsCard teamName={team.teamName} match={matches[0]}/>
            }
            
            {
                matches && matches.length && matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match={match} key={match.lgId}/>)
            }
            
        </div>
    )
}

export default Team;