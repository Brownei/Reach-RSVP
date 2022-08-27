import { useState } from 'react'
import './index.css'

export function SelectRole({deploy, attach, price, setPrice}){
  const [ isDeployer, setIsDeployer ] = useState(false)
  return(
    <div className='section'>
      {
        isDeployer ? 
        <>
          <h4>Set Event Price</h4>
          <input className='input-number' type={'number'} min={0} onChange={ e => setPrice(e.target.value)} value={price}/>
          <button className='button' onClick={() => deploy()}>Deploy</button>
        </>
        :
        <>
          <button className='button' onClick={() => setIsDeployer(true)}>Deploy Contract</button>
          <hr />
          <button className='button' onClick={() => attach()}>Attach to existing contract</button>
        </>
      }
      
    </div>
  )
}