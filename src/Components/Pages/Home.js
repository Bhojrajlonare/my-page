import React, { useEffect, useState } from 'react';
import Mypic3 from "../Images/Mypic3.jpg"
import { Link, NavLink } from 'react-router-dom'
import Sidebar from '../Navbar/Sidebar'
import axios from 'axios';
import { Table } from 'semantic-ui-react'
import { FaUserEdit } from "react-icons/fa";
import Edituser from './Edituser';



const Home = () => {
    const [searchInput,setSearchInput] = useState();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [Mobile, setMobile] = useState("");
    const [City, setCity] = useState("");
    const [Male, setMale] = useState("");
    const [Female, setFemale] = useState("");
    const [Other, setOther] = useState("");
    const [Item, setItem] = useState();
    const [users, setUsers] = useState("")
    const [APIData, setAPIData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [isOpen, setIsOpen] = useState();
    const [editData, setEditData] = useState();

    useEffect(() => {

        axios.get('https://62bec0d1be8ba3a10d5abcdf.mockapi.io/fakeData')
            .then(function (response) {

                setAPIData(response.data)
                setFilteredResults(response.data)


                // handle success
                console.log(response.data)
                setName(response.data.Name)
                setEmail(response.data.Email)
                setAddress(response.data.Address)
                setMobile(response.data.Mobile)
                setCity(response.data.City)
                setMale(response.data.Male)
                setFemale(response.data.Female)
                setOther(response.data.Other)
                setUsers(response.data.users)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])
    function OnDelete(id) {
        fetch('https://62bec0d1be8ba3a10d5abcdf.mockapi.io/fakeData/' + id, {
            method: "DELETE",


        }).then((result) => {
            alert("are you sure to delete!");
            result.json().then((response) => {


            })
        })
    }
    function selectUser(id) {
        console.log(id)
        let Item = APIData[id]
        setName(Item.Name)
        setEmail(Item.Email)
        setAddress(Item.Address)
        setMobile(Item.Mobile)
        setCity(Item.City)
        setMale(Item.Male)
        setFemale(Item.Female)
        setOther(Item.Other)
        setUsers(Item.users)
    }

    // function SearchResultIthEmail(emailid) {
    //     axios
    //         .get(`https://62bec0d1be8ba3a10d5abcdf.mockapi.io/fakeData?Email=` + emailid, {
    //         })
    //         .then((response) => {
    //             console.log(response.data);
    //             setAPIData(response.data);
    //         });
    // }

     function EditUserDetails(id) {
        axios
            .get(`https://62bec0d1be8ba3a10d5abcdf.mockapi.io/fakeData?id=` + id, {
             })
            .then((response) => {
                debugger
                 console.log(response.data);
                 setName(response.data[0].Name)
                 setEmail(response.data[0].Email)
                 setAddress(response.data[0].Address)
                 setMobile(response.data[0].Mobile)
                 setCity(response.data[0].City)
                 setMale(response.data[0].Male)
                 setFemale(response.data[0].Female)
                 setOther(response.data[0].Other)
                 setUsers(response.data[0])
                 

             });
     }
    const Updateuser = async () => {
        let Item = {
        id:users.id,Name: users.Name, Email: users.Email, Address: users.Address, Mobile: users.Mobile, City: users.City, Male: users.Male, Female: users.Female, Other: users.Other,
        }
         const result = await axios.put("https://62bec0d1be8ba3a10d5abcdf.mockapi.io/fakeData/" + users.id, Item);

         if (result) {

        }

        
     }
    const searchItems = () => {
        debugger
        
        if (searchInput !== '') {
            const filteredData = APIData.filter((Item) => {
                debugger
                return Item.Name.toLowerCase().includes(searchInput.toLowerCase()) ||
                Item.Address.toLowerCase().includes(searchInput.toLowerCase()) ||
                Item.City.toLowerCase().includes(searchInput.toLowerCase()) ||
                Item.Email.toLowerCase().includes(searchInput.toLowerCase()) ||
                Item.Male.toLowerCase().includes(searchInput.toLowerCase())
                


            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }
    const toggalepopup =()=>{
       setIsOpen(!isOpen)
    }


    return (

        <div >
            <h2 style={{ backgroundColor: "lightblue", height: "70px", color: "black" }}>WelCome To Home</h2>
            <h3 style={{ left: "950px", top: "13px", fontSize: "25px", position: "fixed" }}>welcome:- admin</h3>
            <div style={{ left: "1250px", top: "5px", fontSize: "35px", position: "fixed" }}>
                <FaUserEdit />
            </div>

            <div>

                <div style={{ left: "350px", top: "130px", position: "fixed" }}>
                    <div className='container'>
                <input type='text' placeholder='search...' onChange={(e)=> setSearchInput(e.target.value)} />
                <button type='submit'  onClick={(e) => searchItems()}>search</button>
                </div>
 
                </div>

                <Sidebar />


            </div>
            <div style={{ backgroundColor: "lightblue", left: "300px", top: "70px", position: "fixed" }}>


                <span style={{ margin: "20px" }}>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                </span>
                <span style={{ margin: "20px" }}>
                    <NavLink to='/events' activeStyle>
                        Events
                    </NavLink>
                </span>
                <span style={{ margin: "20px" }}>
                    <NavLink to='/brandig' activeStyle>
                        Branding
                    </NavLink>
                </span>



            </div>


            <div className='container' style={{ fontSize: "12px", position: "fixed", top: "200px", left: "200px",width:"50px" }}>
                <Table singleLine className="table table-striped table-bordered">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>id</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell> address</Table.HeaderCell>
                            <Table.HeaderCell>Mobile</Table.HeaderCell>
                            <Table.HeaderCell>Gender</Table.HeaderCell>
                            <Table.HeaderCell>City</Table.HeaderCell>
                            <Table.HeaderCell>state</Table.HeaderCell>
                            <Table.HeaderCell>Country</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {filteredResults.map((Item) => <Table.Row>
                            <Table.Cell>{Item.id}</Table.Cell>
                            <Table.Cell>{Item.Name}</Table.Cell>
                            <Table.Cell>{Item.Email}</Table.Cell>
                            <Table.Cell>{Item.Address}</Table.Cell>
                            <Table.Cell>{Item.Mobile}</Table.Cell>
                            <Table.Cell>{Item.Male}</Table.Cell>
                            <Table.Cell>{Item.Female}</Table.Cell>
                            <Table.Cell>{Item.City}</Table.Cell>
                            <Table.Cell>{Item.State}</Table.Cell>
                            <Table.Cell>{Item.Country}</Table.Cell>
                            <Table.Cell>{Item.Checkbox}</Table.Cell>


                            <Table.Cell>
                       <Edituser data={Item} id ={Item.id}/>

                                {/* <button onClick={()=>{setEditData(Item); toggalepopup()}} >Edit</button> */}
                            </Table.Cell>


                            <Table.Cell>
                                <button onClick={() => OnDelete(Item.id)}> delete</button>

                            </Table.Cell>


                        </Table.Row>)
                        }

                    </Table.Body>
                </Table>
                {/* <div className='popup-box'>
        <div className='box'>

                    <input type='text' value={Name} onChange={(e) =>{users.Name=e.target.value; setName(e.target.value)}}></input> <br /> <br />
                    <input type='text' value={Email} onChange={(e) => setEmail(e.target.value)}></input> <br /> <br />
                    <input type='text' value={Address} onChange={(e) => setAddress(e.target.value)}></input> <br /> <br />
                    <input type='text' value={Mobile} onChange={(e) => setMobile(e.target.value)}></input> <br /> <br />
                    <input type='text' value={City} onChange={(e) => setCity(e.target.value)}></input> <br /> <br />
                    <input type='text' value={Male} onChange={(e) => setMale(e.target.value)}></input> <br /> <br />
                    <input type='text' value={Female} onChange={(e) => setFemale(e.target.value)}></input> <br /> <br />
                    <input type='text' value={Other} onChange={(e) => setOther(e.target.value)}></input> <br /> <br />
                    <button style={{ top: "600px", left: "400px", position: "fixed" }} onClick={Updateuser}>update</button>
                    
                </div>
                </div> */}
            </div>
        </div>


    )
}


export default Home
