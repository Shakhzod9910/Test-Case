import Icon from "../Icon"
const Footer =()=>{
    return(
        <footer className="foter">
            <div className="footer-wrapper container">
                <ul className="footer-list">
                    <li>
                        <img src="/Assets/Images/logo.svg" alt="" />
                        <p>Our shop is the best choice for buying footwear.</p>
                        <ul className="contacts">
                            <li><Icon icon="twitter"/></li>
                            <li><Icon icon="facebook"/></li>
                            <li><Icon icon="instagram"/></li>
                        </ul>
                    </li>
                    <li>
                        <h2>Home</h2>
                        <ul>
                            <li><span>Support Center</span></li>
                            <li><span>Customer Support</span></li>
                            <li><span>Copyright</span></li>
                            <li><span>Popular Campaign</span></li>
                        </ul>
                    </li>
                    <li>
                        <h2>Our Information</h2>
                        <ul>
                            <li><span>Return Policy</span></li>
                            <li><span>Privacy Policy</span></li>
                            <li><span>Terms and Conditions</span></li>
                            <li><span>Site Map</span></li>
                            <li><span>Store Hours</span></li>
                        </ul>
                    </li>
                    <li>
                        <h2>My Account</h2>
                        <ul>
                            <li><span>Press Inquiries</span></li>
                            <li><span>Social Media Directories</span></li>
                            <li><span>Permission</span></li>
                            <li><span>Requests</span></li>
                        </ul>
                    </li>
                </ul>
                <p className="autored">© 2021 Shop. Made with love for Brightscout </p>
            </div>
        </footer>
    )
}
export default Footer