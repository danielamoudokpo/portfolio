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
 import pdf from '../assets/CV_Amoudokpo_Kokou_Daniel.pdf';
import DownloadLink from "react-download-link";


class AboutMe extends Component {


    render(){
        return(
            <section className=" py-5 aboutme-section " id={'AboutMe-Section'}>

                <div className='containe py-3 '>
                        <h3 className='heading'>
                            About Me
                        </h3>
                    <div className='  row sides'>

                        <div className = 'col-md-5 leftside no-gutters img-fluid'>
                            <img  className = ' img'  src={my}/>
                        </div>

                        <div className='col-md-7 rigthside no-gutters '>
                            <div className='container-fluid'>
                                <div className='column  col-lg-12   '>
                                <h3 className=' py-2 heading1'>
                                            INFO
                                        </h3>
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

                                <div className='col-lg-8  column'>
                                        <h3 className=' py-2 heading1'>
                                            SKILLS
                                        </h3>
                                    <ul  className='colo'>
                                        <p>HTML/CSS | Bootstrap | Php | JavaScript | React | React Native | NodeJS | MySQL | MongoDB</p>
                                    </ul>
                                    <h3 className='py-2 heading1'>
                                            FRAMWORKS
                                        </h3>
                                    <ul  className='colo'>
                                        <p>Laravel | Symfony | StripJs</p>
                                    </ul>

                                    <h3 className='heading1'>
                                            EXPERIENCE PROFESSIONAL
                                        </h3>
                                    <ul  className='colo'>
                                        <p>Juillet 2019- Septembre 2019 : Stagiaire en maintenance des outils informatiques à ENSIATE.</p>
                                        <p> Mai 2018 - Aout 2018 : Agent chargé de la gestion des stocks et de carburant de la boutique SPEEDWAY à New York.  
                                        </p>
                                    </ul>
                                </div>
                                {/* <a href='../../public/my_irc.pdf' download>Click to download</a> */}
                                {/* <DownloadLink
                                    label="Click to download"
                                    filename="my_irc.pdf"
                                    exportFile={() => Promise.resolve("../../public/my_irc.pdf")}
                                    /> */}

                                <div className = "App">
                                        <a className='pdf' href = {pdf} target = "_blank">Download Full CV<span class="fa ml-2 fa-download"></span> </a>
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