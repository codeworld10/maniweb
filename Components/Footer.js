import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="fote">
        <div className="links">
          <div className="lin_ku">
            <Link href="/privacy" passHref className='plcy'>
              Privacy
            </Link>
          </div>
        </div>
        <div className="footer">
          <p className="ftrpara"> © {new Date().getFullYear()} ManiWebDev All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
