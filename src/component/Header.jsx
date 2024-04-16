import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


const Header = () => {




    const [modalShow, setModalShow] = React.useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);

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
    
                        <div class="form-floating mb-3">
                            <input type="name" class="form-control" id="floatingInput" placeholder="Enter Name"></input>
                            <label for="floatingInput"> Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="floatingInput" placeholder="Enter Mobile Number"></input>
                            <label for="floatingInput"> Mobile</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Enter Email-Id"></input>
                            <label for="floatingInput"> Email-ID</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className="d-flex gap-4 mt-3">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" ></input>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" checked></input>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                        </div>
                        <button className='btn btn-lg broder border-dark text-secondary col-12 mt-3'>SignUp </button>
                        <p className='text-center text-secondary mt-3'>By signing up, you accept our terms and privacy policy.</p>
                        <p className='text-center text-dark mt-3'>Already have an account?
                            <span className='text-primary fw-bold' onClick={() => {setModalShow(false); setLoginModalShow(true);}}> Log in</span></p>
                    </form>
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
                        <form action="">
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="floatingInput" placeholder="Enter Mobile Number"></input>
                                <label for="floatingInput"> Mobile</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                                <label for="floatingPassword">Password</label>
                            </div>
    
                            <p className='text-primary fw-bold mt-3'>Forget Password ?</p>
                            <button className='btn btn-lg broder border-dark text-secondary col-12 '>Login </button>
                            <p className='text-center text-dark mt-3'>Don't have an account?
                                <span className='text-primary fw-bold' onClick={() => {setModalShow(true); setLoginModalShow(false);}}>
                                    Sign up for free</span></p>
                        </form>
                    </Modal.Body>
                </Modal.Body>
            </Modal>
        );
    }

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



