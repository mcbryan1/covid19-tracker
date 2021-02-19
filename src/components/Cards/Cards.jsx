import React from "react";
import "./Cards.css";
import CountUp from "react-countup";


const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
   
  if (!confirmed) {
    return (
      <div class="text-center text-primary spinner">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
            <div className="col-md-3 sm-4">
                <div className="card text-center fourheight">
                  <div className="data"></div>
                  <h3 className="text header">Active</h3>
                  <h3>
                    <CountUp
                      start={0}
                      end={confirmed.value - (deaths.value + recovered.value)}
                      duration={5}
                      separator=","
                    />
                  </h3>
                  <h5 className="text">
                    {new Date(lastUpdate).toDateString()}
                  </h5>
                  <h3>Active Cases</h3>
                </div>
              </div>
              
              <div className="col-md-3 sm-4">
                <div className="card text-center oneheight">
                  <div className="data"></div>
                  <h3 className="text header">Infected</h3>
                  <h3>
                    <CountUp
                      start={0}
                      end={confirmed.value}
                      duration={5}
                      separator=","
                    />
                  </h3>
                  <h5 className="text">
                    {new Date(lastUpdate).toDateString()}
                  </h5>
                  <h3>Infected </h3>
                </div>
              </div>

              <div className="col-md-3 sm-4">
                <div className="card text-center twoheight">
                  <div className="data"></div>
                  <h3 className="text header">Recovered</h3>
                  <h3>
                    <CountUp
                      start={0}
                      end={recovered.value}
                      duration={5}
                      separator=","
                    />
                  </h3>
                  <h5 className="text">
                    {new Date(lastUpdate).toDateString()}
                  </h5>
                  <h3>Recoveries</h3>
                </div>
              </div>

              <div className="col-md-3 sm-4">
                <div className="card text-center threeheight">
                  <div className="data"></div>
                  <h3 className="text header">Deaths</h3>
                  <h3>
                    <CountUp
                      start={0}
                      end={deaths.value}
                      duration={5}
                      separator=","
                    />
                  </h3>
                  <h5 className="text">
                    {new Date(lastUpdate).toDateString()}
                  </h5>
                  <h3>Death Counts</h3>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
