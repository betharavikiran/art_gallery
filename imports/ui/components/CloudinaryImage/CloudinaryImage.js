import React from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Cloudinary from '../../../api/Services/Integrations/Cloudinary/forBrowser';


export default class CloudinaryImage extends React.Component {
  constructor(props) {
    super(props);
    const { publicId, classNames, isCircle } = this.props;
    this.state = {
      imgSrc: Cloudinary.url(publicId),
      classNames,
      isCircle,
    };
  }
  render() {
    return (
      <Image src={this.state.imgSrc} className={this.state.classNames} responsive circle={this.state.isCircle} />
    );
  }
}

CloudinaryImage.propTypes = {
  publicId: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
  isCircle: PropTypes.bool,
};


CloudinaryImage.defaultProps = {
  isCircle: false,
};
