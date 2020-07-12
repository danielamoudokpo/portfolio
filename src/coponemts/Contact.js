import React, { Component } from 'react';



class Contact extends Component{

    render(){

        return(
            <section className="py-5 contact-section" id={'Contact-Section'}>
                <div className=" py-3 container">
                    <h3 className='heading'>
                                Contact
                    </h3>
                    <div className=' row contact-grids'>
                        <div className=" col-lg-5 contact-left">
                            <h4 className='mb-4'> Address Info</h4>
                            <div className='row'>
                                <div className='col-1 pr-0 mt-4'>
                                    <i className="fa fa-envelope-open" arial-hidden='true'></i>
                                </div>
                                <div className='col-11 '>
                                    <h5>Email</h5>
                                    <p>
                                        <a href='#' > danielamoudokpo@gmail.com</a>
                                    </p>
                                    <p>
                                        <a href='#' > kokou-daniel.amoudokpo@epitech.eu</a>
                                    </p>
                                   
                                </div>
                                <div className='col-1 pr-0 mt-4'>
                                    <i className="fa fa-phone" arial-hidden='true'></i>
                                </div>
                                <div className='col-11 mt-4'>
                                    <h5>Phone</h5>
                                    <p>+33 07 66 52 11 65 </p>
                                   
                                </div>

                                <div className='col-1 pr-0 mt-4'>
                                    <i className="fa fa-map-maker" arial-hidden='true'></i>
                                </div>
                                <div className='col-11 mt-4'>
                                    <h5>Adrress</h5>
                                    <p> 186, Rue Edouard Tremblay</p>
                                    <p> 94400 , Vitry-sur-Seine, France</p>
                                   
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-7 mt-lg-0 mt-5 contact-rigth'>
                            <h4 className="mb-4 "> Get In Touch</h4>
                            
                            <form action="#" method="post">
                                <label><i className="fa mr-2 fa-user" aria-hidden="true"></i> Name</label>
                                <input type="text" name="Name" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required=""/>
                                <div className="clearfix"></div>
                                <label><i className="fas mr-2 fa-envelope-open" aria-hidden="true"></i>Email</label>
                                <input type="email" name="Email" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required=""/>
                                <div className="clearfix"></div>
                                <label><i className="fas mr-2 fa-phone" aria-hidden="true"></i>Phone</label>
                                <input type="text" name="Phone" value="Phone" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Phone';}" required=""/>
                                <div className="clearfix"></div>
                                <label><i className="fas mr-2 fa-edit" aria-hidden="true"></i>Message</label>
                                <textarea name="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
                                <input type="submit" value="Submit"/>
				            </form>
                            
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

// SHA256:0VvCKlZXUykgVZdZ0Wk51EFubCmoHgz7rwAkRdQ97b4


export default Contact;