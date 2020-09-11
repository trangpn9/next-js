import Head from 'next/head'

import 'styles/Home.module.css'
import SlideShow from 'components/SlideShow'
import SlideCustomer from 'components/SlideCustomer'
import { Container, Row, Col } from 'react-bootstrap'
import MapComponent from 'components/Map'

import { withTranslation } from 'i18n'


const Home:any = ({ t }) => {
  return (
    <div>
      <Head>
        <title>EMS Vietnam</title>        
      </Head>

      <SlideShow/>  

      <Container fluid>                       
        <h2 className="uppercase">{t('title')}</h2>      
        <Row>
          <Col className="col4Custom">col-4</Col>
          <Col className="col4Custom">col-4</Col>
          <Col className="col4Custom">col-4</Col>
          <Col className="col4Custom">col-4</Col>        
        </Row>  
      </Container>
      
      <SlideCustomer/>      
      
      <Container fluid>
        <h2>Map</h2>
        <Row>
          <Col style={{display: "block"}}>
            <MapComponent/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

// Home.propTypes = {
//   t: PropTypes.func.isRequired,
// }

export default withTranslation()(Home)