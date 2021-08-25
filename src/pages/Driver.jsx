import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Driver = () => {
  const [driver, setDriver] = useState({
    image: "",
    Fullname: "",
    Phonenumber: "",
    Address: "",
    status: "Verified"
  });
  const { Phonenumber } = useParams();
  useEffect(() => {
    loadDriver();
  }, []);
  const loadDriver = async () => {
    const res = await axios.get(`/driver-details/show/${Phonenumber}`);
    setDriver(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">Driver Details: {Phonenumber}</h1>
      <hr />

<table id='table'>
                            <tr>
                                <th>Driver Profile</th>
                                <th>Fullname</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Edit</th>
                                <th>Remarks</th>

                            </tr>
                            
                            <tr>
                                <td><img className="img-itm" src={`http://localhost:90/${driver.image}`} alt="profile pic" /></td>
                                <td><p className='item-info' id='name'>{driver.Fullname}</p></td>
                                <td><p className='item-info' id='name'>{driver.Phonenumber}</p></td>
                                <td><p className='item-info' id='name'>{driver.Address}</p></td>                                
                                <td>
                                    <Link className='buttonGreen' to='/updatedriver'>Update</Link>
                                    <Link className='buttonRed'>Delete</Link>
                                </td>
                                <td><p className='item-info' id='name'>{driver.Phonenumber}</p></td>
                            </tr>
                        </table>
    </div>
  );
};

export default Driver;