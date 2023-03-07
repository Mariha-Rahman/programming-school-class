import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Classdescription from './Classdescription';
import './Classes.css'
const Classes = () => {
    const classes = useLoaderData()
    return (
        <div className='mx-5'>
            <h3 className='text-info'>All Classes</h3>
            <div className='classstyle'>
                {
                    classes.map(c => <Classdescription
                        key={c.id}
                        c={c}
                    ></Classdescription>)
                }
            </div>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default Classes;