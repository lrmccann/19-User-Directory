import React from "react";
import Container from  "../compoonents/Container";
import Row from "../compoonents/Row";
import Table from "../compoonents/EmployeeTable";

function Home() {
    return(
    <div className="mx-auto my-4">
        <Container fluid="true">
            <Row fluid="true">
               <Table />
            </Row>
        </Container>
    </div>
    );
}
export default Home;