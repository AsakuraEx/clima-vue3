import axios from 'axios';
import { ref, computed } from 'vue';

export default function useClima(){

    const clima = ref({});
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
            clima.value = dataClima;
                
        } catch (error) {
            console.log(error);
        }

    }

    const mostrarClima = computed(()=>{
        return Object.values(clima.value).length > 0;
    })
    
    const formatearTemperatura = (temperatura) => {
        return parseInt(temperatura - 273.15);
    }

    return {
        obtenerClima,
        mostrarClima,
        clima,
        formatearTemperatura
    }
}