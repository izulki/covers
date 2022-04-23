import { Card, Button, Image } from 'react-bootstrap'

export default function leagueCard(props) {
    return (
        <Card style={{ height: "100%"}}>
            <Card.Header as="h5" style={{ backgroundColor: "#034046", color: "white" }}> {props.league} </Card.Header>
            <Card.Body style={{ backgroundColor: "#F8F8F8" }}>
                <div style={{display: "flex", height:"100%", flexDirection: "column", justifyContent: "space-between"}}>

                    <div style={{display:"flex", flexDirection: "column"}}>
                        {props.teams.map(team => {
                            return (
                                <div style={{paddingBottom: 20}}>
                                    <Image height={50} width={50} thumbnail roundedCircle src={require('../assets/' + team.asset)} />
                                    <Card.Title style={{ color: "#034046", fontSize: "0.85rem", marginTop: 5 }}>{team.name}</Card.Title>
                                </div>
                            )
                        })}
                    </div>

                    <div style={{display:"flex", flexDirection: "column"}}>
                        <Button style={{ backgroundColor: "#FD4F00", borderWidth: 0 }} variant="primary">Get live {props.league} odds</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}