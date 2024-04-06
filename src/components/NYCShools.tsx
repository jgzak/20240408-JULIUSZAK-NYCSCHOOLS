import React from 'react';
import { NYCSchool } from '../types';

import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { CardText } from 'react-bootstrap';


/**
 * Renders the list of New York City schools.
 *
 * @component
 * @param {OwnProps} props - The input props containing the list of schools, selected school, initialization view, and error fetching.
 * @returns {JSX.Element} The JSX element representing the list of New York City schools.
 */

interface OwnProps {
    nycschools: NYCSchool[] | null;
    setSelectedSchool: React.Dispatch<React.SetStateAction<NYCSchool | null>>;
    setInitView: React.Dispatch<React.SetStateAction<boolean>>;
    initView: boolean;
    errorFetching: boolean;
}

const NYCShools: React.FC<OwnProps> = ({nycschools, setSelectedSchool, setInitView, initView, errorFetching}) => {


    const onSchoolClickHandler = (dbn: string ) => {
        const selectedSchool = nycschools?.find((school) => school.dbn === dbn);
        selectedSchool && setSelectedSchool(selectedSchool)
        initView && setInitView(false);
    }

    // In case of error fetching the list of schools, display an error message. Otherwise, display the list of schools. We could also add a loading spinner here, and reload button.


    return (
        <Card className="overflow-scroll" style={{ height: 840 }}>
            {errorFetching ? <CardText>{"Error fetching list of schools"}</CardText>:
            <ListGroup variant="flush">
                {nycschools && nycschools.map((school) => (
                    <ListGroup.Item key={school.school_name} action onClick={() => onSchoolClickHandler(school.dbn)}>{school.school_name}</ListGroup.Item>
                ))}
            </ListGroup>}
        </Card>)
};

export default NYCShools;

