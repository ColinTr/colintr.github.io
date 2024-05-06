import React from "react";
import { IoMdClose } from "react-icons/io";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './BrainModal.css'
import {Col, Row} from "react-bootstrap";

const BrainModal = ({ isModalOpen, modalContent, modelLoadPercent, onClose }) => {

    if (isModalOpen !== true) {
        return null;
    }
    return (
        <div className="modal">
            <article className="modal-content p-lg-4" style={{width: '80%', height: '80%'}}>
                <Row>
                    <Col>
                        <h5 className="modal-title">Autoportrait</h5>
                    </Col>
                    <Col className="exit-icon text-end">
                        <IoMdClose onClick={onClose} />
                    </Col>
                </Row>

                <main className="modal-mainContents" style={{width: '100%', height: '100%'}}>
                    {modelLoadPercent < 100 &&
                        <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{width: '80%'}}>
                                <b>Loading model...</b>
                                <br/>
                                <ProgressBar animated now={modelLoadPercent} label={`${modelLoadPercent}%`} style={{marginTop: '10px'}}/>
                            </div>
                        </div>
                    }
                    {modelLoadPercent === 100 && modalContent}
                </main>
            </article>
        </div>
    );
};

export default BrainModal;