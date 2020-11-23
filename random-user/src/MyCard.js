import React from 'react';
import {Card, CardTitle, CardBody, CardText} from 'reactstrap';
import { FaMapMarkedAlt, FaPhone} from 'react-icons/fa';
import { SiMailDotRu } from "react-icons/si";

const MyCard = ({ details }) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img
                    height= "150"
                    width="150"
                    className="rounded-circle img-thumbnail border-danger"
                    src={details.picture?.large}
                />
                <CardTitle>
                    <h1>
                        <span className="text-primary mr-2" >{details.name?.title}</span>
                        <span className="text-primary mr-2">{details.name?.first}</span>
                        <span className="text-primary mr-2">{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt className= "ml-4 mr-2" />
                    {details.location?.city}
                    <FaPhone className="ml-4 mr-2"/>
                    {details.phone}
                   <p> <SiMailDotRu className= "mr-2"/>
                    {details.email}</p>
                </CardText>
            </CardBody>
        </Card>
    )
    
}

export default MyCard;