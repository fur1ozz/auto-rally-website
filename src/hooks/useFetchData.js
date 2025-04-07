import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL+url);
                setData(response.data);
                setStatus(response.status);
            } catch (error) {
                setError(error);
                if (error.response) {
                    setStatus(error.response.status);
                }
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error, status };
};

export default useFetchData;
