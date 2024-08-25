import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'

const Mywork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My Work</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img className='projpic' key={index} src={work.w_img} alt="" />
            })}
            
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
            </div>
        

    </div>
  )
}

export default Mywork