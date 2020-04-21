import React from "react"

import styled from 'styled-components'

const ContactSection = styled.div`
    padding: 100px 0px;
    background-color: #F9F9F9;

`

export default class Contact extends React.Component {
    render(){
        return(
            <ContactSection>
                Let's Chat!
            </ContactSection>
        )
    }
}