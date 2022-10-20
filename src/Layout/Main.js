import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Pages/Shared/Footer/Footer';
import Header from '../Components/Pages/Shared/Header/Header';
import LeftSideNav from '../Components/Pages/Shared/LeftSideNav/LeftSideNav';
import RigthSideNav from '../Components/Pages/Shared/RightSideNav/RigthSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-4'>
                <Row >
                    <Col lg="2" className='border d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7" className='border'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3" className='border'>
                        <RigthSideNav></RigthSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;