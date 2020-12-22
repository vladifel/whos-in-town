import axios from "axios";

export const fetchBand = async (bandName: string) => {
    const options: any = {
        method: 'GET',
        url: `https://rest.bandsintown.com/artists/${bandName}?app_id=123`
    };

    return await axios.request(options)
        .then(response => response.data)
        .catch(error => console.error(error));
}

export const fetchEvents = async (bandName: string) => {
    const options: any = {
        method: 'GET',
        url: `https://rest.bandsintown.com/artists/${bandName}/events?app_id=123&date=upcoming`
    };

    return await axios.request(options)
        .then(response => response.data)
        .catch(error => console.error(error));
}