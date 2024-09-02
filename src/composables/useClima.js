export default function useClima(){
    
    const obtenerClima = ({ciudad, pais}) => {
        
        //importando el api key
        const key = import.meta.env.VITE_API_KEY;

        //Pasando latitud y longitud
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
        console.log(url);
        
    }
    
    return {
        obtenerClima
    }
}