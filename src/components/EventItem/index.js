import './index.css'

const EventItem = props => {
  const {isActive, eventDetails, setActiveEventId} = props
  const {id, imageUrl, name, location} = eventDetails

  const activeEventBorderStyle = isActive ? 'event-image active' : 'event-image'

  const onClickEventItem = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item-container">
      <button type="button" onClick={onClickEventItem} className="btn-style">
        <img src={imageUrl} className={activeEventBorderStyle} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
