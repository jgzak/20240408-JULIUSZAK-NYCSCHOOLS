import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { InputProps, NYCSchoolDetails } from '../types';
import { getSchoolDetails } from '../api/nycschools';
import Pair from './Pair';
import { Spinner } from 'react-bootstrap';

// this array is used to iterate over the school details and display them in the component, it can be extended to include more details. To see all the details available check the NYCSchoolDetails type in types.ts
const details: [string, keyof NYCSchoolDetails][] = [["Borough: ", "borough"], ["Location: ", "location"], ["Phone: ", "phone_number"] ]


/**
 * Renders the details of a selected school.
 *
 * @component
 * @param {InputProps} props - The input props containing the selected school and initialization view.
 * @returns {JSX.Element} The JSX element representing the school details card.
 */

const SchoolDetails: React.FC<InputProps> = ({selectedSchool, initView}: InputProps): JSX.Element => {

    const [schoolDetails, setSchoolDetails] = useState<NYCSchoolDetails | null>(null);
    const [errorFetching, setErrorFetching] = useState<boolean>(false);


    useEffect(() => {
        selectedSchool?.dbn && getSchoolDetails(selectedSchool?.dbn).then((data) => { 
            setSchoolDetails(data[0]);
        }).catch(() => {
            setErrorFetching(true);
        }) 
    }, [selectedSchool]);

    
    return (
        <Card data-testid="school-details-dt" style={{ height: 840 }}>
            <Card.Header>Details</Card.Header>
            <Card.Body>
                <Card.Title>{selectedSchool && selectedSchool.school_name}</Card.Title>
                {errorFetching ? 
                <Card.Text>{"Error fetching school details"}</Card.Text> :
                <>
                    {initView ? "Select school from the list" : (schoolDetails === null ? <Spinner animation="border" variant="primary" /> : details.map((detail) => <Pair key={detail[0]} label={detail[0]} value={schoolDetails[detail[1]]} /> )) }
                </>}
            </Card.Body>
        </Card>
    );
};

export default SchoolDetails;