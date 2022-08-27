import { useState } from 'react'
import { Loader } from '../utils'
import './index.css'

export function WaitForAttacher({info, rsvpList, setRsvpList, contract, end}){
  const [ loading, setLoading ] = useState(false)
  console.log(rsvpList)

  const checkIn = async (address) => {
    setLoading(true)
    try {
      const success =  await contract.apis.Checkin.isPresent(address)
      if(success){
        setLoading(false)
        setRsvpList(list => list.map((guest) => {
          if(guest.address === address){
            guest.present = true
          }
          return guest
        }))
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  return(
    <div className='section' style={{display: 'flex', flexDirection: 'column'}}>
      {
        end ?
        <h3>Event has come to an end</h3>
        :
        <div>
          <small>Contract Address</small>
          <input style={{width: '300px', borderRadius: '10px', textAlign: 'center'}} className='input-number' value={info}/>
        </div>
      }
      
      <h3>RSVP List</h3>
      {
        loading ?
        <Loader />
        :
        <ul className='rsvp'>
        {
          rsvpList.length === 0 ?
          'No RSVP members yet'
          :
          <>
            {
              rsvpList.map((guest, index) => (
                <li key={index}>
                  {guest.address} 
                  <button className='checkin' disabled={guest.present || end} onClick={e => checkIn(guest.address)}>
                    {
                      end ? 
                        guest.present ? 'Present' : 'Absent'
                        :
                        guest.present ? 'Present' : 'Check In'
                    }
                  </button>
                </li>
              ))
            }
            {/* <li>List Item1 <button className='checkin'>Check In</button></li>
            <li>List Item2 <button className='checkin'>Check In</button></li>
            <li>List Item3 <button disabled className='checkin'>Check In</button></li> */}
          </>
        }
      </ul>
      }
      


    </div>
  )
}