import React, {useEffect, useRef} from "react";
import { IoMdClose } from "react-icons/io";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './BrainModal.css'
import {Col, Row} from "react-bootstrap";
import {StlViewer} from "react-stl-viewer";

const BrainModal = ({ isModalOpen, modelLoadPercent, onClose }) => {
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            // The modal is closed if the click is inside div1 and outside div2
            if (div1Ref.current && div1Ref.current.contains(event.target)) {
                if (div2Ref.current && !div2Ref.current.contains(event.target)) {
                    onClose();
                }
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [onClose]);

    if (isModalOpen !== true) {
        return null;
    } else {
        return (
            <div className="modal" ref={div1Ref}>
                <article className="modal-content p-4" style={{maxWidth: '1200px', height: '80%'}} ref={div2Ref}>
                    <Row style={{marginBottom: '10px'}} className="flex-0">
                        <Col>
                            <h5 className="modal-title">Autoportrait</h5>
                        </Col>
                        <Col className="text-end">
                            <IoMdClose onClick={onClose} id="grow_div" className="exit-icon"/>
                        </Col>
                    </Row>

                    <div style={{flex: '1', marginBottom: '10px', overflow: 'auto'}} className="align-content-center">
                        {modelLoadPercent < 100 &&
                        <Row style={{width: '80%', marginLeft: "auto", marginRight: "auto"}}>
                            <b>Loading model...</b>
                            <br/>
                            <ProgressBar animated now={modelLoadPercent} label={`${modelLoadPercent}%`} style={{marginTop: '10px'}}/>
                        </Row>
                        }
                        {modelLoadPercent === 100 &&
                        <StlViewer style={{height: '100%'}} orbitControls shadows url={'/assets/3d_brain_model.stl'} modelProps={{rotationX: 0.57}}/>
                        }
                    </div>

                    <Row className="flex-0">
                        <Col>
                            This model was obtained by processing the <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/DICOM">DICOM</a> files of my <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Magnetic_resonance_imaging">MRI</a> through <a rel="noreferrer" target="_blank" href="https://surfer.nmr.mgh.harvard.edu/">FreeSurfer</a>'s <i>mri_convert</i> function.<br/>
                            Special thanks to Michael Notter for his <a rel="noreferrer" target="_blank" href="https://github.com/miykael/3dprintyourbrain">detailed guide</a> on the subject.
                        </Col>
                    </Row>
                </article>
            </div>
        );
    }
};

export default BrainModal;