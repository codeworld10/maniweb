
import Link from "next/link"
function Footer() {
    return (
        <>
        <footer className="fote">
        <div className="links">
            <div className="lin_ku">
            <Link href="/privacy">
                <a className="plcy">Privacy Policy</a>
              </Link>
            </div>
            <div className="term">
            <Link href="/privacy">
                <a className="trm">Terms</a>
              </Link>
            </div>
            
          
        </div>
        <div className='footer'>
        <p className='ftrpara'>© 2022 ManiWebDev All rights reserved</p>  
        </div>
        </footer>
        </>
    )
}

export default Footer
