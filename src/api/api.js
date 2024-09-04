import axios from 'axios';
import Swal from "sweetalert2";

const api = {
    get: (url, headers = {}) => {
        return axios.get(url, { headers })
            .then(response => response.data)
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Ditemukan Error',
                    text: `Menemukan error saat mendapatkan data: ${error.response ? error.response.data.error : error.message}`,
                });
                throw error;
            });
    },

    post: (url, data, headers = {}) => {
        return axios.post(url, data, { headers })
            .then(response => response.data)
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Ditemukan Error',
                    text: `Menemukan error saat mengirim data: ${error.response ? error.response.data.error : error.message}`,
                });
                throw error;
            });
    }
};

export default api;
