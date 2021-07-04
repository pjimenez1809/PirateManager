import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import PirateServices from '../services/PirateServices';
/* import moment from 'moment'; */
/* import Navigation from '../components/Nav' */


const NewPirate = () => {
    //const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams();
    const history = useHistory()
    const pirateService = new PirateServices();
    const [piratesForm, setPiratesForm] = useState({
        name: '',
        crew_position: '',
        image_url: '',
        pirate_phrase: '',
        treasures: 0,
        peg_leg: false,
        eye_patch: false,
        hook_hand: false
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        //console.log('llegué')
        if (id) {
            pirateService.updatePirates(id, piratesForm);
            history.push("/Dashboard");
        } else {
            axios.post('http://localhost:8000/api/pirates/new', piratesForm)
                .then(() => history.push("/Dashboard"))
                /* .catch(err => console.log(piratesForm)) */
                .catch(err => alert(err))
        }
    }

    return (
       /*  <div className="plan-header"> */
        <div>
            {/* <Navigation/> */}
            {/*    <h3>Planifica tu viaje</h3> */}
            {/*  <div className="plan-form-container"> */}
            <div className="pirate-form-container">
                
                <div className="header-input">
                    <h2>Add Pirate</h2>
                </div>

                <Form onSubmit={onSubmitHandler}>
                    
                    <div className="left-input">

                        <Form.Row>
                            <Form.Group controlId="exampleForm.ControlTextarea3">
                                <Form.Label>Pirate Name</Form.Label>
                                <Form.Control required name="name" type="text" value={piratesForm.name} onChange={(e) => setPiratesForm({ ...piratesForm, [e.target.name]: e.target.value })} />
                            </Form.Group>
                                
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>Crew Position</Form.Label>
                                <Form.Control required name="crew_position" type="text" value={piratesForm.crew_position} custom onChange={(e) => setPiratesForm({ ...piratesForm, [e.target.name]: e.target.value })} /> 
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group controlId="exampleForm.ControlTextarea3">
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control required name="image_url" type="text" value={piratesForm.image_url} onChange={(e) => setPiratesForm({ ...piratesForm, [e.target.name]: e.target.value })} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group controlId="exampleForm.ControlTextarea3">
                                <Form.Label>Treasures</Form.Label>
                                <Form.Control required name="treasures" type="text" value={piratesForm.treasures} onChange={(e) => setPiratesForm({ ...piratesForm, [e.target.name]: e.target.value })} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea3">
                                <Form.Label>Pirate Phrase</Form.Label>
                                <Form.Control required name="pirate_phrase" type="text" value={piratesForm.pirate_phrase} onChange={(e) => setPiratesForm({ ...piratesForm, [e.target.name]: e.target.value })} />
                            </Form.Group>
                        </Form.Row>    
                    </div>
        
                    <div className="right-input">
                        
                        <Form.Row>
                            <Form.Group controlId="exampleForm.ControlTextarea3">
                                <Form.Label>Peg Leg</Form.Label>
                            {/*  <Form.Control name="peg_leg" type="text" value={piratesForm.peg_leg} onChange={(e) => setPiratesForm({ ...piratesForm, [e.target.name]: e.target.value })} /> */}
                                <Form.Control required name="peg_leg" type="text" value="true"  onChange={(e) => setPiratesForm({ ...piratesForm, [e.target.name]: e.target.value })} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea3">
                                <Form.Label>Eye patch</Form.Label>
                                <Form.Control required name="eye_patch" type="text" value="true" onChange={(e) => setPiratesForm({ ...piratesForm, [e.target.name]: e.target.value })} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea3">
                                <Form.Label>Hook Hand</Form.Label>
                                <Form.Control required name="hook_hand" type="text" value="true" onChange={(e) => setPiratesForm({ ...piratesForm, [e.target.name]: e.target.value })} />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit">
                            Add Pirate
                        </Button>
                    </div>    
                </Form>
            </div>
        </div>
    )
}

export default NewPirate;