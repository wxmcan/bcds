import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {

  render() {
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2>GitHub</h2>
            <a target="_blank " href="https://github.com/bcds-hackathon/bcds">BCDS</a>
            <a target="_blank" href="https://github.com/HydraChain/hydrachain">Hydrachain</a>
          </li>
          <li>
            <h2>关于我们</h2>
            <a href="https://github.com/dapplab">DappLab Team</a>
          </li>
          <li>
            <h2>联系我们</h2>
            <a target="_blank" href="#">反馈和建议</a>
            <a target="_blank" href="#">讨论</a>
            <a target="_blank" href="#">报告 Bug</a>
          </li>
          <li>
            <h3>2016 Shanghai Blockchain Hackathon</h3>
            <h3>版本：<span id="versions-select">0.1.0</span></h3>
          </li>
        </ul>
      </footer>
    );
  }

}

export default Footer;