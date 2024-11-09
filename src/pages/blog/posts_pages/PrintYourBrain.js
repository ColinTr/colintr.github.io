import React, {useState} from "react";
import ReactGA from "react-ga4";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBrain, faDownload} from "@fortawesome/free-solid-svg-icons";
import { DiscussionEmbed } from 'disqus-react';
import {Col, Container, Row} from "react-bootstrap";
import BrainModal from "../../BrainModal";
import BlogLinkElement from "../BlogLinkElement";
import {useLocation} from "react-router-dom";

const PrintYourBrain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => { setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); };
    function open_brain_model() {
        ReactGA.event({category: "Brain", action: "User hit brain button"});
        openModal()
    }

    const page_title = "3D print your brain"
    const path = useLocation().pathname

    return (
        <Container fluid className="d-flex flex-column" style={{minHeight: "80vh", textAlign: "justify", fontFamily: "Arial"}}>
            <div style={{padding:0}}>
                <BrainModal
                    isModalOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>
            <Row style={{flex: 1, display: "flex"}}>
                <div>
                    <BlogLinkElement path={path} page_title={page_title}/>

                    <Row className="py-3">
                        <Col className="col-auto" style={{ flexGrow: 1 }}>
                            <h1 id="page_title">{page_title}</h1>
                        </Col>
                        <Col className="d-flex align-items-center col-auto">
                            <p id="education_p_2" className="my-1">Written in August 2024</p>
                        </Col>
                    </Row>

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
                            So you've seen these cool pictures of 3D printed brains and you happen to have had an MRI
                            recently?
                            Well you're in luck, this guide will tell you every step needed to transform your MRI files
                            into a <b>high resolution</b> 3D model of your brain!
                            Additionally, we'll see how to export the left and right hemispheres individually, along
                            with the subcortical regions (see the showcase video at the end of this page).
                            I haven't seen many guides that result in <b>a model that can be disassembled</b>, so you
                            should obtain something truly unique and educational.
                            <br/>
                            You can download my STL model here (35.4 Mo):&nbsp;
                            <a id="custom_button" className="btn btn-outline-primary my-1 btn-sm" rel="noreferrer"
                               target="_blank" href="/assets/3d_brain_model.stl" style={{padding: "0 1 0 1"}}>
                                <FontAwesomeIcon icon={faDownload} className="fa-lg"/>
                            </a>
                            <br/>
                            And you can view it online here:&nbsp;
                            <button className="btn btn-outline-primary p-1 btn-sm" style={{padding: "0 1 0 1"}}
                                    title="3D brain model" onClick={() => open_brain_model()}>
                                <FontAwesomeIcon icon={faBrain} size="4x"
                                                 style={{color: '#33b38d', 'width': '27px', 'height': '27px'}}
                                                 className="py-0"/>
                            </button>


                            <div className="flex py-2"
                                 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <hr style={{width: '95%', padding: 0}}/>
                            </div>

                            <h3>Step 1: Prerequisites</h3>

                            Before proceeding any further, make sure you have the following files and software:
                            <ul>
                                <li>A <b>T1 weighted MRI image</b> of your brain. The files can be in either NIfTI (.nii
                                    or .nii.gz) or DICOM format (.dcm or without file extension). If you had several T1
                                    images taken during your MRI, use the larger file since it usually indicates higher
                                    quality / more complete scans.
                                    <ul>
                                        <li>Optionally, you can use <b><a rel="noreferrer" target="_blank"
                                                                          href="https://download.slicer.org/">Slicer</a></b> to
                                            ensure that your T1 images are properly capturing the entirety of your
                                            brain, and not just a slice.
                                        </li>
                                    </ul>
                                </li>
                                <li><b><a rel="noreferrer" target="_blank"
                                          href="https://github.com/icometrix/dicom2nifti">dicom2nifti</a></b> is a
                                    Python library that will let you convert your DICOM files in the NIfTI format.
                                </li>
                                <li><b><a rel="noreferrer" target="_blank"
                                          href="https://surfer.nmr.mgh.harvard.edu/fswiki/DownloadAndInstall">FreeSurfer</a></b> is
                                    a powerful software for the analysis of neuroimaging data. We'll use it to extract
                                    the brain surface model from the NIfTI files.
                                    <ul>
                                        <li><u>Note:</u> If you are on Windows, you will need <b><a rel="noreferrer"
                                                                                                    target="_blank"
                                                                                                    href="https://www.virtualbox.org">VirtualBox</a></b> to
                                            start an <b><a rel="noreferrer" target="_blank"
                                                           href="https://ubuntu.com/download/desktop">Ubuntu</a></b> virtual
                                            machine (VM) where FreeSurfer can run. There is a very detailed instruction
                                            PDF to setup the VM on FreeSurfer's <i>Download and Install</i> page. MacOS
                                            and Linux users can skip this step.
                                        </li>
                                    </ul>
                                </li>
                                <li><b><a rel="noreferrer" target="_blank"
                                          href="https://www.meshlab.net/#download">MeshLab</a></b> will help you clean
                                    the rough output of FreeSurfer and split the hemispheres and subcortical regions
                                    into individual files.
                                </li>
                                <li><b><a rel="noreferrer" target="_blank"
                                          href="https://meshmixer.com/download.html">Meshmixer</a></b> is a seemingly
                                    simple, but actually very complete tool intended for easy 3D sculpting and creation.
                                    We'll use it for the finishing touches and to optimize the model's size.
                                </li>
                            </ul>

                            <div className="flex py-2"
                                 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <hr style={{width: '95%', padding: 0}}/>
                            </div>

                            <h3>Step 2: Visualization and conversion</h3>

                            <p>
                                After an MRI, you can be given several folders, one for each scan of your head.
                                You should look for T1-weighted images, as they emphasize fatty tissue in white and show
                                fluid-filled areas in black (the brain being nearly 60% fat).
                                An MRI generally produces a number of <a rel="noreferrer" target="_blank"
                                                                         href="https://en.wikipedia.org/wiki/DICOM">DICOM</a> files,
                                each representing a 2D slice of your brain.
                            </p>

                            <p>
                                If you have multiple T1-weighted images available, you can start by comparing them
                                with <a rel="noreferrer" target="_blank" href="https://download.slicer.org/">Slicer</a>.
                                You should generally look for the heaviest folder since it should include the most
                                details.
                                To open a DICOM folder in Slicer, follow:
                            </p>
                            <ul>
                                <li>DATA > Choose Directory to Add > <i>find your T1 DICOM folder and open it</i></li>
                            </ul>

                            <center>
                                <img
                                    style={{width: "100%", height: "auto", maxWidth: "750px"}}
                                    alt="Open a DICOM folder in Slicer"
                                    title="Open a DICOM folder in Slicer"
                                    src="/assets/blog/3D_print_your_brain/slicer_opening_files.png"
                                />
                            </center>
                            <p>
                                In the 3 windows of Slicer, you can now play with the sliders to ensure that you have a
                                full picture of your brain.
                            </p>

                            <p>
                                If you are satisfied with the DICOM folder, you can now convert it to the NIfTI format
                                required for the next step.
                                I recommend the Python project <a rel="noreferrer" target="_blank"
                                                                  href="https://github.com/icometrix/dicom2nifti">dicom2nifti</a>,
                                but you are free to explore other solutions.
                                If you decide to use it, you can open Python, import the package and convert the files
                                with:
                            </p>

                            <div className="code_block">
                                > python<br/>
                                > import dicom2nifti<br/>
                                > dicom2nifti.convert_directory("<i>/path/to/DICOM/folder</i>", "<i>/output/folder</i>",
                                compression=True, reorient=True)<br/>
                            </div>

                            If you now have a <code>.nii.gz</code> file, you can proceed to the next step.

                            <div className="flex py-2"
                                 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <hr style={{width: '95%', padding: 0}}/>
                            </div>

                            <h3>Step 3: 3D mesh creation</h3>

                            <p>
                                In this section we'll use <a rel="noreferrer" target="_blank"
                                                             href="https://surfer.nmr.mgh.harvard.edu/fswiki/DownloadAndInstall">FreeSurfer</a> to
                                create the brain model from your NIfTI file into a 3D mesh (STL).
                                After installing the software (see note in Step 1: Prerequisites), follow these steps in
                                bash:
                            </p>

                            <h4 style={{marginTop: "1em"}}>3.1 Define a few variables</h4>

                            <div className="code_block">
                                # Main folder for the whole project<br/>
                                > export EXPERIMENT_DIR=/users/mnotter/3dbrain<br/>
                                <br/>
                                # Path to the FreeSurfer folder<br/>
                                > export SUBJECTS_DIR=$EXPERIMENT_DIR / freesurfer<br/>
                                <br/>
                                # Name of the subject<br/>
                                > export subject=sub001<br/>
                            </div>

                            <h4 style={{marginTop: "1em"}}>3.2 Create the STL model of the two hemispheres</h4>

                            Create an output folder and convert the <code>.nii.gz</code> file into
                            a <code>.mgz</code> high-resolution structural volume:
                            <div className="code_block">
                                > mkdir -p $SUBJECTS_DIR/{'${'}subject{'}'}/mri/orig<br/>
                                > mri_convert $EXPERIMENT_DIR / {'${'}subject{'}'}/struct.nii.gz
                                $SUBJECTS_DIR/{'${'}subject{'}'}/mri/orig/001.mgz<br/>
                            </div>

                            Next, we'll launch FreeSurfer's cortical reconstruction process.
                            This step can take <b>up to 10 hours</b> depending on the performance of your CPU.
                            I recommend updating the <code>-openmp</code> flag to more than 4 threads if you have more
                            available.
                            Personally, it took around 3 hours on 12 threads of my Ryzen 9 3900X.
                            <div className="code_block">
                                > recon-all -subjid {'${'}subject{'}'} -all -time -log logfile -nuintensitycor-3T -sd
                                $SUBJECTS_DIR -parallel -openmp 4
                            </div>

                            Finally, we'll concatenate the
                            reconstructed <code>lh.pial</code> and <code>rh.pial</code> models of our two
                            hemispheres and export them into a <code>cortical.stl</code> file.

                            <div className="code_block">
                                > mris_convert --combinesurfs $SUBJECTS_DIR/{'${'}subject{'}'}/surf/lh.pial
                                $SUBJECTS_DIR/{'${'}subject{'}'}/surf/rh.pial $SUBJECTS_DIR/cortical.stl
                            </div>

                            <h4 style={{marginTop: "1em"}}>3.3 Create the STL model of the subcortical regions</h4>

                            <div className="code_block">
                                # First, convert aseg.mgz into NIfTI format<br/>
                                > mri_convert $SUBJECTS_DIR/{'${'}subject{'}'}/mri/aseg.mgz
                                $SUBJECTS_DIR/subcortical.nii<br/>
                                <br/>
                                > # Second, binarize all Areas that you're not interested and inverse the
                                binarization<br/>
                                > mri_binarize--i $SUBJECTS_DIR/subcortical.nii --match 2 3 24 31 41 42 63 72 77 51 52
                                13 12 43 50 4 11 26 58 49 10 17 18 53 54 44 5 80 14 15 30 62 --inv --o
                                $SUBJECTS_DIR/bin.nii<br/>
                                <br/>
                                # Third, multiply the original aseg.mgz file with the binarized files<br/>
                                > fslmaths $SUBJECTS_DIR/subcortical.nii -mul $SUBJECTS_DIR/bin.nii
                                $SUBJECTS_DIR/subcortical.nii.gz<br/>
                            </div>

                            <div style={{color: 'red'}}>Below is still a work in progress...</div>

                            ToDo:<br/>
                            - Use FreeSurfer to extract the brain hemispheres' surface model from the NIfTI files.<br/>
                            - Extract the subcortical areas of interest.<br/>
                            - Combine the two meshes.<br/>
                            - Export into stl.<br/>

                            <div className="flex py-2"
                                 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <hr style={{width: '95%', padding: 0}}/>
                            </div>

                            <h3>Step 4: Cleanup</h3>

                            Make sure that there is no overlap between the subcortical and the hemispheres.<br/>
                            You will need to sculpt the subcortical with the ??? tool and check with the ??? tool to
                            reveal overlaps.<br/>
                            <br/>
                            To export each individual region (subcortical and left/right hemispheres) of your model,
                            open MeshLab:<br/>
                            Filters > Mesh Layers > Split in Connected Components<br/>
                            Then, delete the layers that you already have and use:<br/>
                            File > Export Mesh As... and make sure you select .stl.<br/>
                            Unfortunately there is no <i>undo</i> function in Meshlab, so you have to repeat this
                            process for the two hemispheres and the subcortical region to obtain your files.
                        </Col>
                    </Row>

                    <center>
                        <hr className="py-3" style={{width: '95%'}}/>
                    </center>

                    <h3>Step 5: Printing</h3>

                    ToDo:<br/>
                    - Printer settings recommendations (print orientation, infill, resolution, ...).<br/>
                    - Adding the magnets.<br/>

                    <Row className="justify-content-center">
                        <video src="/assets/blog/3D_print_your_brain/showcase.mp4" controls style={{maxWidth: "540px", maxHeight: "540px"}}/>
                    </Row>

                    ToDo: Give thanks to https://github.com/miykael/3dprintyourbrain<br/>
                </div>
            </Row>

            <Row style={{flex: 0, display: "flex"}}>
                <DiscussionEmbed
                    shortname='colintr-fr'
                    config={
                        {
                            url: window.location.href,
                            identifier: path,
                            title: page_title,
                            language: 'en'
                        }
                    }
                />
            </Row>
        </Container>
    );
};

export default PrintYourBrain;