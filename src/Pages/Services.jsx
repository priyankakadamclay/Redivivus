import React, { useState } from 'react';

function Services() {
  const [activeTab, setActiveTab] = useState('web_dev');

  return (
    <>
      <div className="container-fluid p-2 bg-dark text-white text-start">
        <p>Services</p>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ul className="nav flex-column nav-pills">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'web_dev' ? 'active' : ''}`}
                  data-bs-toggle="pill"
                  href="#web_dev"
                  onClick={() => setActiveTab('web_dev')}
                >
                  Web Development
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'web3_dev' ? 'active' : ''}`}
                  data-bs-toggle="pill"
                  href="#web3_dev"
                  onClick={() => setActiveTab('web3_dev')}
                >
                  Web3 Development
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'iot' ? 'active' : ''}`}
                  data-bs-toggle="pill"
                  href="#iot"
                  onClick={() => setActiveTab('iot')}
                >
                  Internet of Things
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'ui_ux' ? 'active' : ''}`}
                  data-bs-toggle="pill"
                  href="#ui_ux"
                  onClick={() => setActiveTab('ui_ux')}
                >
                  UI/UX Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'dev' ? 'active' : ''}`}
                  data-bs-toggle="pill"
                  href="#dev"
                  onClick={() => setActiveTab('dev')}
                >
                  Developer Hiring
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-9 p-3 bg-grey tab-content">
            <div id="web_dev" className={`tab-pane fade ${activeTab === 'web_dev' ? 'show active' : ''}`}>
              <h3>Web Development</h3>
            <ul>
                <li>Front-End Development</li>
                <li>Back-End Development</li>
                <li>E-Commerce Solutions</li>
                <li>Content Management Systems (CMS)</li>
                <li>Web Maintenance & Support</li> 
            </ul>
            </div>
            <div id="web3_dev" className={`tab-pane fade ${activeTab === 'web3_dev' ? 'show active' : ''}`}>
              <h3>Web3 Development</h3>
             <ul>
                <li>Blockchain Development</li>
                <li>Smart Contracts  </li>
                <li>Token Development</li>
                <li>Decentralized Finance (DeFi)</li>
                <li>NFT Development</li>
             </ul>
            </div>
            <div id="iot" className={`tab-pane fade ${activeTab === 'iot' ? 'show active' : ''}`}>
              <h3>Internet of Things</h3>
              <ul>
                <li>IoT Device Integration</li>
                <li>IoT Platform Development</li>
                <li>Smart Home Solutions</li>
                <li>Industrial IoT (IIoT)</li>
                <li>IoT Security</li>
              </ul>
            </div>
            <div id="ui_ux" className={`tab-pane fade ${activeTab === 'ui_ux' ? 'show active' : ''}`}>
              <h3>UI/UX Design</h3>
              <ul>
                <li>User Interface (UI) Design</li>
                <li>User Experience (UX) Design </li>
                <li>Prototyping & Wireframing</li>
                <li>Usability Testing</li>
                <li>Design System Development</li>
              </ul>
            </div>
            <div id="dev" className={`tab-pane fade ${activeTab === 'dev' ? 'show active' : ''}`}>
              <h3>Developer Hiring</h3>
              <ul>
                <li>Dedicated Developer Teams</li>
                <li>Contract-Based Hiring</li>
                <li>Skill-Based Recruitment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
    </>
  );
}

export default Services;
