import React, { Component } from 'react';
import my from '../assets/pic/park.JPG'
import my1 from '../assets/pic/1.JPG'
import b from '../assets/blog.jpg'



class Landing extends Component {

    render(){
        return(
            <div className="landing-section banner-layer " id={'Landing-Section'}>

                <p>landing</p>
                <div className =''>
                    <div className='row img-fluid' >
                    {/* <img width='100%' height='100%' src={b}/> */}

                    </div>

                </div>

            </div>

        )
    }
}

export default Landing;