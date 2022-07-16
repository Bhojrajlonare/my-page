import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHref, useNavigate } from 'react-router-dom';

export default function Registration() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Address, setAddress] = useState('');
    const [Male, setMale] = useState('');
    const [Female, setFemale] = useState('');
    const [Other, setOther] = useState('');
    const [City, setCity] = useState('');
    const [state, setState] = useState('');
    const [Country, setCountry] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const history = useNavigate();

    const onsubmit = () => {
        history("/home")

    }
    const postData = () => {
        axios.post(`https://62bec0d1be8ba3a10d5abcdf.mockapi.io/fakeData`, {
            Name,
            Email,
            Mobile,
            Address,
            Male,
            Female,
            Other,
            City,
            state,
            Country,
            checkbox
        })

    }
    

    return (
        <div>
            <h2 >Registration form</h2>
            <Form className="create-form">
                <Form.Field>
                    <label> Name</label>
                    <input placeholder=' Name' onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Email </label>
                    <input placeholder='Email ' onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Mobile </label>
                    <input placeholder='Mobile ' onChange={(e) => setMobile(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Address </label>
                    <input placeholder='Address ' onChange={(e) => setAddress(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <input type="radio" value="Male" name="gender" onChange={(e) => setMale(e.target.value)} /> Male
                    <input type="radio" value="Female" name="gender" onChange={(e) => setFemale(e.target.value)} /> Female
                    <input type="radio" value="Other" name="gender" onChange={(e) => setOther(e.target.value)} /> Other
                </Form.Field>
                <Form.Field>
                    <label>city</label>
                    <select id="city" name="city" onChange={(e) => setCity(e.target.value)}>
                        <option value="betul">Betul</option>
                        <option value="bhopal">Bhopal</option>
                        <option value="indore">Indore</option>
                        <option value="pune">Pune</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>state</label>
                    <select id="state" name="state" onChange={(e) => setState(e.target.value)}>
                        <option value="madhya pradesh">Madhya Pradesh</option>
                        <option value="maharastra">Maharastra</option>
                        <option value="telangana">Telangana</option>
                        <option value="gujrat">Gujrat</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Country</label>
                    <select id="country" name="Country" onChange={(e) => setCountry(e.target.value)}>
                        <option value="india">India</option>
                        <option value="america">America</option>
                        <option value="russia">Russia</option>
                        <option value="japan">Japan</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>image</label>
                    <input type='file'></input>
                </Form.Field>

                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button onClick={postData} type='submit'>Save</Button>
                <Button type='button'
                onClick={() =>history("/registration")}
                >cancel</Button>
                <button type="button"
                            onClick={() =>history ("/login")}
                        > Login</button>
            </Form>
        </div>
    )
}