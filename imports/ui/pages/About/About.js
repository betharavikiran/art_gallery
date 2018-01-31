import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Masonry from 'react-masonry-css';

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
      { id: 1, name: 'My First Item', img: 'img/about/0.jpg' },
      { id: 2, name: 'Another item', img: 'img/about/1.jpg' },
      { id: 3, name: 'Third Item', img: 'img/about/2.jpg' },
      { id: 4, name: 'Here is the Fourth', img: 'img/about/3.jpg' },
      { id: 5, name: 'High Five', img: 'img/about/4.jpg' },
      { id: 6, name: 'High Five', img: 'img/about/5.jpg' },
      { id: 7, name: 'High Five', img: 'img/about/6.jpg' },
      { id: 8, name: 'High Five', img: 'img/about/7.jpg' },
      { id: 9, name: 'High Five', img: 'img/about/8.jpg' },
      { id: 10, name: 'High Five', img: 'img/about/9.jpg' },
      { id: 11, name: 'High Five', img: 'img/about/10.jpg' },
      { id: 12, name: 'High Five', img: 'img/about/11.jpg' },
      { id: 13, name: 'High Five', img: 'img/about/12.jpg' },
      { id: 14, name: 'High Five', img: 'img/about/13.jpg' },
      { id: 15, name: 'High Five', img: 'img/about/14.jpg' },
      { id: 16, name: 'High Five', img: 'img/about/15.jpg' },
      { id: 17, name: 'High Five', img: 'img/about/16.jpg' },
      { id: 18, name: 'High Five', img: 'img/about/17.jpg' },
      { id: 19, name: 'High Five', img: 'img/about/18.jpg' },
      { id: 20, name: 'High Five', img: 'img/about/19.jpg' },
      { id: 21, name: 'High Five', img: 'img/about/20.jpg' },
      { id: 22, name: 'High Five', img: 'img/about/21.jpg' },
      { id: 23, name: 'High Five', img: 'img/about/22.jpg' },
      { id: 24, name: 'High Five', img: 'img/about/23.jpg' },
      { id: 25, name: 'High Five', img: 'img/about/24.jpg' },
      { id: 26, name: 'High Five', img: 'img/about/25.jpg' },
      { id: 27, name: 'High Five', img: 'img/about/26.jpg' },
      { id: 28, name: 'High Five', img: 'img/about/27.jpg' },
      { id: 29, name: 'High Five', img: 'img/about/28.jpg' },
      { id: 30, name: 'High Five', img: 'img/about/29.jpg' },
      { id: 31, name: 'High Five', img: 'img/about/30.jpg' },
    ];

    const myItems = items.map(item => <div key={item.id}><Image src={item.img} /></div>);


    return (
      <section className="about-page">
        <div className="container">
          <div className="titan-caption">
            <div className="caption-content team-content">
              <Grid>
                <Row>
                  <Col sm={6} smOffset={3} >
                    <h2 className="module-title font-alt">Our creative work</h2>
                    <div className="module-subtitle font-serif">Imaginative contributions from creative minds.</div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={10} smOffset={1} >
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className="my-masonry-grid"
                      columnClassName="my-masonry-grid_column"
                    >
                      {myItems}
                    </Masonry>
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
