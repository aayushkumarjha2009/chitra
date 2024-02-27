import React from 'react'
import { useLocation } from 'react-router-dom'
import { Data } from '../App'
import { ItemContainer } from './ItemContainer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Item = ({ data, more, index, s, ids }) => {
  const {id} = useParams()
  const [control, setControl] = React.useState({
    open: more !== false ? false : true
  })
  return (<div className='acc'>
    <div className='acc-div' style={{ borderRadius: control.open === true ? "10px 10px 0 0" : "10px", borderBottom: control.open === true ? "solid #e9e9e9 1px" : "" }} onClick={() => {
      if (more !== false) {
        setControl({ ...control, open: control.open === true ? false : true })
      }
    }}>
      <div className={more !== false ? 'acc-title' : ""} style={{textAlign: more === false ? "center" : "", width: more === false ? "100%" : ""}}>
        {s === true ? <Link to={`/categories/${id}`} className='no-link' style={{color: "#6b6b6b"}}><i>Source</i> : {data.name}</Link> : data.name}
        </div>
      {more !== false ? <div className='acc-btn'><svg style={{transform: control.open === true ? "rotate(180deg)" : "rotate(0deg)"}} width="30" height="30" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></div> : ""}
    </div>
    {control.open === true ? <div className='acc-content'>
      {s=== true ? <ItemContainer s={true} ids={ids} id={index} more={more} data={data.child} /> : <ItemContainer id={index} more={more} data={data.child} />}
      {data.child.length > 7 && more !== false ? <div className='more'>
        <Link to={`/categories/${index}`}><button>More Proofs  &gt;</button></Link>
      </div> : ""}
    </div> : ""}
  </div>)
}

export const Accordion = ({ id, s, ids }) => {
  const data = React.useContext(Data).data
  const [state, setState] = React.useState(<></>)
  const locate = useLocation()
  React.useEffect(() => {
    if (id) {
      setState(data.map((val, index) => {
        if (Number(index) === Number(id)) {
          return <div key={index}>
            {s === true ? <Item data={val} ids={ids} s={true} index={index} more={false} /> : <Item data={val} index={index} more={false} />}
          </div>
        }
      }))
    }
    else {
      setState(data.map((val, index) => {
        return <div key={index}>
          <Item data={val} index={index} />
        </div>
      }))
    }
  }, [locate, data])
  return (
    <>
      <div className='acc-container'>
        {state}
      </div>
    </>
  )
}
