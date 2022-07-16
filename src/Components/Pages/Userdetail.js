import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';

export default function Userdetail() {

    const navigate = useNavigate();
    const location = useLocation()
    const [APIData, setAPIData] = useState([]);
    const [Name, setName] = useState([]);
    const axios = require('axios').default;

    useEffect(() => {

        axios.get('https://62bec0d1be8ba3a10d5abcdf.mockapi.io/fakeData')
            .then(function (response) {

                setAPIData(response.data)
                // handle success
                console.log(response);
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
            result.json().then((response) => {


            })
        })
    }
    const submit = () => {

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes')
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });



        return (



            <>

                <div>
                    <div className='container-fluid mt-5'>
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
                                {APIData.map((Item) => <Table.Row>
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
                                            <button onClick={() => (Item.id)}> Edit</button>
                                        </Table.Cell>
                                    
                                    <Table.Cell>
                                        <button onClick={() => OnDelete(Item.id)} >Delete</button>

                                    </Table.Cell>

                                </Table.Row>)
                                }

                            </Table.Body>
                        </Table>

                        {/* 
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">id</th>
                                <th scope="col">Name</th>
                                <th scope="col">address</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Gender</th>
                                <th scope="col">City</th>
                                <th scope="col">state</th>
                                <th scope="col">Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>

                        </tbody>
                    </table> */}
                    </div>
                </div>
            </>
        )
    }
}
