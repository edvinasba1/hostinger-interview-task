import axios from 'axios';
import { BACKEND_ENDPOINT } from '@/constants';

class ApiService {

    constructor() {
        this.url = BACKEND_ENDPOINT;
    }

    async get(endpoint) {
        let endpointUrl = `${this.url}/${endpoint}`;
        let { data } = await axios.get(endpointUrl);
        return data;
    }

    async post(endpoint, payload = null) {
        let endpointUrl = `${this.url}/${endpoint}`;
        let { data } = await axios.post(endpointUrl, payload);
        return data;
    }

    async patch(endpoint, payload = null) {
        let endpointUrl = `${this.url}/${endpoint}`;
        let { data } = await axios.patch(endpointUrl, payload);
        return data;
    }

    async delete(endpoint, payload = null) {
        let endpointUrl = `${this.url}/${endpoint}`;
        let { data } = await axios.delete(endpointUrl, payload);
        return data;
    }
}

export default ApiService;