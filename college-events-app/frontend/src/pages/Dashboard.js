import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/api';
import EventCard from '../components/EventCard';

const Dashboard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const data = await getEvents();
            setEvents(data);
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h1>College Events Dashboard</h1>
            <div className="event-list">
                {events.map(event => (
                    <EventCard key={event._id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;