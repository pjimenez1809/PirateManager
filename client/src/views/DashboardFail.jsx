import React, { useEffect, useState } from 'react';
import PirateServices from '../services/PirateServices';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import '../App.scss';


const Dashboard = () => {
    const [pirates, setPirates] = useState([]);
    const pirateService = new PirateServices();
    const history = useHistory();
    

    const StatePirate = async (id, pirate) => {
        try {
            const updatedPirateInService = await pirateService.updatePirate(id, { ...pirate, status:'activo' })
            getPiratesFromService();
            return updatedPirateInService;
        } catch (error) {
            console.error(error);
        }
    }

    const deletePirate = async (id) => {
        try {
            const deletePirateInDB = await pirateService.deletePirate(id);
            deletePirateInDB && history.push('/');
            getPiratesFromService();
            
        } catch (err) {
            console.log(err);
        }
    }

    const getPiratesFromService = async () => {
        try {
            const piratesList = await pirateService.getAllPirates();
            setPirates(piratesList);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPiratesFromService()
    }, [getPiratesFromService])  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="form-container">
                <div className="Contain1">
                    <h3>Backlog</h3>
                    <Table striped bordered hover variant="dark">
                        <tbody>
                            {
                                pirates.length > 0 ? pirates.filter(prop => {
                                return prop.status==='ingresado'}).map(pirate => ( 
                                <tr key={pirate._id}>
                                    <td>{pirate.name}</td>
                                    <td>{moment(pirate.date_due).format("DD/MM/YYYY")}</td>
                                    <td>
                                        <Button variant="info" onClick={() => StatePirate(pirate._id, pirate)} >Start Project</Button>
                                    </td>
                                    <td>
                                        <Button variant="info" onClick={() => deletePirate(pirate._id)} >Walk the Planck</Button>
                                    </td>
                                </tr>
                                )) : 'No Pirates'
                            }

                        </tbody>
                    </Table>
                </div> 
            </div>
        </div>
    )
}

export default Dashboard;
