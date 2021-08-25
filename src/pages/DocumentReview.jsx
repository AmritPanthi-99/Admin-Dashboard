import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pages.css';
import {Link} from 'react-router-dom';
import moduleName from 'module'


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

    const deleteDriver = async Phonenumber => {
        await axios.delete(`http://localhost:90/driver-details/show/${Phonenumber}`)
    }
 

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <table id='table'>
                            <tr>
                                <th>User Profile</th>
                                <th>Full Name</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Documents</th>
                                {/* <th>Citizenship</th>
                                <th>License</th>
                                <th>Bluebook</th> */}
                                <th>Edit</th>
                                <th>Status</th>

                            </tr>
                            
                            <tr>
                                <td><img className="img-itm" src={`http://localhost:90/${post.image}`} alt="profile pic" /></td>
                                <td><p className='item-info' id='name'>{post.Fullname}</p></td>
                                <td><p className='item-info' id='name'>{post.Phonenumber}</p></td>
                                <td><p className='item-info' id='name'>{post.Address}</p></td>
                                <td><Link className='buttonView' to={`/viewdocuments/${post.Phonenumber}`}>View</Link></td>
                                {/* <td><img className="img-itm-doc" src={`http://localhost:90/${post.citizenship}`} alt="citizenship pic" /></td>
                                <td><img className="img-itm-doc" src={`http://localhost:90/${post.license}`} alt="license pic" /></td>
                                <td><img className="img-itm-doc" src={`http://localhost:90/${post.bluebook}`} alt="bluebook pic" /></td> */}
                                <td>
                                    <Link className='buttonGreen'>Accept</Link>
                                    <Link className='buttonRed' onClick={() => deleteDriver(post.Phonenumber)}>Reject</Link>
                                </td>
                                <td></td>   
                            </tr>
                        </table>
                    ))
                }
            </ul>
        </div>
    )
}

export default DocumentReview
