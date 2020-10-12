import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{

    var changeableUrl = url

    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);

        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        
    }
}

export const fetchDailyData = async () =>{
    try {
        const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
        return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
      return countries.map((country) => country.name);
    } 
    catch (error) {
      return error;
    }
};