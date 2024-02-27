import React from 'react'
import { Accordion } from '../components/Accordion'
import { Data } from '../App'
import { Link } from 'react-router-dom'


export const Home = () => {
  const data = React.useContext(Data).data
  return (
    <>
      <div className='container'>
        <div className='about'>
          <p style={{ fontSize: "25px" }}>About this website</p>
          Hi, I am Aayush Kumar Jha. Is the meaning of <i>citra</i> is picture or has the bhavarth something like <i>weird</i> or <i>different from others</i>. In this website, I have shown you that the word <i>citra</i> means strange, different, etc... and will be prooving it by using shlokas present in Sanskrit literature.</div>
        <div style={{ marginTop: 20 }}>
          <div className='shloka'>
            <span style={{ fontSize: "25px" }}>Literature I have used</span>
            <div className='btn-ctn'>
              <p>To know and verify the meaning of <i>citra</i>, I have used संस्कृत वाङ्मय like {data.map((val, index) => {
                return (<Link className="no-link" to={`/categories/${index}`}>{val.name}{index >= (data.length - 1) ? "" : ", "}</Link>)
              })}

              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <Accordion />
        </div>
        <div style={{ marginTop: 20 }}>
          <div className='shloka'>
            <span style={{ fontSize: "25px" }}>Still don't believe</span>
            <div className='btn-ctn'>
              <p>If you have any conflict, I would rather say do some reasearch on literature not on google.... before debating more see the references....
                <div className='more' style={{width: "fit-content"}}>
                  <Link to={`/reference`}><button>See references  &gt;</button></Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
