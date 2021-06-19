
const baseUrl = 'http://localhost:8080';

const API = {
    team: (teamName) => `${baseUrl}/teams/${teamName}`,
    matches: (teamName, year) => `${baseUrl}/teams/${teamName}/matches?year=${year}`
};

export default API