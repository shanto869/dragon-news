import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from './BrandCarousel';


const RigthSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical className="d-grid gap-2">
                <Button variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub /> Login with GitHub</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RigthSideNav;