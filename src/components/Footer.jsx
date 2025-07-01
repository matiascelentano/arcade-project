import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div id='upperFooter'>
                <ul className='footerSocialMedia'>
                    <li className="footerSocialLinks"><i className="fa-brands fa-instagram"></i></li>
                    <li className="footerSocialLinks"><i className="fa-brands fa-facebook"></i></li>
                    <li className="footerSocialLinks"><i className="fa-brands fa-square-twitter"></i></li>
                    <li className="footerSocialLinks"><i className="fa-brands fa-youtube"></i></li>
                </ul>
            </div>
            <div id='lowerFooter'>
                <div id="lowerFooterLinkContainer">
                    <ul>
                        <li><h5>Seccion 1</h5></li>
                        <li><p>Texto 1</p></li>
                        <li><p>Texto 2</p></li>
                        <li><p>Texto 3</p></li>
                    </ul>
                    <ul>
                        <li><h5>Seccion 2</h5></li>
                        <li><p>Texto 1</p></li>
                        <li><p>Texto 2</p></li>
                        <li><p>Texto 3</p></li>
                    </ul>
                    <ul>
                        <li><h5>Seccion 3</h5></li>
                        <li><p>Texto 1</p></li>
                        <li><p>Texto 2</p></li>
                        <li><p>Texto 3</p></li>
                    </ul>
                    <ul>
                        <li><h5>Seccion 4</h5></li>
                        <li><p>Texto 1</p></li>
                        <li><p>Texto 2</p></li>
                        <li><p>Texto 3</p></li>
                    </ul>
                </div>

                <p className="lowerFooterBottomText">Copyright<i className="fa-solid fa-copyright"></i></p>

            </div>
        </footer>
    )
}

export default Footer