import {Component} from "react";
import axios from 'axios';
class ViewDocuments extends Component {​
    state = {​
        citizenship : " ",
        license : " ",
        bluebook : " ",
        id : this.props.match.params.id
    };
    componentDidMount() {​
        axios
            .get("/driver-details/show/"+ this.state.id )
            .then((response) => {​
                console.log(response);
                this.setState({​
                    citizenship: response.data.citizenship,

                    license : response.data.license,
                    bluebook : response.data.bluebook
                }​);
            }​)
            .catch((err) => {​
                console.log(err.response);
            }​);
    }​
    render() {​
 
        return (
      
                <div className="header-container">
                    
                    <div className="header-box">
                        <h1 className="heading-primary">
                            Best <br></br> <span id="restaurant">Driver Documents</span> <br></br> in town
                </h1>
                
              </div>

                <section className="menu">
                    <div className="container">
                        {​/* <div className="menu-heading">Menu</div>
                        <div className="menu-grid">
                            <div className="menu-hold">
                                <div className="menu-container">
                                    <div className="menu-img">
                                        &nbsp;
                </div>
                                    <h1 className="menu-title">Chicken Pizza</h1>
                                    <p className="menu-p">Spicy Pizza</p>
                                    <h3 className="price">$23</h3>
                                </div>
                            </div>
                        </div> */}​

<div className="row border border-info">
                     
                            return (
                               
                                <div className="col-3 border border-info">
                                 
                                    <img
                                        className="img-itm"
                                        src={​`http://localhost:3000/${license}​`}​
                                        alt="items pic" />
                                        <div className="info-item">
                                        <img
                                        className="img-itm"
                                        src={​`http://localhost:3000/${citizenship}​`}​
                                        alt="items pic" />
                                       
                                        </div>
                              
                                        </div>
                               
                                      
                            );
                   
                    </div>
        </div>
        </section>
        </div>
 

        )
}}
export default ViewDocuments;