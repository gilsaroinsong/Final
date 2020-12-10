import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {Badge, Button, Card} from 'react-bootstrap'

const UserDetail = ({apiData}) => {
    const {id} = useParams()
    const detail = apiData[id];

    let details = [];

    details.push(["Negara", detail.country])
    details.push(["Laman", detail.web_pages[0]])
    details.push(["Kode Negara", detail.alpha_two_code])
    details.push(["Domain", detail.domains[0]])

    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", width: "100%", height: window.innerHeight-55}}>
                <div style={{width: "100%", flex: "1 0 1px"}}></div>
                <div style={{width: "100%", flex: "1.5 0 1px", margin: '3rem'}}>
                    <div style={{display: 'flex', flexDirection: "column", width: "100%", height: "100%"}}>
                        <div style={{flex: '0 0 1rem', display: "flex"}}>
                            <Button style={{margin: '0.37rem 0.5rem 0.37rem 0.5rem',}}variant="primary" as={Link} to={`/`}>Back to Home</Button>
                        </div>
                        <div style={{flex: '1 0 1rem', padding: '0.37rem'}}>
                            <Card style={{height: '100%'}}>
                                <Card.Header>Rincian Universitas</Card.Header>
                                <Card.Body>
                                    <div style={{display: "flex", width: "100%", height: "100%"}}>
                                        <div style={{width: "100%", flex: "1 0 1rem", padding: "1rem", display: "flex", flexDirection: "column"}}>
                                            <div style={{height: "auto", marginBottom: "3rem", textAlign: "center"}}>
                                                <h3 style={{fontSize: "2.5em"}}>{detail.name}</h3>
                                            </div>
                                            {
                                                details.map((el, idx) => 
                                                    el[1] !== null ?
                                                    <div style={{display: "flex", marginBottom: "2rem"}}>
                                                        <div style={{width: "100%", textAlign: "center"}}>
                                                            <Badge pill variant="primary" style={{fontSize: '1.5em'}}>
                                                                {el[0]}
                                                            </Badge>
                                                        </div>
                                                        <div style={{width: "100%", textAlign: "center", margin: "auto", fontSize: '1.5em'}}>
                                                            <p>{el[1]}</p>
                                                        </div>
                                                    </div>
                                                    :
                                                    null
                                                )
                                            }
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div style={{width: "100%", flex: "1 0 1px"}}></div>
            </div> 
        </div>
    )
}

export default UserDetail
