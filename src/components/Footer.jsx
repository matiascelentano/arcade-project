import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div id='upperFooter'>
            <ul className='footerSocialMedia'>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-square-twitter"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
            </ul>
        </div>
        <div id='lowerFooter'>
            <ul>
                <li>Terminos y Condiciones</li>
                <li>Licencias</li>
                <li>Soporte</li>
            </ul>
            <p>Copyright<i className="fa-solid fa-copyright"></i></p>
            
        </div>
    </footer>
  )
}

export default Footer