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
import { Navbar } from 'react-bootstrap';


function App() {

  const [nycschools, setNYCSchools] = useState<NYCSchool[] | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<NYCSchool | null>(null);
  const [initView, setInitView] = useState<boolean>(true);
  const [errorFetching, setErrorFetching] = useState<boolean>(false);

    useEffect(() => {
        getSchools().then((data) => { 
            setNYCSchools(data as NYCSchool[]);
        }).catch(() => {
            setErrorFetching(true);
        })  
    }, []);


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary nyc-schools-navbar-brand" >
        <Navbar.Brand>New York City Schools</Navbar.Brand>
      </Navbar>
      <Container fluid >
          <SchoolsErrorBoundary>        
            <Row className={"p-2"} >
              <Col xs={4}>
                <NYCShools nycschools={nycschools} setSelectedSchool={setSelectedSchool} setInitView={setInitView} initView={initView} errorFetching={errorFetching}/>
              </Col>
              <Col xs={5}>
                <Row>
                  <Col>
                    <SchoolDetails selectedSchool={selectedSchool}  key={selectedSchool?.dbn} initView={initView}/>
                  </Col>
                </Row>   
                <Row>
                  <Col className="gy-2">
                    <SATScores selectedSchool={selectedSchool} key={selectedSchool?.dbn} initView={initView}/>
                  </Col>
                </Row>  
              </Col>
            </Row>
          </SchoolsErrorBoundary>
      </Container>
    </>
  )
}

export default App
