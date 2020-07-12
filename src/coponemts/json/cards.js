
import React ,{ Component } from "react";

import laravelLogo from "../../assets/laravel.jpeg";
import reactLogo from "../../assets/react.png";
import symfonyLogo from "../../assets/symfony.png";



const Card =()=>{
    
    const cardInfoReact =[

            { 
            image : {reactLogo},
            title:'react1',
            text:'too nice'
        },

            {
            image :  {reactLogo},
            title:'react2',
            text:'pablo' 
        },

    ]

    const cardInfoLaravel =[

            { 
            image : {laravelLogo},
            title:'lara1', 
            text:'nice' 
        },

            { 
            image : {laravelLogo},
            title:'lara2', 
            text:'excelente' 
        },


    ]

    const cardInfoSymfony =[

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


    // <Card style= {{width: '18rem'}}>
    //     <CardImg top width="100%" src={reactLogo} alt="Card image cap" />
    //     <CardBody>
    //     <CardTitle>Card title</CardTitle>
    //     <CardSubtitle>Card subtitle</CardSubtitle>
    //     <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    //     <Button>Button</Button>
    //     <CardLink href="#">Another Link</CardLink>
    //     </CardBody>
    // </Card>
}

// export default Card