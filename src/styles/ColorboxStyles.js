import chroma from 'chroma-js';
export default {
   colorBox: {
       width: '20%',
       height: props => props.showingFullPalette ? '25%' : '50%',
       margin: '0 auto',
       display: 'inline-block',
       position: 'relative',
       cursor: 'pointer',
       marginBottom: '-5px',
       '&:hover button': {
           opacity: '1',
           transition: '0.5s'
       }
   },
   copyText: {
       color: props =>
           chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
   },
   colorName: {
       color: props =>
           chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
   },
   seeMore: {
       color: props => 
           chroma(props.background).luminance() >= 0.7 ? 'rbga(0, 0, 0, 0.6)' : 'white',
       background: 'rgba(255, 255, 255, 0.3)',
       position: 'absolute',
       border: 'none',
       right: '0px',
       bottom: '0px',
       width: '60px',
       height: '30px',
       textAlign: 'center',
       lineHeight: '30px',
       textTransform: 'uppercase'
   },
   copyButton: {
       color: props =>
           chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
       height: '30px',
       width: '100px',
       position: 'absolute',
       display: 'inline-block',
       top: '50%',
       left: '50%',
       marginLeft: '-50px',
       marginTop: '-15px',
       textAlign: 'center',
       outline: 'none',
       background: 'rgba(255, 255, 255, 0.3)',
       fontSize: '1rem',
       lineHeight: '30px',
       textTransform: 'uppercase',
       border: 'none',
       textDecoration: 'none',
       opacity: '0'
   },
   boxContent: {
       position: 'absolute',
       width: '100%',
       left: '0px',
       bottom: '0px',
       padding: '10px',
       color: 'black',
       letterSpacing: '1px',
       textTransform: 'uppercase',
       fontSize: '12px'
   },
   copyOverlay: {
       opacity: '0',
       zIndex: '0',
       width: '100%',
       height: '100%',
       transform: 'scale(0.1)',
       transition: 'transform 0.5s ease-in-out',
   },
   showOverlay: {
       opacity: '1',
       zIndex: '10',
       position: 'absolute',
       transform: 'scale(50)'
   },
   copyMessage: {
       position: 'fixed',
       left: '0',
       right: '0',
       top: '0',
       bottom: '0',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'column',
       fontSize: '4rem',
       transform: 'scale(0.1)',
       opacity: '0',
       color: 'white',
       '& h1': {
           fontWeight: '400',
           textShadow: '1px 2px black',
           background: 'rgba(255, 255, 255, 0.2)',
           width: '100%',
           textAlign: 'center',
           marginBottom: '0',
           padding: '1rem',
           textTransform: 'uppercase',
       },
       '& p': {
           fontWeight: '100',
           fontSize: '2rem'
       }
   },
   showMessage: {
       opacity: '1',
       transform: 'scale(1)',
       zIndex: '11',
       transition: 'all 0.4s ease-in-out',
       transitionDelay: '0.3s',
   }
};