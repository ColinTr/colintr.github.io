import {Row} from "react-bootstrap";

const Footer = () => {
    return (
        <div style={{width: "100%", backgroundColor: "white"}} className="d-flex justify-content-center">
            <Row style={{maxWidth: "1200px", width: "100%"}} className="my-3 d-flex justify-content-center">
                <div  className="text-center">
                    © 2024 Colin Troisemaine. This webpage is hosted on  <a rel="noreferrer" target="_blank" href="https://pages.github.com/" style={{color: '#33b38d'}}>GitHub Pages</a> and is open source. View the source code on <a rel="noreferrer" target="_blank" href="https://github.com/ColinTr/colintr.github.io/tree/master" style={{color: '#33b38d'}}>GitHub</a>.
                </div>
            </Row>
        </div>
    );
};

export default Footer;