import axios from "axios"

export const getUserCountry = async (): Promise<string> => {

    try {
        const response = await axios.get(
            `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_GEOLOCATION_API_KEY}`
        );
        return response.data.country_code2;
    } catch (error: any) {
        console.error('Error fetching user location:', error.message);
        return 'AE'; 
    }
};