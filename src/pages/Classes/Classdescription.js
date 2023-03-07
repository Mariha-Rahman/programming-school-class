import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
const Classdescription = ({ c }) => {
    const { id, name } = c
    return (
        <ListGroup className='h-12'>
            <ListGroup.Item >
                Module {id}: {name}
            </ListGroup.Item>
        </ListGroup>
    );
};

export default Classdescription;