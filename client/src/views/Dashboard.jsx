import React, { useEffect, useState } from 'react';
/* import axios from 'axios'; */
import { Link } from "react-router-dom";
import PirateServices from '../services/PirateServices';
import { Button } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const { id } = useParams()
    const [pirates, setPirates] = useState([]);
    const pirateService = new PirateServices;
    const history = useHistory();

    const getAllPirates = async () => {
        const pirates = await pirateService.getAllPirates();
        setPirates(pirates);
    }


    const deletePirate = async (id) => {
        try {
            const deletePirateInDB = await pirateService.deletePirate(id);
            deletePirateInDB && history.push('/Dashboard');
       
            //getPirateFromService();
            /*  await pirateService.deletePirate(id);
             history.push('/') */
             /* getAllPiratesFromService(); */
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getAllPirates();
    }, []);

    return (
        <div>
            <div className="pirates-container">

                <div className="header_pirates">
                    <div className='titulo_header'>
                        <h1>Pirate Crew</h1>
                    </div>

                    <div className="boton_header">
                        <Link to="/new">
                            <button type="button" class="btn btn-primary">Add Pirate</button>
                        </Link>
                    </div>
                </div>
                <div className="main">
                    <ul>
                        {
                            pirates.length > 0 ? (
                                pirates.map((pirate) => (
                                    
                                    <li key={pirate._id} className="card-5">
                                        <h3>{pirate.name}</h3>
                                        <Link to={`/details/${pirate._id}`}>
                                            <Button variant="dark">View Pirate</Button>
                                        </Link>    
                                        
                                        <Button variant="info" onClick={ () => deletePirate(pirate._id) }>Walk the Plank</Button>
                                            
                                        {/* <Link to={`/new/${pirate._id}`}>
                                            <Button variant="dark">Editar</Button>
                                        </Link> */}
                                     </li>
                                        
                                    ))
                            ) : 'No ha creado ningún tweet'
                        }
                    </ul>
                </div>

            </div>
        </div>
    )

}

export default Dashboard;