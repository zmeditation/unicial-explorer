import React from 'react'
import './LoadingRender.css'

export const LoadingRender = React.memo(function () {
    return (
        <div className="LoadingRender">
            <img alt="loading" src={process.env.PUBLIC_URL + '/images/loader.gif'} width="150" height="150" />
            <p>We are downloading the latest version of Unicial. You'll be up and running in a few seconds!</p>
        </div>
    )
})
