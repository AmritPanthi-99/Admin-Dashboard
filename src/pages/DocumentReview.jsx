import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Customers = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:90/driver-details/show')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })  
    }, [])

    return(
        <div>
            <ul>
                {
                    posts.map(post =>(
                        <div className="col-3 border border-info">


                                <img
                                    className="img-itm"
                                    src={`http://localhost:90/${post.image}`}
                                    alt="document pic" />
                                <div className="info-item">
                                    <p className="item-info" id="name"> {post.Fullname}</p>
                                    <p className="item-info" id="name"> {post.Phonenumber}</p>
                                    <p className="item-info" id="name"> {post.Address}</p>
                                    
                                    
                                </div><br></br>
                                {/* <div className="itemaction">
                                              
                                              <button className="btn btn-danger" id="admbtndel" onClick={this.deleteProduct.bind(this, posts._id)}>  Delete </button>
                                              <button className="btn btn-danger" id="admbtndel" onClick={this.deleteProduct.bind(this, posts._id)}>  Accept </button>
                                        
                                             
                                            </div> */}

                            </div>
                    ))
                }
            </ul>
        </div>
    )
    
   
}

export default Customers
