import React from 'react'
import './My_services.css'
import services_data from '../../assets/service-data'
import arrow from '../../assets/arrow.png'


const My_services = () => {
  return (
    <div className='services'>
        <div className="service-title">
            <h1>My Services</h1>
            <div className="services-container">
                {services_data.map((service,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img className='arrow-icon' src={arrow} alt="" />
                        </div>

                    </div>
                })}
            </div>
        </div>

    </div>
  )
}

export default My_services