import {Navbar, Container,Nav,Modal,Button, Accordion,Table} from 'react-bootstrap';
import Img from 'react-bootstrap/Image'
import './App.css';

function App() {
  return (
<>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">My Practice</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About Us</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic1.makeuseofimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2016%2F10%2Fcamera-photo-lens-stock-images.jpg%3Fq%3D50%26fit%3Dcontain%26w%3D1500%26h%3D750%26dpr%3D1.5&imgrefurl=https%3A%2F%2Fwww.makeuseof.com%2Ftag%2Ftop-5-websites-for-free-stock-photographs%2F&tbnid=Dl7z4UdQxO9_AM&vet=12ahUKEwjI0fe0k874AhXNjtgFHakWCOkQMygPegUIARD-AQ..i&docid=BWlTlGThnKWvuM&w=1500&h=750&q=images&ved=2ahUKEwjI0fe0k874AhXNjtgFHakWCOkQMygPegUIARD-AQ"></img>

    <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>WELCOME!!</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Hii, this is my page</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>


<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>My Item #1</Accordion.Header>
    <Accordion.Body>
    India is a great country having different cultures, castes, creed, religions but still, they live together. India is known for its heritage, spices, and of course, for people who live here. That's the reasons India is famous for the common saying of “unity in diversity”.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>My Item #2</Accordion.Header>
    <Accordion.Body>
      I live in India
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Table striped bordered hover variant="live">
  <thead>
    <tr>
      <th>No.</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Shivani</td>
      <td>Soni</td>
      <td>@shi</td>
    </tr>
    <tr>
      <td>2</td>
      <td>abd</td>
      <td>Thornton</td>
      <td>@abc</td>
    </tr>
  </tbody>
</Table>
      </>

  
  );
}

export default App;
