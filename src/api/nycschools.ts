import axios from 'axios';

const BASE_SCHOOL_URL = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';
const BASE_SCORES_URL = 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json';


// this function fetches the list of schools. Only minimum data is requested to keep the response small
async function getSchools(): Promise<unknown> {
    try {
        const response = await axios.get(`${BASE_SCHOOL_URL}?$select=school_name,%20dbn`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error("ERROR getSchools: ", error)
        throw error
    }
}


// this function fetches the details of a school based on user selection from the list
async function getSchoolDetails(dbn: string | undefined): Promise<unknown> {
    try {
        const response = await axios.get(`${BASE_SCHOOL_URL}?dbn=${dbn}`);
        const data = response.data;
        
        // To simulate bad response (with unexpected data shape), uncomment two lines below, this may trigger the error handling in the component. Notice it will trigger "bad" response in 20% of the cases, so application can p[otentialy recover if you reset error ] 
        // const ind = Math.floor(Math.random() * 10);
        // return ind > 2 ? data : Promise.resolve({})

        return data;


    } catch (error) {
        console.error("ERROR getSchoolDetails: ", error)
        throw error 
    }
}


// this function fetches the SAT scores for a school based on user selection from the list
async function getSATScoresForSchool(dbn: string | undefined): Promise<unknown> {
    try {
        const response = await axios.get(`${BASE_SCORES_URL}?dbn=${dbn}`);
        return response.data;
    } catch (error) {
        console.error("ERROR getSATScoresForSchool: ", error)
        throw error
    }
}


export { getSchools, getSchoolDetails, getSATScoresForSchool };