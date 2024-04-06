/**
 * The main component of the NYC Schools App.
 * Renders the layout of the application, including the header, school list, school details, and SAT scores.
 * Manages the state of the selected school and handles fetching the list of NYC schools from the API.
 */
import './App.css'
import NYCShools from './components/NYCShools'
import SchoolDetails from './components/SchoolDetails'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { NYCSchool } from './types';
import { getSchools } from './api/nycschools';
import SATScores from './components/SATScores';
import SchoolsErrorBoundary from './components/SchoolsErrorBoundary';


function App() {

  const [nycschools, setNYCSchools] = useState<NYCSchool[] | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<NYCSchool | null>(null);
  const [initView, setInitView] = useState<boolean>(true);
  const [errorFetching, setErrorFetching] = useState<boolean>(false);

    useEffect(() => {
        getSchools().then((data) => { 
            setNYCSchools(data);
        }).catch(() => {
            setErrorFetching(true);
        })  
    }, []);


  return (
    <Container fluid>
      <SchoolsErrorBoundary>
        <Row className={"p-2"}>
          <Col><h1>New York City Schools</h1></Col>
        </Row>
        <Row className={"p-2"}>
          <Col xs={4}>
            <NYCShools nycschools={nycschools} setSelectedSchool={setSelectedSchool} setInitView={setInitView} initView={initView} errorFetching={errorFetching}/>
          </Col>
          <Col xs={5}>
            <SchoolDetails selectedSchool={selectedSchool} key={selectedSchool?.dbn} initView={initView}/>     
          </Col>
          <Col>
            <SATScores selectedSchool={selectedSchool} key={selectedSchool?.dbn} initView={initView}/>
          </Col>
        </Row>
      </SchoolsErrorBoundary>
    </Container>
  )
}

export default App
