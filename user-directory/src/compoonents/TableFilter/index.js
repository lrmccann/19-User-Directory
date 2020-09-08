import React, { useState } from "react";
import TableHeader from "../TableHeader";
import Row from "../Row";
import Col from "../Col";
import { Button } from "react-bootstrap";



const TableFilter = (props) => {
    const { employees } = props.state;

    const [filteredEmployees, setFilteredEmployees] = useState(employees);

    const [searchInput, setSearchInput] = useState({ value: '', search: '' });

    const handleInputChange = event => {
        setSearchInput({ search: event.target.value, value: 'department' });
        console.log(searchInput.search);
    };

    // const handleFieldChange = event => {
    //     setSearchInput({ value: event.target.value });
    //     console.log(searchInput.value);
    // }

    const handleFormFilter = event => {
        event.preventDefault();

        setFilteredEmployees(employees.filter(employee => employee[searchInput.value] === searchInput.search));
        console.log(filteredEmployees);
    }

    return (
        <div>
            {/* <form onSubmit={handleFormFilter}> */}
            <Row>
                <Col size="md-8">
                    <input style={{height: "35px", fontFamily: "Times New Roman, Times, serif"}}
                        value={searchInput.search}
                        type="text"
                        id="fieldInput"
                        onChange={handleInputChange}
                        placeholder="filter by department"
                    ></input>
                    <Button style={{ marginLeft: "1%", height: "40px", marginBottom: "1%", fontFamily: "Times New Roman, Times, serif" }} onClick={handleFormFilter}>Filter</Button>
                </Col>
            </Row>
            {/* </form> */}

            <table id='employees'>
                <TableHeader
                    employees={filteredEmployees}
                />
            </table>
        </div >
    )
}

export default TableFilter;