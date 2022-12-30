import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
  <>
     
      <div className="footer">
        <div className="footer-top">
          <h1>PCCOE ACM</h1>  
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-cols">
              <div className="columns">
                <h5>USEFUL LINKS</h5>

                <p> > HOME</p>
                <p> > ACM-HOME</p>
                <p> > ACM India - Home</p>
                <p> > ACM - XRDS</p>
                <p> > ACM Digital Library</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 footer-cols">
              <div className="columns">
                <h5>CONTACT US</h5>
                <p>
                  Pimpri Chinchwad College of Engineering.Near Akurdi Railway
                  Station Rd, Sector No. 26, Pradhikaran, Nigdi,
                  Pimpri-Chinchwad, Maharashtra 411044{" "}
                </p>
                <p>Email: acm@pccoepune.org</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-cols " id="div-map">
             
              <iframe
                class="gmap_iframe map"
                width="330"
                height="200"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=356&amp;height=494&amp;hl=en&amp;q= pimpri chinchwad college of engineering ,pune&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="social-media-icons">
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-facebook"></a>
        </div>

        <copyright>
          <p> Copyright &copy; {year} ACM PCCOE All Rights Reserved</p>
        </copyright>
      </div>
  
  </>
  );
} 

export default Footer;
