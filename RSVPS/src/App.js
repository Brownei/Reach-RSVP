import './App.css';
import './screens/index.css'
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './reach/build/index.main.mjs'
import { useState } from 'react';
import { views, Loader } from './utils/';
import { ConnectAccount, PasteContractInfo, SelectRole, ViewEvent } from './screens';


const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
// const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const [ account, setAccount ] = useState({})
  const [ contract, setContract ] =  useState({})
  const [ end, setEnd ] = useState(false)
  const [ rsvpList, setRsvpList ] = useState([
    // { address: '0x0cfkbecjb', present: false },
  ])
  const [ loading, setLoading ] = useState(false)
  const [ view, setView ] = useState(views.CONNECT_ACCOUNT)
  const [ contractInfo, setContractInfo ] = useState('')
  const [ price, setPrice ] = useState(0)
  const [ hidden, setHidden ] = useState(9)

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = ""
      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = 'success';
      } catch (error) {
        result = 'failed';
      }
      return result;
    },

    deploy: async () => {
      const contract = account.contract(backend);
      const deadline = 50
      setContract(contract)
      backend.Admin(contract, {
        price: parseFloat(price),
        deadline,
        ...Event
      });
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo())
      setContractInfo(ctcInfo);
      setView(views.WAIT_FOR_ATTACHER)
    },

    attach: async (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      setContract(contract)
      setView(views.ATTACHING)

      try {
        const p = await contract.apis.Attendee.seePrice()
        console.log(p)
        setPrice(parseFloat(p))
        setView(views.VIEW_EVENT) 
      } catch (error) {
        console.log(error)
        setView(views.DEPLOY_OR_ATTACH)
      }
    }
  }

  //Participant Objects
  const Event = {
    ready: () => {
      setView(views.WAIT_FOR_ATTACHER)
    },

    informRSVP: (address) => {
      console.log(address)
      setRsvpList(list => {
        list.push({address, present: false})
        return list
      })
      setHidden(Math.floor(Math.random() * 10))
    },

    informTimeout: () => {
      setEnd(true)
    }
  }

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

  
  return (
    <div className="App">
      <div className='top'>
        <h1>RSVP</h1>
      </div>
      <header className="App-header">
        {
          view === views.CONNECT_ACCOUNT && 
          <ConnectAccount connect={reachFunctions.connect}/>
        }

        {
          view === views.DEPLOY_OR_ATTACH &&
          <SelectRole deploy={reachFunctions.deploy} attach={() => setView(views.PASTE_CONTRACT_INFO)} price={price} setPrice={setPrice}/>
        }

        {
          (view === views.DEPLOYING || view === views.ATTACHING) &&
          <Loader />
        }

        {
          view === views.PASTE_CONTRACT_INFO &&
          <PasteContractInfo attach={reachFunctions.attach}/>
        }

        {/* {
          view === views.WAIT_FOR_ATTACHER &&
          <WaitForAttacher 
            info={contractInfo} 
            rsvpList={rsvpList}
            setRsvpList={setRsvpList}
            contract={contract}
            end={end}
          />
        } */}

        {
          view === views.WAIT_FOR_ATTACHER &&
          <div className='section' style={{display: 'flex', flexDirection: 'column'}}>
            {
              end ?
              <h3>Event has come to an end</h3>
              :
              <div>
                <small>Contract Address</small>
                <input style={{width: '300px', borderRadius: '10px', textAlign: 'center'}} className='input-number' value={contractInfo}/>
              </div>
            }
            <p style={{ color: 'transparent'}}>{hidden}</p>
            
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
                </>
              }
            </ul>
            }
            


          </div>
        }

        {
          view === views.VIEW_EVENT && 
          <ViewEvent 
            contract={contract} 
            price={price}
            cancel={() => setView(views.DEPLOY_OR_ATTACH)}
          />
        }
      </header>
    </div>
  );
}

export default App;
