import React from 'react'
import { Data } from '../App'

export const Reference = () => {
  const data = React.useContext(Data).data
  return (
    <div className="container">
      <div>
        <p style={{ fontSize: "25px" }}>References</p>
        In this website, all the data is genuine from popular and verified sources... I don't have collected data from google. Books from <i>Geeta press</i> is used and website like <i><a className='no-link link' href="https://www.wisdomlib.org" target='_blank'>wisdomlib.org</a> is prefered</i> and etc.. You can see references in more details below....
      </div>
      <div>
        {data.map((val, index) => {
          return (<div key={index} style={{ marginTop: 20 }}>
            <div className='shloka'>
              <span style={{ fontSize: "20px" }}>{val.name}</span>
              <div className='btn-ctn'>
                <div dangerouslySetInnerHTML={{__html: val.ref ? val.ref.replace(/\n/g, "<br/>") : ""}}></div>
              </div>
            </div>
          </div>)
        })}
      </div>

      <div style={{ marginTop: 20 }}>
        <div className='shloka' style={{ backgroundColor: "#555555", color: '#fff' }}>
          <span style={{ fontSize: "25px" }}>Note</span>
          <div className='btn-ctn'>
            <p>This website is for educational purpose only and don't support piracy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
