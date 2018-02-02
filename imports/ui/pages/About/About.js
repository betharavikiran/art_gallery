import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Masonry from 'react-masonry-css';

import CloudinaryImage from '../../components/CloudinaryImage/CloudinaryImage';

import './About.scss';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

class About extends React.Component {
  render() {
    const items = [
      { id: 1, name: 'My First Item', publicID: '0_n7jfqm' },
      { id: 2, name: 'Another item', publicID: '1_iqir1p' },
      { id: 3, name: 'Third Item', publicID: '2_lrk950' },
      { id: 4, name: 'Here is the Fourth', publicID: '3_obefga' },
      { id: 5, name: 'High Five', publicID: '4_byzf2h' },
      { id: 6, name: 'High Five', publicID: '5_d1ye9u' },
      { id: 7, name: 'High Five', publicID: '6_sbxnmc' },
      { id: 8, name: 'High Five', publicID: '7_itc5ww' },
      { id: 9, name: 'High Five', publicID: '8_sejcy8' },
      { id: 10, name: 'High Five', publicID: '9_mgden4' },
      { id: 11, name: 'High Five', publicID: '10_p6skov' },
      { id: 12, name: 'High Five', publicID: '11_fzswvb' },
      { id: 13, name: 'High Five', publicID: '12_sl0yae' },
      { id: 14, name: 'High Five', publicID: '13_vzi5zm' },
      { id: 15, name: 'High Five', publicID: '14_zdaant' },
      { id: 16, name: 'High Five', publicID: '15_n1eeqk' },
      { id: 17, name: 'High Five', publicID: '16_gfj2lz' },
      { id: 18, name: 'High Five', publicID: '17_ua4ayg' },
      { id: 19, name: 'High Five', publicID: '18_lw2dwi' },
      { id: 20, name: 'High Five', publicID: '19_h8vap5' },
      { id: 21, name: 'High Five', publicID: '20_jufun9' },
      { id: 22, name: 'High Five', publicID: '21_tr9uw0' },
      { id: 23, name: 'High Five', publicID: '22_taeufr' },
      { id: 24, name: 'High Five', publicID: '23_u1oydr' },
      { id: 25, name: 'High Five', publicID: '24_mo8gko' },
      { id: 26, name: 'High Five', publicID: '25_mwt7ls' },
      { id: 27, name: 'High Five', publicID: '26_xqpuz5' },
      { id: 28, name: 'High Five', publicID: '27_ec6yny' },
      { id: 29, name: 'High Five', publicID: '28_fdr69w' },
      { id: 30, name: 'High Five', publicID: '29_exun95' },
      { id: 31, name: 'High Five', publicID: '30_bkpwyy' },
    ];

    const myItems = items.map(item => <div className="Frame" key={item.id}><CloudinaryImage publicId={item.publicID} /></div>);


    return (
      <section className="about-page">
        <section className="module bg-dark-30">
          <Grid>
            <Row>
              <Col sm={6} smOffset={3} >
                <h2 className="artistic-title">Our creative work</h2>
                <div className="module-subtitle font-serif">Imaginative contributions from creative minds.</div>
              </Col>
            </Row>
            <Row>
              <Col sm={10} smOffset={1} >
                <div className="masonary-container" id="Frames">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {myItems}
                  </Masonry>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
      </section>
    );
  }
}

export default About;
