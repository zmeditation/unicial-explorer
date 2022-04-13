import React from 'react'
import { Navbar as Base } from 'decentraland-ui/dist/components/Navbar/Navbar'
import { JoinDiscord } from '../Button/JoinDiscord'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu'

export const Navbar = React.memo(function () {
  return (
    <Base
      isFullscreen
      leftMenu={
        <>
          <Menu.Item href="https://unicial.org">HOME</Menu.Item>
          <Menu.Item active href="https://play.unicial.org" onClick={(e) => e.preventDefault()}>
            PLAY
          </Menu.Item>
          <Menu.Item href="https://marketplace.unicial.org">{Base.defaultProps.i18n?.menu?.marketplace}</Menu.Item>
          {/* <Menu.Item href="https://builder.decentraland.org">{Base.defaultProps.i18n?.menu?.builder}</Menu.Item> */}
          <Menu.Item href="https://doc.unicial.org">{Base.defaultProps.i18n?.menu?.docs}</Menu.Item>
          {/* <Menu.Item href="https://events.decentraland.org">{Base.defaultProps.i18n?.menu?.events}</Menu.Item> */}
          {/* <Menu.Item href="https://dao.decentraland.org">{Base.defaultProps.i18n?.menu?.dao}</Menu.Item> */}
          <Menu.Item href="https://blog.unicial.org">{Base.defaultProps.i18n?.menu?.blog}</Menu.Item>
        </>
      }
      rightMenu={<JoinDiscord />}
    />
  )
})
