import React from 'react';

const EventCard = ({ event, onEdit, onDelete }) => {
    return (
        <div className="event-card">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <button onClick={() => onEdit(event.id)}>Edit</button>
            <button onClick={() => onDelete(event.id)}>Delete</button>
        </div>
    );
};

export default EventCard;