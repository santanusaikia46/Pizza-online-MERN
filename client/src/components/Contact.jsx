import React from "react";
import { Container, Table } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th className="bg-warning text-center" colSpan={3}>
                --Contact Details--
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>phone</td>
              <td>9365794203</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>saikiasantanu46@gmail.com</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Contact;
