import React from "react";
import { Button, Card, Typography, Form } from "antd";
import {Link} from "react-router-dom";

class Destination extends React.Component {
  state = {
    destinationCity: ""
  };

  render() {
    const { Text } = Typography;
    return (
      <Card className="destination" border={true} style={{ width: 300 }}>
        <h2>Destination City</h2>
        <Form><input></input></Form>
        <p>
        </p>
      </Card>
    );
  }
}

export default Destination;
