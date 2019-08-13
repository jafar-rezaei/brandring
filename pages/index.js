import Head from 'next/head';
import Carousel from '@brainhubeu/react-carousel';
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../Components/Layout';
import '@brainhubeu/react-carousel/lib/style.css';


export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Brandring </title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Container className="container">
          <Row className="indexBoxes">
            <Col sm={3}>
              <a className="heroBox carpet"><span className="caption">Carpet</span></a>
            </Col>
            <Col sm={3}>
              <a className="heroBox art"><span className="caption">Handicrafts</span></a>
            </Col>
            <Col sm={3}>
              <a className="heroBox jewellery"><span className="caption">Jewellery</span></a>
            </Col>
            <Col sm={3}>
              <a className="heroBox visual"><span className="caption">Visual arts</span></a>
            </Col>

          </Row>
        </Container>
        <Container className="container">
          <Row>
            <Col sm={8}>
              <div className="holder_white">
                <h2>Our services</h2>
                <Container>
                  <Row>
                    <Col sm={6}>
                      <div className="card ">
                        <div className="cardImage"><img src="/static/img/cards/1.jpeg" alt="Reliablity" /></div>
                        <div className="cardTitle">Make it reliable</div>
                        <div className="cardContent">We make it reliable to buy hand made products </div>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="card">
                        <div className="cardImage"><img src="/static/img/cards/2.jpg" alt="Reliablity" /></div>
                        <div className="cardTitle">Make it reliable</div>
                        <div className="cardContent">We make it reliable to buy hand made products </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <div className="card">
                        <div className="cardImage"><img src="/static/img/cards/3.jpg" alt="Reliablity" /></div>
                        <div className="cardTitle">Make it reliable</div>
                        <div className="cardContent">We make it reliable to buy hand made products </div>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="card">
                        <div className="cardImage"><img src="/static/img/cards/4.jpg" alt="Reliablity" /></div>
                        <div className="cardTitle">Make it reliable</div>
                        <div className="cardContent">We make it reliable to buy hand made products </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col sm={4}>

              <div className="holder_white">
                <Carousel arrows infinite>
                  <img src="https://picsum.photos/500/300" />
                  <img src="https://picsum.photos/500/300" />
                  <img src="https://picsum.photos/500/300" />
                </Carousel>
              </div>

            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
