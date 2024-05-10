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
            <article className="modal-content p-4" style={{width: '80%', height: '80%'}}>
                <Row style={{marginBottom: '10px'}}>
                    <Col>
                        <h5 className="modal-title">Autoportrait</h5>
                    </Col>
                    <Col className="exit-icon text-end">
                        <IoMdClose onClick={onClose} id="grow_div"/>
                    </Col>
                </Row>

                <Row className="flex-grow-1" style={{marginBottom: '10px'}}>
                    {modelLoadPercent < 100 &&
                        <Row style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{width: '80%'}}>
                                <b>Loading model...</b>
                                <br/>
                                <ProgressBar animated now={modelLoadPercent} label={`${modelLoadPercent}%`} style={{marginTop: '10px'}}/>
                            </div>
                        </Row>
                    }
                    {modelLoadPercent === 100 &&
                        <Row className="align-items-center flex-grow-1 m-0 p-0" style={{minWidth:0, minHeight: 0, overflow: "hidden"}}>
                            {modalContent}
                        </Row>
                    }
                </Row>
                <Row>
                    <Col>
                        This model was obtained by processing the <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/DICOM">DICOM</a> files of my <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Magnetic_resonance_imaging">MRI</a> through <a rel="noreferrer" target="_blank" href="https://surfer.nmr.mgh.harvard.edu/">FreeSurfer</a>'s <i>mri_convert</i> function.<br/>
                        Special thanks to Michael Notter for his <a rel="noreferrer" target="_blank" href="https://github.com/miykael/3dprintyourbrain">detailed guide</a> on the subject.
                    </Col>
                </Row>
            </article>
        </div>
    );
};

export default BrainModal;