import React from "react";

export const Event = ({item, deleteEvent}) =>
    <div>
        <h4>{item.title}</h4>
        <button onClick={() => deleteEvent(item.id)}>Delete</button>
    </div>
