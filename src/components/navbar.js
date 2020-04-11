import React from "react"
import {Navbar, Nav} from "react-bootstrap"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledNavbar = styled(Navbar)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    height: 3 rem;
    display: flex;
    flex-direction: row;

`
const Transition = styled.div`
    .active {
        visibility: visible;
        transition: all 200ms ease-in;
    }
    .hidden {
        visibility: hidden;
        transition: all 200ms ease-out;
        transform: translate(0, -100%)
    }
`

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            scrollPos: 0
        }

        this.handleScroll = this.handleScroll.bind(this)
    }
    
    static propTypes = {
        brand: PropTypes.shape({
            name: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired
        }),
        links: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                to: PropTypes.string.isRequired
            })
        )
    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll() {
        const scrollPos = this.state.scrollPos
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > scrollPos
        })
    }

    render(){
        const { brand, links } = this.props;
        const NavLinks = () =>
            links.map((link, index) => (
                <Nav.Link key={index} href={link.to}>
                    {link.name}
                </Nav.Link>
            ))


        return (
            <Transition>
                <StyledNavbar className={this.state.show ? "active" : "hidden"}>
                    <Navbar.Brand href={brand.to}>{brand.name}</Navbar.Brand>
                        <Nav>
                            <NavLinks />
                        </Nav>
                </StyledNavbar>
            </Transition>
        )
    }
}