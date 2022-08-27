import { useState } from "react"
import { Loader } from "../utils"


export function ViewEvent({ contract, price, cancel }){
  const [ isPresent, setIsPresent ] = useState(false)
  const [ checked, setChecked ] =  useState(false)
  const [ loading, setLoading ] = useState(false)

  const submitSelf = async () => {
    setLoading(true)
    try {
      const submitted = await contract.apis.Attendee.isGoingToBePresent()
      setLoading(false)
      if(submitted){
        setIsPresent(true)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const reloadStatus = async () => {
    setLoading(true)
    try {
      const status = await contract.apis.Status.seeStatus()
      setLoading(false)
      if(status === true){
        setChecked(true)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return(
    <div className="section">
      {
        loading ?
        <Loader />
        : 
        isPresent ?
          <>
            <p>Current status: {checked ? 'Checked in':'Not Checked in'}</p>
            <button onClick={reloadStatus} className="button">Reload Check-in Status</button>
          </>
        :
        <>
          <p>Will you be available for the event? RSVP price is {price}</p>
          <button onClick={submitSelf} className="button space">Yes</button>
          <button onClick={cancel}className="button space">No</button>
        </>
      }
    </div>
  )
}