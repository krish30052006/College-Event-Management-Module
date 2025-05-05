import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchEvents = async () => {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
};

export const fetchEventById = async (eventId) => {
    const response = await axios.get(`${API_URL}/events/${eventId}`);
    return response.data;
};

export const createEvent = async (eventData, token) => {
    const response = await axios.post(`${API_URL}/events`, eventData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const updateEvent = async (eventId, eventData, token) => {
    const response = await axios.put(`${API_URL}/events/${eventId}`, eventData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const deleteEvent = async (eventId, token) => {
    const response = await axios.delete(`${API_URL}/events/${eventId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};