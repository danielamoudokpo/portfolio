
import React, { Component ,useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Card, CardLink, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import laravelLogo from "../assets/laravel.jpeg";
import reactLogo from "../assets/react.png";
import symfonyLogo from "../assets/symfony.png";

// import myCard from '../coponemts/json/cards'
    
 


const Projects =(props)=>{
    const { 
        buttonLabel,
        className,
    } = props;

    
   const reactModal =[

        {
        mheader: 'SNAP',
        mBody: 'this my_snap'
    },

        {
        mheader: 'IRC',
        mBody: 'this my_irc'
    }

   ]

    const reactCard =[

        { 
        image : {reactLogo},
        title:'my_snapchat',
        text:'too nice',
    },

        {
        image :  {reactLogo},
        title:'my_irc',
        text:'exelente',
    },

]

    const laravelCard =[

        { 
        image : {laravelLogo},
        title:'lara1', 
        text:'nice',
    },

        { 
        image : {laravelLogo},
        title:'lara2', 
        text:'excelente'
    },


]

    const symfonyCard =[

        {
        image : {symfonyLogo},
        title:'simf1',
        text:'good' 
    },

        { 
        image : {symfonyLogo}, 
        title:'simf2', 
        text:'nice' 
    },

        { 
        image : {symfonyLogo},
        title:'simf3',
        text:'too goog' 
    },

        { 
        image : {symfonyLogo},
        title:'simf4',
        text:'exelent' 
    },

]

    const [modal, setModal] = useState(false);

    const [modalInfo, setModalInfo] = useState();

    const [reqIndex , setReqIndex] = useState(null);

    const [mBody , setMBody] = useState('');

    // const [mHeader , setHeader] = useState('');

    // const [index , setIndex] = useState();



    const toggle = (index) =>{

        console.log(index);
        setReqIndex(index);

        // let t = reactModal[index];

        // console.log(t);

        setModalInfo('te')

        console.log({modalInfo});

        setModal(!modal);   

    }

    useEffect(()=>{
        // setReqIndex(index);
        console.log(reqIndex);

        // setModalInfo(reactModal[reqIndex])

        let i = reactModal[reqIndex]

        console.log(i);

    },[{modalInfo}])


    const renderModal = ({modalInfo})=> {
        // console.log({modalInfo});
        return(
                <Modal isOpen={modal} toggle={toggle}   className={className}>
                    <ModalHeader toggle={toggle}>{modalInfo} </ModalHeader>
                    {/* <ModalHeader toggle={toggle}> test </ModalHeader> */}
                    {/* <ModalBody> {modalInfo.mBody} </ModalBody> */}
                    <ModalBody> toi </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{''}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>     
        )
    }
    
    const renderReactCard = (reactCard, index) => {
        return(
            <div className='col-md-6'>
                <Card style= {{width: '18rem'}} key={index} onClick={()=>toggle(index)}>
                    <CardImg top width="100%" src={reactLogo} alt="Card image cap" />
                    <CardBody>
                    <CardTitle> {reactCard.title} </CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText> {reactCard.text} </CardText>
                    <Button>Button</Button>
                    <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </div>
        )

    }

    const renderLaravelCard = (laravelCard, index) => {
        return(
            <div className='col-md-6'>
                <Card style= {{width: '18rem'}} key={index} onClick={()=>toggle(index)}>
                    <CardImg top width="100%" src={laravelLogo} alt="Card image cap" />
                    <CardBody>
                    <CardTitle> {laravelCard.title} </CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText> {laravelCard.text} </CardText>
                    <Button>Button</Button>
                    <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </div>
        )

    }

    const renderSymfonyCard = (symfonyCard, index) => {
        return(
            <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                <Card style= {{width: '18rem' ,height:'350px'}} key={index} onClick={toggle}>
                    <CardImg top width="100%" src={symfonyLogo} alt="Card image cap" />
                    <CardBody>
                    <CardTitle> {symfonyCard.title} </CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText> {symfonyCard.text} </CardText>
                    <Button>Button</Button>
                    <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </div>
        )

    }

    return(
        <div>
                {/* { console.log()} */}
            <section className="projects-section py-5 " id={'Projects-Section'} style={{ }}>
                    <h3 className='heading text-white '>
                        Projects
                    </h3>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">REACT</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">LARAVEL</a>
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">SYMFONY</a>
                        </div>
                    </nav>
                <div style ={{textAlign:'center'}} className="tab-content" id="nav-tabContent">

                                                {/* ----------------REACT ----------------*/}  

                    <div className=" tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className='row'>
                            {reactCard.map(renderReactCard)}
                        </div>
                    </div>
                                            {/* ----------------LARAVELL ----------------*/}  

                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className='row'>
                            {laravelCard.map(renderLaravelCard)}
                        </div>
                    </div>
                                                        {/* ----------------SYMFONY ----------------*/}  

                    <div className=" tab-pane fade " id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" >  
                        <div className="row">
                            {symfonyCard.map(renderSymfonyCard)}
                        </div> 
                    </div>
                                                    {/* ----------------END OF TAB CCONTENT ----------------*/} 

                    {/* <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>hello</ModalHeader>
                        <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={toggle}>Do Something</Button>{''}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal> */}
                    <div>
                        {/* {modalInfo.map(renderModal)} */}
                        {renderModal({modalInfo})} 
                        {/* {console.log(modalInfo)} */}

                    </div>
                    
                </div>
            </section>
        </div>

    )

}

export default Projects;

