
const baseUrl = 'http://localhost:8080';

const API = {
    team: (teamName) => `${baseUrl}/teams/${teamName}`
};

export default API