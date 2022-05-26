import React from 'react'
import "./DashboardContent.css"
import { Container,Row, Col } from 'react-bootstrap'
import image1 from "./assets/signal 1.png"
import image2 from "./assets/signal 2.png"
import image3 from "./assets/BANNED USER.png"
import image4 from "./assets/NEW USER.png"
import image5 from "./assets/UNCONFIRMED USER.png"
import image6 from "./assets/USER DASHBOARD.png"
import image7 from "./assets/Portrait_Placeholder.png"

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, ResponsiveContainer} from 'recharts';

const DashboardContent = () => {
   
const data = [
    {name: 'Januany', users: 6000, pv: 2400, amt: 2400}, 
    {name: 'February', users: 5500, pv: 2000, amt: 1500},
    {name: 'March', users: 7000, pv: 2400, amt: 2400}, 
    {name: 'April', users: 3500, pv: 2000, amt: 1500},
    {name: 'May', users: 3000, pv: 2400, amt: 2400}, 
    {name: 'June', users: 5700, pv: 2000, amt: 1500},
    {name: 'July', users: 6500, pv: 2400, amt: 2400}, 
    {name: 'August', users: 9000, pv: 2000, amt: 1500},
    {name: 'September', users: 5600, pv: 2400, amt: 2400}, 
    {name: 'October', users: 7000, pv: 2000, amt: 1500},
    {name: 'November', users: 3500, pv: 2400, amt: 2400}, 
    {name: 'December', users: 8400, pv: 2000, amt: 1500},
];

const barData=[
    {name: 'Januany',  sales: 2400, amt: 2400}, 
    {name: 'February',  sales: 2000, amt: 1500},
    {name: 'March', sales: 1500, amt: 2400}, 
    {name: 'April', sales: 1400, amt: 1500},
    {name: 'May',  sales: 1250, amt: 2400}, 
    {name: 'June',  sales: 1700, amt: 1500},
    {name: 'July', sales: 2100, amt: 2400}, 
    {name: 'August', sales: 1500, amt: 1500},
    {name: 'September', sales: 1250, amt: 2400}, 
    {name: 'October',  sales: 1650, amt: 1500},
    {name: 'November',  sales: 1150, amt: 2400}, 
    {name: 'December', sales: 1900, amt: 1500},
]

const renderLineChart = (
  <ResponsiveContainer minWidth={200}  height={300}>
      <LineChart  data={data}>
    <Line type="monotone" dataKey="users" stroke="#ffc107" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip/>
    <Legend />
  </LineChart>
  </ResponsiveContainer>
);

const renderBarChart = (
<ResponsiveContainer minWidth={200} height={300}>
<BarChart  data={barData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="sales" fill="#ffc107" />
</BarChart>
</ResponsiveContainer>
)

  return (
    <div className='mb-5'>
       <Container>
            <Row className='mb-5'>
                    <Col lg={3}>
                        <div>
                            <div className="eachContainer">
                                <div className="iconContainer">
                                    <img src={image6} alt=""/>
                                </div>
                                <div className="number mt-5 ms-4 fw-bold">4317</div>

                                <div className="textWrapper ms-4" >
                                    <span>Total Users</span>
                                    <span>
                                        <img src={image1} alt=""/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <div>
                            <div className="eachContainer">
                                <div className="iconContainer">
                                    <img src={image4} alt=""/>
                                </div>
                                <div className="number mt-5  ms-4 fw-bold">41</div>

                                <div className="textWrapper ms-4" >
                                    <span>New Users</span>
                                    <span>
                                        <img src={image2} alt=""/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3}>
                        <div>
                            <div className="eachContainer">
                                <div class="iconContainer">
                                    <img src={image3} alt=""/>
                                </div>
                                <div className="number mt-5  ms-4 fw-bold">67</div>

                                <div className="textWrapper ms-4" >
                                    <span>Banned Users</span>
                                    <span>
                                        <img src={image1} alt="" />
                                    </span>
                                </div>
                            </div>
                       </div>
                    </Col>

                    <Col lg={3}>
                        <div>
                            <div className="eachContainer">
                                <div className="iconContainer">
                                    <img src={image5} alt="" />
                                </div>
                                <div className="number mt-5  ms-4 fw-bold">1187</div>

                                <div className="textWrapper ms-4" >
                                    <span>Unconfirmed Users</span>
                                    <span>
                                        <img src={image2} alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
            </Row>

            <Row>
                <Col>
                    <div>
                        <h2 className='mb-3 text-center'>Registration History</h2>
                        <div>
                            {renderLineChart}
                        </div>
                    </div>
                </Col>

                <Col>
                    <div>
                        <h2 className='mb-3 text-center'>Product Sales History</h2>
                    </div>

                    <div>
                        {renderBarChart}
                    </div>
                </Col>
            </Row>

            
                <div className="latestRegistration">

                    <div className="headerReg text-center mt-5 mb-3">
                        <h2>Latest Registration</h2>
                    </div>

                    <div className="latestUser mb-3">
                        <div class="userImg">
                            <img src={image7} alt="" />
                        </div>
                        <div className="name fw-bold">Paul Scholes</div>
                        <div className="hours">2 hours ago</div>
                    </div>
                    <div className="latestUser mb-3">
                        <div class="userImg">
                            <img src={image7} alt="" />
                        </div>
                        <div className="name fw-bold">Paul Scholes</div>
                        <div className="hours">2 hours ago</div>
                    </div>
                    <div className="latestUser mb-3">
                        <div class="userImg">
                            <img src={image7} alt="" />
                        </div>
                        <div className="name fw-bold">Paul Scholes</div>
                        <div className="hours">2 hours ago</div>
                    </div>
                    <div className="latestUser mb-3">
                        <div class="userImg">
                            <img src={image7} alt="" />
                        </div>
                        <div className="name fw-bold">Paul Scholes</div>
                        <div className="hours">2 hours ago</div>
                    </div>
                    <div className="latestUser mb-3">
                        <div class="userImg">
                            <img src={image7} alt="" />
                        </div>
                        <div className="name fw-bold">Paul Scholes</div>
                        <div className="hours">2 hours ago</div>
                    </div>
                    <div className="latestUser mb-3">
                        <div class="userImg">
                            <img src={image7} alt="" />
                        </div>
                        <div className="name fw-bold">Paul Scholes</div>
                        <div className="hours">2 hours ago</div>
                    </div>
                    <div className="latestUser mb-3">
                        <div class="userImg">
                            <img src={image7} alt="" />
                        </div>
                        <div className="name fw-bold">Paul Scholes</div>
                        <div className="hours">2 hours ago</div>
                    </div>
                  
                </div>
        </Container> 


       
    </div>
  )
}

export default DashboardContent