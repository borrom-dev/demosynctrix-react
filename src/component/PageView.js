import ReactGA from 'react-ga';
export const PageView = () => {  
    ReactGA.pageview(window.location.pathname + window.location.search);
}