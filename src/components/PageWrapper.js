import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../assets/favicon.png"

const PageWrapper = (props) => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <meta charSet="utf-8" />
                <meta name="description" content="Nicholas Chung-Hun's Personal Website" />

                <meta property="og:title" content="Nicholas Chung-Hun's Personal Website" />
                <meta property="og:url" content="https://nicholaschung-hun.me" />
                
                <link rel="icon" type="image/png" href={favicon} />

                <title>Nicholas Chung-Hun</title>
            </Helmet>
            {props.children}
        </>
    )
}

export default PageWrapper