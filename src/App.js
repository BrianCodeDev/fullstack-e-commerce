import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import SwitchButton from './SwitchButton'; // Import the SwitchButton component
import Card from 'react-bootstrap/Card';
import blogone from './assets/blog-one.png'; // Tell webpack this JS file uses this image
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';

function NavScrollExample() {
  return (
 <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Your Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >



          </Nav>
          <Form className="d-flex">
          <Nav.Link href="#action1">Blog</Nav.Link>
            <Nav.Link href="#action1">Projects</Nav.Link>
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action1">Newsletter</Nav.Link>
            <FontAwesomeIcon icon={faUser} style={{ border: '1px solid black', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', paddingTop: '10px', borderRadius: '3px', marginRight: '10px'}}/>
            <SwitchButton />
            
             </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <header className="header-display container">
    <h1 className='fw-bold'>
        THE BLOG
      </h1>
    </header>
    <div className="recent-posts container">
      <h3>Recent blog posts</h3>
      <div>
  <Container className='blog-posts'>
    <div>
      <Row className='justify-content-between'>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={blogone} />
            <Card.Body>
              <h6>Olivia Rhye • 1 Jan 2023</h6>
              <Card.Title>UX review presentations</Card.Title>
              <Card.Text>
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </Card.Text>
              <button className='design'>Design</button>
              <button className='research'>Research</button>
              <button className='presentation'>Presentation</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div>
      <button className='more-button'>
      Load More Blogs
      </button>
      </div>
    </div>
  </Container>
</div>


    </div>
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
 </>

  );
}

export default NavScrollExample;