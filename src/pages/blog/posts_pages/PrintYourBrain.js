import React, {useState} from "react";
import ReactGA from "react-ga4";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBrain, faDownload} from "@fortawesome/free-solid-svg-icons";
import { DiscussionEmbed } from 'disqus-react';
import {Col, Container, Row} from "react-bootstrap";
import ChangeDocumentTitle from "../../../utils/ChangeDocumentTitle";
import BrainModal from "../../BrainModal";

ReactGA.initialize("G-R8XSGWP0YR");

const PrintYourBrain = () => {
    ChangeDocumentTitle("Colin | 3D print your brain")
    ReactGA.send({ hitType: "pageview", page: "/#/blog/3d_print_your_brain", title: "Colin | 3D print your brain" });

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => { setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); };
    function open_brain_model() {
        ReactGA.event({category: "Brain", action: "User hit brain button"});
        openModal()
    }

    return (
        <Container fluid className="d-flex flex-column" style={{minHeight: "80vh", textAlign: "justify"}}>
            <div style={{padding:0}}>
                <BrainModal
                    isModalOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>
            <Row style={{flex: 1, display: "flex"}}>
                <div>
                    <div style={{color: "#00000099"}}>
                        <a rel="noreferrer" href="/" id="skill_link">Home</a>
                        &nbsp;>&nbsp;
                        <a rel="noreferrer" href="/#/blog" id="skill_link">Blog posts</a>
                        &nbsp;>&nbsp;
                        <a rel="noreferrer" href="/#/blog/3d_print_your_brain" id="skill_link">3D print your brain</a>
                    </div>

                    <h1 className="py-3">3D print your brain</h1>

                    <Row className="justify-content-center">
                        <Col className="col-4 p-0" style={{maxWidth: "250px"}}>
                            <img
                                style={{width: "100%", height: "auto", maxWidth: "250px"}}
                                alt="T1 slice screenshot"
                                title="T1 slice screenshot"
                                src="/assets/blog/3D_print_your_brain/T1_screenshot.png"
                            />
                        </Col>
                        <Col className="col-4 p-0" style={{maxWidth: "250px"}}>
                            <img
                                style={{width: "100%", height: "auto", maxWidth: "250px"}}
                                alt="STL model screenshot"
                                title="STL model screenshot"
                                src="/assets/blog/3D_print_your_brain/brain_3d_model.jpg"
                            />
                        </Col>
                        <Col className="col-4 p-0" style={{maxWidth: "250px"}}>
                            <img
                                style={{width: "100%", height: "auto", maxWidth: "250px"}}
                                alt="3D printed model"
                                title="3D printed model"
                                src="/assets/blog/3D_print_your_brain/brain_printed_model.jpg"
                            />
                        </Col>
                    </Row>

                    <Row className="py-3" style={{fontSize: 18}}>
                        <Col className="col-12">
                            So you've seen these cool pictures of 3D printed brains and you happen to have had an MRI recently?
                            Well you're in luck, this guide will tell you every step needed to transform your MRI files into a <b>high resolution</b> 3D model of your brain!
                            Additionally, we'll see how to export the left and right hemispheres individually, along with the subcortical regions (see the showcase video at the end of this page).
                            I haven't seen many guides that result in <b>a model that can be disassembled</b>, so you should obtain something truly unique and educational.
                            <br/>
                            You can download my model here (35.4 Mo):&nbsp;
                            <a id="custom_button" className="btn btn-outline-primary my-1 btn-sm" rel="noreferrer" target="_blank" href="/assets/3d_brain_model.stl" style={{padding: "0 1 0 1"}}>
                                <FontAwesomeIcon icon={faDownload} className="fa-lg"/>
                            </a>
                            <br/>
                            And you can view it online here:&nbsp;
                            <button className="btn btn-outline-primary p-1 btn-sm" style={{padding: "0 1 0 1"}} title="3D brain model" onClick={() => open_brain_model()}>
                                <FontAwesomeIcon icon={faBrain} size="4x" style={{color: '#33b38d', 'width': '27px', 'height': '27px'}} className="py-0"/>
                            </button>


                            <div className="flex py-2" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <hr style={{ width: '95%', padding: 0 }} />
                            </div>
                            <h3>Step 1: Prerequisites</h3>
                            Before proceeding any further, make sure you have the following files and software:
                                <ul>
                                    <li>A <b>T1 weighted MRI image</b> of your brain. The files can be in either NIFTI (.nii or .nii.gz) or DICOM format (.dcm or without file extension). If you had several T1 images taken during your MRI, use the larger file since it usually indicates higher quality / more complete scans.
                                        <ul>
                                            <li>Optionally, you can use <b><a rel="noreferrer" target="_blank" href="https://download.slicer.org/">Slicer</a></b> to ensure that your T1 images are properly capturing the entirety of your brain, and not just a slice.</li>
                                        </ul>
                                    </li>
                                    <li><b><a rel="noreferrer" target="_blank" href="https://github.com/icometrix/dicom2nifti">dicom2nifti</a></b> is a Python library that will let you convert your DICOM files in the NIFTI format.</li>
                                    <li><b><a rel="noreferrer" target="_blank" href="https://surfer.nmr.mgh.harvard.edu/fswiki/DownloadAndInstall">FreeSurfer</a></b> is a powerful software for the analysis of neuroimaging data. We'll use it to extract the brain surface model from the NIFTI files.
                                        <ul>
                                            <li><u>Note:</u> If you are on Windows, you will need <b><a rel="noreferrer" target="_blank" href="https://www.virtualbox.org">VirtualBox</a></b> to start an <b><a rel="noreferrer" target="_blank" href="https://ubuntu.com/download/desktop">Ubuntu</a></b> virtual machine (VM) where FreeSurfer can run. There is a very detailed instruction PDF to setup the VM on FreeSurfer's <i>Download and Install</i> page. MacOS and Linux users can skip this step.</li>
                                        </ul>
                                    </li>
                                    <li><b><a rel="noreferrer" target="_blank" href="https://www.meshlab.net/#download">MeshLab</a></b> will help you clean the rough output of FreeSurfer and split the hemispheres and subcortical regions into individual files.</li>
                                    <li><b><a rel="noreferrer" target="_blank" href="https://meshmixer.com/download.html">Meshmixer</a></b> is a seemingly simple, but actually very complete tool intended for easy 3D sculpting and creation. We'll use it for the finishing touches and to optimize the model's size.</li>
                                </ul>

                            <div style={{color: 'red'}}>Below is still a work in progress...</div>

                            <div className="flex py-2" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <hr style={{ width: '95%', padding: 0 }} />
                            </div>
                            <h3>Step 2: Visualization and conversion</h3>

                            ToDo:<br/>
                            - Visualize the files with 3D slicer to ensure that we have a full picture of the brain.<br/>
                            - Convert the DICOM files into NIFTI with dicom2nifti.


                            <div className="flex py-2" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <hr style={{ width: '95%', padding: 0 }} />
                            </div>
                            <h3>Step 3: 3D mesh creation</h3>

                            ToDo:<br/>
                            - Use FreeSurfer to extract the brain hemispheres' surface model from the NIFTI files.<br/>
                            - Extract the subcortical areas of interest.<br/>
                            - Combine the two meshes.<br/>
                            - Export into stl.<br/>


                            <div className="flex py-2" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <hr style={{ width: '95%', padding: 0 }} />
                            </div>
                            <h3>Step 4: Cleanup</h3>

                            In MeshLab, use:
                            Filters > Mesh Layers > Split in Connected Components
                            Then, delete the layers that you already have and use: File > Export Mesh As... and make sure you select .stl.
                            Unfortunately there is no <i>undo</i> function in Meshlab, so you have to repeat this process for the two hemispheres and the subcortical region to obtain your files.
                        </Col>
                    </Row>

                    <center><hr className="py-3" style={{width: '95%'}}/></center>
                    <h3>Step 5: Printing</h3>

                    <Row className="justify-content-center">
                        <video src="/assets/blog/3D_print_your_brain/showcase.mp4" controls style={{maxWidth: "540px", maxHeight: "540px"}}/>
                    </Row>

                </div>
            </Row>

            <Row style={{flex: 0, display: "flex"}}>
                <DiscussionEmbed
                    shortname='colintr-fr'
                    config={
                        {
                            url: window.location.href,
                            identifier: "3d_print_your_brain",
                            title: "3D print your brain",
                            language: 'en'
                        }
                    }
                />
            </Row>
        </Container>
    );
};

export default PrintYourBrain;