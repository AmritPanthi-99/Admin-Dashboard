import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pages.css';

const DocumentReview = () => {

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
                        <table id='table'>
                            <tr>
                                <th>User Profile</th>
                                <th>Phone Number</th>
                                <th>Citizenship</th>
                                <th>License</th>
                                <th>Bluebook</th>
                                <th>Remarks</th>
                                <th>Edit</th>

                            </tr>
                            <tr>
                                <td><img className="img-itm" src={`http://localhost:90/${post.image}`} alt="profile pic" /></td>
                                <td><p className='item-info' id='name'>{post.Phonenumber}</p></td>
                                <td><img className="img-itm-doc" src={`http://localhost:90/${post.citizenship}`} alt="citizenship pic" /></td>
                                <td><img className="img-itm-doc" src={`http://localhost:90/${post.license}`} alt="license pic" /></td>
                                <td><img className="img-itm-doc" src={`http://localhost:90/${post.bluebook}`} alt="bluebook pic" /></td>
                            </tr>
                        </table>
                    ))
                }
            </ul>
        </div>
    )
}

export default DocumentReview
