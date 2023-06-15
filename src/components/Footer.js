import '../index.css'

const Footer = () => {

    const date = new Date()
    const getYear = date.getFullYear()

    return (  
        <footer>
            <h2 className="footer-title">For more information, contact:</h2>
            <div className="footer-contact">
            <p className="footer-phone">0809 784 5065</p>
            <p className="footer-email">conference@thinkmint.ng</p>
            </div>
            <div className="footer-base">© { getYear } All rights reserved. Thinkmint.ng</div>
        </footer>
    );
}
 
export default Footer;