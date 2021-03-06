export default {
   Palette: {
       height: '100vh',
       display: 'flex',
       flexDirection: 'column',
       overflowX: 'hidden',
       overflowY: 'hidden'
   },
   colors: {
       height: '90%'
   },
   goBack: {
       width: '20%',
       height: '50%',
       margin: '0 auto',
       display: 'inline-block',
       position: 'relative',
       cursor: 'pointer',
       marginBottom: '-5px',
       opactity: '1',
       backgroundColor: 'black',
       '& a': {
           color: 'white',
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
       }
   }
};