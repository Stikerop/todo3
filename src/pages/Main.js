import React, {useState} from "react";
import {eventsData} from "../utils/data";
import {Event} from "../components/items/Event";

export const Main = () => {
    const [events, setEvents] = useState(eventsData)
    const [title,setTitle] = useState('')

    const createEvent  = () => {
        let eventId = Math.max (...events.map(event => event.id), 1)
        setEvents([...events, {id: ++eventId, title: title}])
    }

    const deleteEvent = (eventId) => {
        setEvents(events.filter(event => event.id !== eventId))
    }

     return(
        <div>
            <h4>You have {events.length} things to do  </h4>
            <input type="text" onChange={event => setTitle(event.target.value)}/>
            <button onClick={createEvent}>Create Event</button>
            {events.map((event, index) => (
                <Event
                    key = {event.id}
                    item = {event}
                    deleteEvent={deleteEvent}
                />
            ))}
        </div>
    )
}