import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Courseinfo.css'
const CourseInfo = ({ course }) => {
    const { name, detail, image } = course
    return (
        <div>
            <Card className='card position-relative'>
                <Card.Img className='image' src={image} alt="Card image" />

                <Card.ImgOverlay className='text-white'>
                    <Card.Title className='fs-1 text-white'>Title: {name}</Card.Title>
                    <Card.Text>
                        {detail}
                    </Card.Text>
                    <Link className='position-absolute bottom-0 end-0 ' to='/classes'>
                        <Button variant="warning" className='fs-5 '>See All Classes</Button>

                    </Link>

                </Card.ImgOverlay>

            </Card>

        </div>


    );
};

export default CourseInfo;