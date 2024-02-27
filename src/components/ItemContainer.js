import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Replace from './Replace'
import { Highlight } from './Highlight'

const Item = ({ id, data, index, s, no_svg }) => {
  let name = (data.v ? data.v.split("\n") : [])
  let src = (data.s ? data.s.split("\n") : [])
  const It = () => {
    return (<div className='shloka'>
      <div className='s-btn-div' style={{ cursor: s === true ? "auto" : "pointer" }}>
        <div className={`btn-ctn btn-90`} style={no_svg === true ? {display: "flex", flex: "0 0 100%", maxWidth: "100%"} : {}}>
          {name.map((val, i) => {
            return <p className='btn-desc' dangerouslySetInnerHTML={{ __html: Replace(val) }} key={i}></p>
          })}
        </div>
        {no_svg !== true ? <div className={no_svg === true ? "" : 'btn-10'}>
          <svg fill="#000000" height="10px" width="10px" version="1.1" viewBox="0 0 24 24">
            <g>
              <g>
                <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 		" />
              </g>
            </g>
          </svg>
        </div> : ""}
      </div>
      <div className='s-source'>
        {src.map((val, i) => {
          return <p dangerouslySetInnerHTML={{ __html: val }} key={i}></p>
        })}
      </div>
    </div>)
  }
  return (<>
    {s === true ? <It /> : <Link className="no-link black" to={`/shloka/${id}/${index}`}>
      <It />
    </Link>}
  </>)
}

export const ItemContainer = ({ data, s, ids, id, more }) => {
  const [state, setState] = React.useState(<></>)
  let locate = useLocation()
  React.useEffect(() => {

    setState(data.map((val, index) => {
      if (more !== false) {
        if (index < 7) {
          return (<div style={{ marginTop: index !== 0 ? 15 : "" }}>
            <Item data={val} id={id} index={index} />
          </div>)
        }
      }
      else {
        if (s === true) {
          if (Number(index) === Number(ids)) {
            let st = val.d
            st = Highlight((st ? String(st) ? st : "" : ""), "*", "span class='s-desc-blue'", "span")
            st = Highlight((st ? String(st) ? st : "" : ""), "&", "span class='s-desc-it'", "span")
            st = st.replace(/\n/g, "<br/>")
            let sh = st.split("\n")
            return (<><Item s={true} id={id} no_svg={true} data={val} index={index} />
            <div style={{padding: 10}}>
              <div dangerouslySetInnerHTML={{ __html: st }} className='s-desc'></div>
              </div>
            </>)
          }
        }
        else {
          return (<Item id={id} data={val} index={index} />)
        }
      }
    }))
  }, [locate, data])
  return (
    <div>
      {state}
    </div>
  )
}
