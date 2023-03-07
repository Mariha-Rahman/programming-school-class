import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Leftbar = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='' >
            <h3>Contact us with</h3>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>  Facebook</ListGroup.Item>
                    <ListGroup.Item>Instagram</ListGroup.Item>
                    <ListGroup.Item>Twitter</ListGroup.Item>
                </ListGroup>
            </Card>
            <div>
                <h2>Courses Item</h2>
                {
                    courses.map(course => <p
                        ket={course.id}>
                        <Link to='/classes'>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Leftbar;