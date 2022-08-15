import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, InputGroup, Alert, Tab, Tabs } from "react-bootstrap";

function App() {
  let [tilesCount, setTilesCount] = React.useState(0);
  let [tileLength, setTileLength] = React.useState(0);
  let [tileBreadth, setTileBreadth] = React.useState(0);
  let [floorLength, setFloorLength] = React.useState(0);
  let [floorBreadth, setFloorBreadth] = React.useState(0);
  let calculate = () => {
    let result = (floorLength * floorBreadth) / (tileLength * tileBreadth);
    setTilesCount(result);
  };
  return (
    <div className="container-md">
      <Tabs defaultActiveKey="tiles" id="tiles" className="mb-3">
        <Tab eventKey="tiles" title="Tiles">
          <Form>
            <Form.Group className="mb-3 col-4">
              <InputGroup>
                <InputGroup.Text>Tile Dimensions</InputGroup.Text>
                <Form.Control
                  type="number"
                  min={1}
                  placeholder="Enter length"
                  onChange={(e) => setTileLength(e.target.value)}
                />
                <Form.Control
                  type="number"
                  placeholder="Enter breadth"
                  onChange={(e) => setTileBreadth(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3 col-4">
              <InputGroup>
                <InputGroup.Text>Floor Dimensions</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Enter length"
                  onChange={(e) => setFloorLength(e.target.value)}
                />
                <Form.Control
                  type="number"
                  placeholder="Enter breadth"
                  onChange={(e) => setFloorBreadth(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              onClick={() => calculate()}
              className="mb-3"
            >
              Calculate
            </Button>
          </Form>
          <Alert># of tiles = {Math.ceil(tilesCount)}</Alert>
        </Tab>
        <Tab eventKey="cements" title="Cements">
          Yet to come
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
