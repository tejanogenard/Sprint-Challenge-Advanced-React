import React from 'react';
import { Card, CardTitle, CardText, Col } from 'reactstrap';

const PlayerCard = (props) => {
    return(
   <div class = "character-list">
           <Col xs = '5' md = '5' xl ='5'>
       <Card body outline color="secondary">
        <CardTitle>Name: {props.name} </CardTitle>
        <CardText>Country: {props.country}</CardText>
        <CardText>Search Count: {props.searches}</CardText>
      </Card>
      </Col>
    </div>
    );
};
export default PlayerCard