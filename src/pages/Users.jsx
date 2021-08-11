import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pages.css';

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
            <ul>
                {
                    posts.map(post => (
                        <table>
                            <tr>
                                <td><img className="img-itm" src={`http://localhost:90/${post.image}`} alt="document pic"/></td>
                                <td><p className='item-info' id='name'>{post.Fullname}</p></td>
                                <td><p className='item-info' id='name'>{post.Phonenumber}</p></td>
                                <td><p className='item-info' id='name'>{post.Address}</p></td>
                            </tr>
                        </table>
                    ))
                }
            </ul>
        </div>
    )


}

export default Driver
    