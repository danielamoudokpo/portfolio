import React, { Component } from 'react';
import my from '../assets/pic/park.JPG'
// import my1 from '../assets/pic/6.JPG'
// import my1 from '../assets/pic/9.JPG'
// import my1 from '../assets/pic/12.JPG'
import my1 from '../assets/pic/1.JPG'
// import my1 from '../assets/pic/2.JPG'
// import my1 from '../assets/pic/4.JPG'
// import my1 from '../assets/pic/18.JPG'
// import my1 from '../assets/pic/19.PNG'









class AboutMe extends Component {

    render(){
        return(
            <section className=" py-5 aboutme-section " id={'AboutMe-Section'}>

                <div className='container py-3 '>
                        <h3 className='heading'>
                            About Me
                        </h3>
                    <div className='  row sides'>

                        <div className = 'col-md-5 leftside no-gutters img-fluid'>
                            <img  className = ' img'  src={my}/>
                        </div>

                        <div className='col-md-7 rigthsid no-gutters '>
                            <div className='container'>
                                <div className='column'>
                                        <ul  className='colo'>
                                            <li> Name: kokou Daniel Amoudokpo</li>
                                            <hr/>
                                            <li> Email: danielamoudokpo@gmail.com</li>
                                            <hr/>
                                            <li> Phone: +33 7 66 52 11 65</li>
                                            <hr/>
                                            <li> DOB: 27 October 1999</li>
                                            <hr/>
                                            <li> Address : 186 Rue Edouard Tremblay,94400,Vitry-sur-Seine,France. </li>
                                            <hr/>
                                            <li> Nationality : Togolese</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMe;