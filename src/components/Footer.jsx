import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="container-fluid footer">
        <div className="row ">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div>
              <div className="text">
                <h6 className="text-center">
                  &copy; Solomon McBryan. 2020 All Rights Reserved.{" "}
                 
                    <a href="https://github.com/mcbryan1"><i className="fa fa-github"></i></a> 
                  
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
