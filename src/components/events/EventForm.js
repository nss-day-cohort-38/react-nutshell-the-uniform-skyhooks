import React, { useState } from 'react';
import EventManager from '../../modules/EventManager';
import './EventForm.css'

const EventForm = props => {
    const [event, setEvent] = useState({ name: "", date: "", location: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const constructNewEvent = evt => {
        evt.preventDefault();
        if (event.eventName === "" || event.date === "" || event.location === "") {
          window.alert("Please input an event name, date, and location");
        } else {
          setIsLoading(true);
          EventManager.post(event)
            .then(() => props.history.push("/events"));
        }
      };

      return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="name"
                  placeholder="Event Name"
                />
                <label htmlFor="name">Event</label>

                <input
                  type="date"
                  required
                  onChange={handleFieldChange}
                  id="date"
                  placeholder="date"
                />
                <label htmlFor="date">Date</label>

                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="location"
                  placeholder="location"
                />
                <label htmlFor="location">Location</label>

              </div>
              <div className="alignRight">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={constructNewEvent}
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      );
    };
    
    export default EventForm