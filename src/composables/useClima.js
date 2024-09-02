import axios from 'axios';

export default function useClima(){
    
    const obtenerClima = async ({ciudad, pais}) => {
        
        //importando el api key
        const key = import.meta.env.VITE_API_KEY;
        const ciudadApi = ciudad.replace(/ /g, '%');

        //Pasando latitud y longitud
        try {

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudadApi},${pais}&limit=1&appid=${key}`;
            
            const { data } = await axios(url);
            const { lat, lon } = data[0];

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=es`;
            const {data: dataClima} = await axios(urlClima);
            console.log(dataClima);
                
        } catch (error) {
            console.log(error);
        }

    }
    
    return {
        obtenerClima
    }
}