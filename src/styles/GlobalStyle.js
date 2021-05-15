import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`    
    body {
      margin: 0;
      font-family: 'Inter',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .slide-in-bottom {
      -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
              animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes slide-in-bottom {
      0% {
        -webkit-transform: translateY(30px);
                transform: translateY(30px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-bottom {
      0% {
        -webkit-transform: translateY(30px);
                transform: translateY(30px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
      }
    }

    .fade-in {
      -webkit-animation: fade-in 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
              animation: fade-in 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    @-webkit-keyframes fade-in {
      0% {
        -webkit-transform: translateZ(-80px);
                transform: translateZ(-80px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
      }
    }
    @keyframes fade-in {
      0% {
        -webkit-transform: translateZ(-80px);
                transform: translateZ(-80px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
      }
    }
    
    
    .slide-in-scroll {
      opacity: 0;
      transform: translateY(20vh);
      visibility: hidden;
      transition: opacity 0.6s ease-out, transform 1.2s ease-out;
      will-change: opacity, visibility;
    }

    .slide-in-scroll.is-visible {
      opacity: 1;
      transform: none;
      visibility: visible;
    }

    .slide-in-right-scroll {
      opacity: 0;
      transform: translateY(20vh);
      visibility: hidden;
      transition: opacity 0.6s ease-out, transform 1.2s ease-out;
      will-change: opacity, visibility;
    }

    .slide-in-right-scroll.is-visible {
      opacity: 1;
      transform: none;
      visibility: visible;
    }
    

    a:hover {
      text-decoration: none;
    }

    @media only screen and (min-width: 600px) {
      .filter-container {
        display: inline-block;
      }
    }

    h3 {
      font-size: 25px;
      font-family: "Karla", sans-serif;
      font-weight: 600;
    }

`

export default GlobalStyle

/* Dark Theme Colours
Base Colour: #121212
Accent Colour: #109322

*/