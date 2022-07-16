import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import axios from 'axios';
const Edituser = (props) => {
    const id = props.id;
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [Mobile, setMobile] = useState("");
    const [City, setCity] = useState("");
    const [Male, setMale] = useState("");
    const [Female, setFemale] = useState("");
    const [Gender, setGender] = useState("");
    const [Other, setOther] = useState("");
    const [users, setUsers] = useState();
    const [modal, setModal] = useState(false);

    const  EditUserDetails=()=> {
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

     useEffect(()=>{
        if(id)
        EditUserDetails();
     },[id])
    return (
        <div>
            <button type='button' onClick={()=> setModal(true)}>Edit</button>
            <Modal
                size='lg'
                isOpen={modal}
                toggle={() => setModal(!modal)}
            >
                <ModalHeader toggle={() => setModal(!modal)} >
                    Edituser
                </ModalHeader>
                <ModalBody>
                    <form>
                        <label>Name</label>
                        <input type='text' value={Name} onChange={(e) => { users.Name = e.target.value; setName(e.target.value) }}></input> <br /> <br />
                        <label>Email</label>
                        <input type='text' value={Email} onChange={(e) => setEmail(e.target.value)}></input> <br /> <br />
                        <label>Address</label>
                        <input type='text' value={Address} onChange={(e) => setAddress(e.target.value)}></input> <br /> <br />
                        <label>Mobile</label>
                        <input type='text' value={Mobile} onChange={(e) => setMobile(e.target.value)}></input> <br /> <br />
                        <label>City</label>
                        <input type='text' value={City} onChange={(e) => setCity(e.target.value)}></input> <br /> <br />
                        <label>Gender</label>
                        <input type='text' value={Gender} onChange={(e) => setCity(e.target.value)}></input> <br /> <br />
                    </form>
                    <button onClick={Updateuser} >update</button>
                    <button onClick={()=>setModal(false)} >cancel</button>
                </ModalBody>
            </Modal>
            <button className='btn mt-3' onClick={() => setModal(true)}></button>
        </div>
    )
}

export default Edituser
