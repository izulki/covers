import React from 'react'
import Card from '../src/components/card'
import data from '../src/data/teams.ts'
import { Button, Container, Row, Col, Dropdown } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [sportSelection, setSelection] = React.useState("All Sports");
  const [teams, setTeams] = React.useState(new Map())

  function filterBySport(sportSelection) {
    setSelection(sportSelection)
    if (sportSelection == "All Sports") {
      renderCards(data)
    }
    else {
      let tempTeams = data.filter(team => team.sport == sportSelection)
      renderCards(tempTeams)
    }
  }

  function renderCards(teams) {
    let filterLeagues = new Map();
    for (let i = 0; i < teams.length; i++) {
      let leagueTeams = filterLeagues.get(teams[i].league) // returns teams in league key (Array of objects)
      if (leagueTeams) filterLeagues.set(teams[i].league, [...leagueTeams, teams[i]]) // set league key with array of objects + current team[i]
      else filterLeagues.set(teams[i].league, [teams[i]]) // set league key with an array of object
    }
    setTeams(filterLeagues)
  }

  React.useEffect(() => {
    filterBySport("All Sports")
  }, [])


  return (
    <div className="App">
      <style type="text/css">
        {`
          .btn-active {
            margin: 5px;
            background-color: #034046;
            color: white;
            border-width: 2px;
            border-color: #034046;
          }
          .btn-inactive {
            margin: 5px;
            background-color: white;
            color: #034046;
            border-width: 2px;
            border-color: #034046;
          }
          .btn-active:hover {
            color: white;
          }
          .btn-s {
            margin: 0.5rem;
            font-size: 0.8rem;
          }
          `}
      </style>
      <div className='dropdown'>
        <Dropdown>
          <Dropdown.Toggle style={{backgroundColor: "#034046", borderWidth: 0, marginTop: 10, marginBottom: 10}} variant="success" id="dropdown-basic">
            {sportSelection}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>filterBySport("All Sports")}>All Sports</Dropdown.Item>
            <Dropdown.Item onClick={()=>filterBySport("Hockey")}>Hockey</Dropdown.Item>
            <Dropdown.Item onClick={()=>filterBySport("Football")}>Football</Dropdown.Item>
            <Dropdown.Item onClick={()=>filterBySport("Basketball")}>Basketball</Dropdown.Item>
            <Dropdown.Item onClick={()=>filterBySport("Baseball")}>Baseball</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='tabs'>
        <Container style={{ paddingBottom: 15 }}>
          <Row xs={2} md={4} lg={10}>
            <Button style={{ width: 100 }} variant={sportSelection === "All Sports" ? "active" : "inactive"} onClick={() => filterBySport("All Sports")}>All Sports</Button>
            <Button style={{ width: 100 }} variant={sportSelection === "Hockey" ? "active" : "inactive"} onClick={() => filterBySport("Hockey")}>Hockey</Button>
            <Button style={{ width: 100 }} variant={sportSelection === "Football" ? "active" : "inactive"} onClick={() => filterBySport("Football")}>Football</Button>
            <Button style={{ width: 100 }} variant={sportSelection === "Basketball" ? "active" : "inactive"} onClick={() => filterBySport("Basketball")}>Basketball</Button>
            <Button style={{ width: 100 }} variant={sportSelection === "Baseball" ? "active" : "inactive"} onClick={() => filterBySport("Baseball")}>Baseball</Button>
          </Row>
        </Container>
      </div>
      <Container>
        <Row xs={2} md={4} lg={5}>
          {
            Array.from(teams.entries()).map((entry) => {
              const [key, value] = entry;
              return (<Col className="mb-3"><Card key={key} league={key} teams={value}/></Col>)
            })
          }
        </Row>
      </Container>
    </div>
  );
}


export default App;
