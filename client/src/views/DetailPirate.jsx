import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import PirateServices from '../services/PirateServices';
import { useHistory } from "react-router-dom";

const DetailPirate = () => {

    const { id } = useParams()
    const pirateService = new PirateServices();
    const [pirate, setPirate] = useState({});
    const history = useHistory();

    const getPirateFromService = async () => {
        try {
            const pirate = await pirateService.getOneSinglePirate(id);
            setPirate(pirate);
        } catch (err) {
            return err;
        }
    }    

    const deletePirate = async () => {
        try {
            const deletPirateInDB = await pirateService.deletePirate(id);
            return deletPirateInDB.data.deletePirate;  //   pirateDeleted;
            } catch (err) {
            return err;
        }
    }

    useEffect(() => {
        getPirateFromService();
    }, [])

    return (
        <div>
            {
                <div className="detail-container">
                    <div className="header-detail">
                        <h2>Deep Sea Davi</h2>
                    </div>
                    
                    pirate.name ? <div className="pirate-detail">
                            <h3>Name: {pirate.name}</h3>
                            <h3>Position: {pirate.crew_position}</h3>
                            <h3>Treasure {pirate.treasures}</h3>
                            <p>Peg Leg: {String(pirate.peg_leg)}</p>
                            <p>Eye Patch: {String(pirate.eye_patch)}</p>
                            <p>Hook Hand: {String(pirate.hook_hand)}</p>

                            <Button variant="link" onClick={() =>history.push("/Dashboard")}>Back</Button>
                             
                    </div>
                </div>            
            }
        </div>
    )

}

export default DetailPirate;