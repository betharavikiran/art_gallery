import cloudinary from 'cloudinary-core';
import config from './config';

export default cloudinary.Cloudinary.new(config);
