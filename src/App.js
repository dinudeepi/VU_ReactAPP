import logo from './logo.svg';
import './App.css';
import Searchbox from './components/Searchbox';
import React, { useEffect, useState } from "react"
import { FormLabel, Input, Row } from 'react-bootstrap';
import {MagnifyingGlass,CirclesWithBar,TailSpin} from 'react-loader-spinner'
import NavScrollExample from './components/Navbar'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import EmbedsPage from './components/BootstrapIframe'
import ReactPlayer from 'react-player';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Ellipsis } from 'react-bootstrap/esm/PageItem';
import Col from 'react-bootstrap/Col';
//import Dropdown from 'react-bootstrap/Dropdown';
import Dropdown from 'react-dropdown'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import physics from './data/physics.json';
import chemistry from './data/chemistry.json';
import computer from './data/computer.json';
import maths from './data/maths.json';
import india from './data/india.json';
import geography from './data/geography.json';

 
function App() {

  const [json, setJson] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('');
  const [fac, setFac] = useState([
    { label: "Default", value: 1 }
  ]);
  const [domain, setDomain] = useState([
    { label: "Default", value: 1 }
  ]);

  useEffect(()=>{
    

  },[json])

  // const fetchData = () => {
  //   setJson([]);
  //   console.log(physics);
  //   var url = "http://122.166.154.2:2023/search?term=" + message
  //   setIsLoading(true)
  //   fetch(url, {
  //     mode: 'cors',
  //     headers: {
  //       'Access-Control-Allow-Origin':'*'
  //     }
  //   })
  //     .then(response => {
  //       setTimeout(() => {
          
  //       setIsLoading(false)
  //       }, 5000);
  //       //console.log(response.json());
  //       return response.json()
  //     })
  //     .then(data => {
  //       setIsLoading(false)
  //       console.log(data);
  //       setJson(data)
  //     })
  // }

  // const faculties =()=>{
  //   JSON.parse(message).map(item =>{
  //     const newArray = []
  //     for(let i of item){
  //        newArray.push(i.value)
  //     }
  //     console.log(newArray);
  //     return newArray

  // })};

  const newFac=()=>{
    const arr = []
    Object.keys(message).forEach(key => arr.push({name: key, value: message[key]}))
    console.log(arr);
  };

  function changeFac(obj) {
    //event.preventDefault();
      //console.log(obj)
    const value  = obj.label;
    console.log(value);
    console.log(json);
    const jsonData = fetchData();
    var objectJson =Object.assign([],jsonData );
    console.log(objectJson);
    if(value!="Default")
    {
    var filteredJson = objectJson.filter(x=>x.faculty==value);
    console.log("filtered");
    console.log(filteredJson);
    setJson(filteredJson);
    }
    else{
      setJson(objectJson);
    }
  }

  function changeDomain(obj) {
    //event.preventDefault();
      console.log(obj)
    const value  = obj.label;
    console.log(value);
    console.log(json);
    const jsonData = fetchData();
    var objectJson =Object.assign([],jsonData );
    console.log(objectJson);
    if(value!="Default")
    {
      
    var filteredJson = objectJson.filter(x=>x.domain==value);
    console.log("filtered");
    console.log(filteredJson);
    setJson(filteredJson);

    }
    else{
      setJson(objectJson);
    }
  }
    
    // if (value === 'Users') {
    //   // ...
    // }
  //}

  const fetchData = () => {
    setJson([]);
    console.log(physics);
    var facArr = [
      { label: "Default", value: 1 }
    ];

    var domainArray = [
      { label: "Default", value: 1 }
    ];

    if(message.startsWith("phy"))
    {
      setJson(physics);
      var a =Object.assign([], physics);
      
      var i =2;
      a.forEach(function(x){
        facArr.push({
          label : x.faculty,
          value : i
        })
        domainArray.push({
          label : x.domain,
          value : i
        })
        i++;
      });
      const unique = [...new Map(facArr.map((m) => [m.label, m])).values()];
      const uniqueDomain = [...new Map(domainArray.map((m) => [m.label, m])).values()];
      setFac(unique);
      setDomain(uniqueDomain);
      return physics;

    }
    if(message.startsWith("chem"))
    {
      setJson(chemistry)
      var a =Object.assign([], chemistry);
      var i =2;
      a.forEach(function(x){
        facArr.push({
          label : x.faculty,
          value : i
        })
        domainArray.push({
          label : x.domain,
          value : i
        })
        i++;
      });
      const unique = [...new Map(facArr.map((m) => [m.label, m])).values()];
      const uniqueDomain = [...new Map(domainArray.map((m) => [m.label, m])).values()];
      setFac(unique);
      setDomain(uniqueDomain);
      return chemistry;
    }
    if(message.startsWith("com"))
    {
      setJson(computer)
      var a =Object.assign([], computer);
      var i =2;
      a.forEach(function(x){
        facArr.push({
          label : x.faculty,
          value : i
        })
        domainArray.push({
          label : x.domain,
          value : i
        })
        i++;
      });
      const unique = [...new Map(facArr.map((m) => [m.label, m])).values()];
      const uniqueDomain = [...new Map(domainArray.map((m) => [m.label, m])).values()];
      setFac(unique);
      setDomain(uniqueDomain);
      return computer;
    }
    if(message.startsWith("geo"))
    {
      setJson(geography)
      var a =Object.assign([], geography);
      var i =2;
      a.forEach(function(x){
        facArr.push({
          label : x.faculty,
          value : i
        })
        domainArray.push({
          label : x.domain,
          value : i
        })
        i++;
      });
      const unique = [...new Map(facArr.map((m) => [m.label, m])).values()];
      const uniqueDomain = [...new Map(domainArray.map((m) => [m.label, m])).values()];
      setFac(unique);
      setDomain(uniqueDomain);
      return geography;
    }
    if(message.startsWith("ind"))
    {
      setJson(india)
      var a =Object.assign([], india);
      a.forEach(function(x){
        facArr.push({
          label : x.faculty,
          value : i
        })
        domainArray.push({
          label : x.domain,
          value : i
        })
        i++;
      });
      const unique = [...new Map(facArr.map((m) => [m.label, m])).values()];
      const uniqueDomain = [...new Map(domainArray.map((m) => [m.label, m])).values()];
      setFac(unique);
      setDomain(uniqueDomain);
      return india;
    }
    if(message.startsWith("mat"))
    {
      setJson(maths)
      var a =Object.assign([], maths);
      a.forEach(function(x){
        facArr.push({
          label : x.faculty,
          value : i
        })
        domainArray.push({
          label : x.domain,
          value : i
        })
        i++;
      });
      const unique = [...new Map(facArr.map((m) => [m.label, m])).values()];
      const uniqueDomain = [...new Map(domainArray.map((m) => [m.label, m])).values()];
      setFac(unique);
      setDomain(uniqueDomain);
      return maths;
    }
   
    // setIsLoading(true)
    // fetch(url, {
    //   mode: 'cors',
    //   headers: {
    //     'Access-Control-Allow-Origin':'*'
    //   }
    // })
    //   .then(response => {
    //     setTimeout(() => {
          
    //     setIsLoading(false)
    //     }, 5000);
    //     //console.log(response.json());
    //     return response.json()
    //   })
    //   .then(data => {
    //     setIsLoading(false)
    //     console.log(data);
    //     setJson(data)
    //   })
  }


  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];

  useEffect(() => { document.body.style.backgroundColor = 'white' }, [])

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message);
    fetchData();
    console.log(message);
  };

  const faculties = [
    { label: "Default", value: 1 }
  ];

  //const faculties =()=>{

    
 // }

  

  return (
    <div className="App">
       <Navbar fixed='top'   bg="light" expand="sm">
       <Container fluid style={{backgroundColor:"pink"}}>
        <Navbar.Brand>
        {/* <a href="#">&#9776; React-Bootstrap */}
          <img src="https://makonissoft.com/images/Makonis/logo.png" style={{width:100, marginTop: -7}} />
          {/* </a> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control style={{width:"1100px"}}
              type="search"
              placeholder="Enter keywords for search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button id='btnSearch' onClick={handleClick} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {isLoading && <MagnifyingGlass
  type="Spinner Type"
  color="rgb color"
  height={500}
  width={100}
  timeout={10000}
/>}

const fac = this.faculties();

{ json.length > 0 && 
<div>
<div   style={{marginTop:"100px",marginLeft:"100px"}} className="container">
        <div  className="row">
          <div style={{color:"black",width:"150px"}} className="col-md-3"><label >
        Faculty: </label> </div>
          <div className="col-md-3">
          <Select options={fac} 
                   defaultValue ={fac[0]}
                   onChange={(option) => changeFac(option)}
                   //onChange={(e)=>changeFac(e)}
            />
              {/* <Select
        name="Faculty"
        options={message}
        //value={value}
        //onChange={setValue}
        getOptionLabel={(option) => message.faculty}
        getOptionValue={(option) => message.faculty}
      /> */}
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div   style={{marginTop:"30px",marginLeft:"100px"}} className="container">
        <div  className="row">
          <div style={{color:"black",width:"150px"}} className="col-md-3"><label >
        Domain/Category: </label> </div>
          <div className="col-md-3">
            <Select options={domain} 
                   defaultValue ={domain[0]}
                   onChange={(option) => changeDomain(option)}
                   
            />
          </div>
          <div style={{color:"black",width:"auto"}} className="col-md-3"><label >
        Search Internal/External Videos: </label> </div>
          <div className="col-md-3">
            <Select options={faculties} 
                   value ={faculties[0]}
                   
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
<div>
{/* <Card border="primary"  style={{marginTop:"100px",marginLeft:"10px",width:"100px",height:"500px"}} ></Card> */}
</div>
<div>
<Card border="secondary"  style={{marginTop:"50px",marginLeft:"100px",borderWidth:"5px"}} >
<div >
         {json.length > 0 && 
          json.map(video => (
    <CardGroup style={{marginLeft:"10px",maxHeight:"auto",marginBottom:"50px",marginTop:"20px",marginRight:"10px" }} >
      
<Card border="secondary" style={{height:"250px",width:"250px"}}  >
  
  <iframe style={{height:"100%"}}   src={video.video_url}  allow="autoplay"></iframe> 
  </Card>
   <Card border="secondary" style={{height:"250px",width:"250px"}}>
    <Col style={{textAlign:"left",paddingLeft:"20px"}}>
    <tr>
      <td style={{fontWeight:"bold",fontSize:"20px"}}>
         {video.title}
      </td>
    </tr>
    <tr>
      <td style={{color:"steelblue"}}>
        {video.faculty}
      </td>
    </tr>
    <tr >
      <td>
         {video.duration}
      </td>
    </tr>
    <tr  >
      <td>
        <p title={video.transcript}>
         {video.transcript}</p>
      </td>
    </tr>
    <tr>
      <td style={{height:"400px",width:"500px"}}>
      <OverlayTrigger
          trigger="click"
          key="left"
          rootClose
          placement="left"
          overlay={
            <Popover id={`popover-positioned-left`}>
              <Popover.Header as="h3">Transcript</Popover.Header>
              <Popover.Body style={{height:"400px",width:"280px", overflow:"hidden"}}>
                {/* <strong>Holy guacamole!</strong> Check this info. */}
                <div style={{overflowY:"scroll",height:"400px"}}>{video.transcript}</div>
              </Popover.Body>
            </Popover>
          }
        >
          <Button  style={{marginLeft:"250px"}} variant="secondary">Click here to view transcript</Button>
        </OverlayTrigger>
      </td>
    </tr>
    
    </Col>
   </Card>
 </CardGroup> 
          ))}; 
         </div>
</Card>

</div>

</div>

}
   
        </div> 
  );
}

export default App;

