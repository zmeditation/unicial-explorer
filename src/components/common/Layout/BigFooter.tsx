import React from 'react'
import { Container } from './Container'
import { Reddit } from '../Icon/Reddit'
import { Github } from '../Icon/Github'
import { Twitter } from '../Icon/Twitter'
import { Discord } from '../Icon/Discord'

import './BigFooter.css'
import { injectVersions } from '../../../utils/rolloutVersions'

const year = Math.max(new Date().getFullYear(), 2020)

export const BigFooter = () => {
  let versions = injectVersions({})

  return (
    <footer className="big-footer">
      <Container>
        <div>
          <div>
            <h4>NEED SUPPORT?</h4>
          </div>
          <div>
            <a className="big-footer-button" href="https://discord.gg/JEPcm4YD" target="about:blank">
              <Discord /> Join our Discord
            </a>
          </div>
        </div>
        <div>
          <div>
            <h4>FOLLOW US</h4>
          </div>
          <div>
            <a className="big-footer-icon" href="https://www.reddit.com/r/ZilionixxBlockchain" target="about:blank">
              <Reddit />
            </a>
            <a className="big-footer-icon" href="http://github.com/unicial" target="about:blank">
              <Github />
            </a>
            <a className="big-footer-icon" href="https://twitter.com/zilionixx" target="about:blank">
              <Twitter />
            </a>
          </div>
        </div>
      </Container>
      <Container>
        <p className="copyright" title={'Versions: ' + JSON.stringify(versions, null, 2)}>
          © {year} WinWin team
        </p>
      </Container>
    </footer>
  )
}
