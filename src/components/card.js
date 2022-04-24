import { Card, Button, Image } from 'react-bootstrap'

export default function leagueCard(props) {
    return (
        <>
        <style type="text/css">
        {`
          .card-header {
            background-color: #034046;
            color: white;
            font-weight: 600;
          }
          .card-body {
            background-color: #F8F8F8;
          }
          .card-content-container {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-between;
          }
          .team-title {
              color: #034046;
              font-size: 0.85rem;
              font-weight: 600;
          }
          .section-container {
              display: flex; 
              flex-direction: column;
          }
        .odds-button {
            font-weight: 600;
            background-color: #FD4F00;
            border-width: 0;
        }
        .odds-button:hover {
            background-color: #FD4F00;
        }
        .odds-button:focus {
            background-color: #FD4F00;
        }
          `}
        </style>
        <Card style={{ height: "100%"}}>
            {/* <Card.Header as="h5" style={{ backgroundColor: "#034046", color: "white", fontWeight: "bold" }}> {props.league} </Card.Header> */}
            <Card.Header as="h5" className="card-header"> {props.league} </Card.Header>

            <Card.Body className="card-body">
                <div className="card-content-container">
                    <div className="section-container">
                        {props.teams.map(team => {
                            return (
                                <div className="pb-3">
                                    <Image height={50} width={50} thumbnail roundedCircle src={require('../assets/' + team.asset)} />
                                    <Card.Title className={["team-title", "mt-1"]}>{team.name}</Card.Title>
                                </div>
                            )
                        })}
                    </div>

                    <div className="section-container">
                        <Button className="odds-button" variant="primary">Get live {props.league} odds</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}