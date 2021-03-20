import React from 'react'
import './App.css'
import events from './events.json'

export default function App() {

  return (
    <div className="App">
      <div className="Events">
        {events.map((event, key) => (
          <div key={key} className="Event">
            <img src={event.photo} className="photo" />
            <div className="details">
              <div className="name">
                {event.vendor}
              </div>
              <div className="address">
                {event.address}
              </div>
              <div className="time">
                {event.start_time} - {event.end_time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
