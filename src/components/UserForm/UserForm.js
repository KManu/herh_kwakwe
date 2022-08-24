import { useState } from "react"

function UserForm({addNeighbour}) {

    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')

    const onAddNeighbour = (event)=>{
        event.preventDefault()
        if(name !== '' && phoneNumber !== '' && longitude !=='' && latitude !== ''){
            addNeighbour(name, phoneNumber, longitude, latitude)
            setName('')
            setPhoneNumber('')
            setLatitude('')
            setLongitude('')
        }
    }

    return(
        <form onSubmit={onAddNeighbour}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" required value={name} onChange={event=> setName(event.target.value)}/>
          <label htmlFor="">Phone Number</label>
          <input type="number" name="phone-number" id="phone-number" required value={phoneNumber} onChange={event=> setPhoneNumber(event.target.value)}/>
          <br />
          <label htmlFor="">Longitude</label>
          <input type="number" name="longitude" id="longitude" required value={longitude} onChange={event=> setLongitude(event.target.value)}/>
          <label htmlFor="">Latitude</label>
          <input type="number" name="latitude" id="latitude" required value={latitude} onChange={event=> setLatitude(event.target.value)}/>
          <br />
          <input type="submit"/>
        </form>
    )
}

export default UserForm