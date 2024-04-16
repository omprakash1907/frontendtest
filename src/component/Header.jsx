import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <h2 className='logoclg  border-bottom text-center fw-bold  pb-4'>
                    TasteShare
                </h2>
                <h4 className='text-center py-3'>Create your TasteShare account</h4>
                <form action="">
                    <Form.Group className="mb-3" controlId="floatingPassword">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="floatingInput">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group controlId="floatingPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </form>
                <button className='btn btn-lg broder border-dark text-secondary col-12 mt-3'>SignUp </button>
                <p className='text-center text-secondary mt-3'>By signing up, you accept our terms and privacy policy.</p>
                <p className='text-center text-dark mt-3'>Already have an account?
                    <span className='text-primary fw-bold'> Log in</span></p>
            </Modal.Body>

        </Modal>
    );
}

function LoginModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Modal.Body>
                    <h2 className='logoclg  border-bottom text-center fw-bold  pb-4'>
                        TasteShare
                    </h2>
                    <h4 className='text-center py-3'>Login into TasteShare </h4>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <p className='text-primary fw-bold mt-3'>Forget Password ?</p>
                    <button className='btn btn-lg broder border-dark text-secondary col-12 '>Login </button>
                    <p className='text-center text-dark mt-3'>Don't have an account?
                        <span className='text-primary fw-bold'>
                            Sign up for free</span></p>
                </Modal.Body>
            </Modal.Body>
        </Modal>
    );
}
const Header = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);

    

    return (
        <>
            <section className='header border border-bottom shadow-sm py-2 bg-white'>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <Link to="/" className="logo">
                            <h1 className='logoclg'>TasteShare</h1>
                        </Link>
                        <div className="authbutton">
                            <button className=' btn btn-white border border-dark text-secondary' variant="primary" onClick={() => setModalShow(true)}>Sign Up</button>
                            <button className=' btn btn-white border border-dark text-secondary ms-3' onClick={() => setLoginModalShow(true)}>Login</button>
                        </div>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <LoginModal
                        show={loginModalShow}
                        onHide={() => setLoginModalShow(false)}
                    />
                </div>
            </section>
        </>
    )
}

export default Header