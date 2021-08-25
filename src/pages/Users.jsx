import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pages.css';
import { Link } from 'react-router-dom';

const Driver = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:90/driver-details/show')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
                {
                    posts.map(post => (
                        <table id='table'> 
                            <tr>
                                <th>User Profile</th>
                                <th>Fullname</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Edit</th>
                                <th>Remarks</th>

                            </tr>
                            <tr>
                                <td><img className="img-itm" src={`http://localhost:90/${post.image}`} alt="document pic"/></td>
                                <td><p className='item-info' id='name'>{post.Fullname}</p></td>
                                <td><p className='item-info' id='name'>{post.Phonenumber}</p></td>
                                <td><p className='item-info' id='name'>{post.Address}</p></td>
                                <td>
                                    <Link className='buttonGreen'>Update</Link>
                                    <Link className='buttonRed'>Delete</Link>
                                </td>
                                <td></td>
                            </tr>
                        </table>
                    ))
                }
        </div>
    )


}

export default Driver
    