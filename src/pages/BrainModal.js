import React, {useEffect, useRef, useState} from "react";
import { IoMdClose } from "react-icons/io";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './BrainModal.css'
import {Col, Row} from "react-bootstrap";
import {StlViewer} from "react-stl-viewer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";



const BrainModal = ({ isModalOpen, onClose }) => {
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);

    const [modelLoadPercent, setModelLoadPercent] = useState(0)

    const [isLoading, setIsLoading] = useState(false)

    async function fetch_brain_with_progress_bar() {
        if(isLoading === false){
            setIsLoading(true)

            const response = await fetch('/assets/3d_brain_model.stl');
            const contentLength = response.headers.get('content-length');
            const total = parseInt(contentLength, 10);
            let loaded = 0;

            const res = new Response(new ReadableStream({
                async start(controller) {
                    const reader = response.body.getReader();
                    for (;;) {
                        const {done, value} = await reader.read();
                        if (done) break;
                        loaded += value.byteLength;
                        setModelLoadPercent(Math.round(loaded/total*100))
                        controller.enqueue(value);
                        // await new Promise(resolve => setTimeout(resolve, 1000))
                    }
                    controller.close();
                },
            }));
            await res.blob();  // Returns the blob object
        }
    }

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
        fetch_brain_with_progress_bar().then()

        return (
            <div className="modal" ref={div1Ref}>
                <article className="modal-content p-4" style={{maxWidth: '1200px', height: '80%'}} ref={div2Ref}>
                    <Row style={{marginBottom: '10px'}} className="flex-0">
                        <Col>
                            <h5 className="modal-title">Brain model viewer</h5>
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
                            This model was obtained by processing the <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/DICOM">DICOM</a> files of my <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Magnetic_resonance_imaging">MRI</a> through <a rel="noreferrer" target="_blank" href="https://surfer.nmr.mgh.harvard.edu/">FreeSurfer</a>'s <i>mri_convert</i> function.
                            <br/>
                            Special thanks to Michael Notter for his <a rel="noreferrer" target="_blank" href="https://github.com/miykael/3dprintyourbrain">detailed guide</a> on the subject.
                            <br/>
                            Download model (35.4 Mo)&nbsp;
                            <a id="custom_button" className="btn btn-outline-primary my-1 btn-sm" rel="noreferrer" target="_blank" href="/assets/3d_brain_model.stl" style={{padding: "0 1 0 1"}}>
                                <FontAwesomeIcon icon={faDownload} className="fa-lg"/>
                            </a>
                        </Col>
                    </Row>
                </article>
            </div>
        );
    }
};

export default BrainModal;