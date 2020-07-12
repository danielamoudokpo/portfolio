import React, { Component } from 'react';
import my from '../assets/pic/park.JPG'
import my1 from '../assets/pic/1.JPG'
import b from '../assets/blog.jpg'



class Landing extends Component {

    render(){
        return(
            <section className="landing-section banner-layer " id={'Landing-Section'}>
                <div className ='container '>
                    <div className='row img-fluid' >

                    </div>
                    
                    <div className="row agile_banner_info">
                        <div className="col-md-7 agile_banner_margin text-white">
                            <h5>Hi</h5>
                            <h2>My name is <span> Daniel</span></h2>
                            <h4>Web Developer Full Stack</h4>
                            <p>Nulla viverra pharetra sem, eget pulvinar neque pharetra ac int. lorem ipsum Vestibulum. placerat placerat dolor. Vestibulum at dui nunc. Nullam eu elit neque lectus. Aliquam erat volutpat. Nullam ac mattis mi. Donec tincidunt leoelit dictum viverra luctus.</p>
                            <a href="#"> Read More </a>
                        </div>
                        <div className="col-md-5 image_margin">
                            <img src="images/img1.png" alt="" class="img-fluid"/>
                        </div>
			        </div>



                </div>

            </section>

        )
    }
}

export default Landing;