import React from "react"
import { Helmet } from "react-helmet"

export default class PageWrapper extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <html lang="en" />
                    <meta charSet="utf-8" />
                    <meta name="description" content="Nicholas Chung-Hun's Personal Website" />

                    <meta property="og:title" content="Nicholas Chung-Hun's Personal Website" />
                    <meta property="og:url" content="https://nicholaschung-hun.me" />
                    
                    <link rel="shortcut icon" type="image/png" href="" />

                    <title>Nicholas Chung-Hun</title>
                </Helmet>
                {this.props.children}
            </>
        )
    }
}