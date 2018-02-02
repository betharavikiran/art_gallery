import { Meteor } from 'meteor/meteor';
import Config from '../../../Utility/Config';

const config = { cloud_name: Config.public.cloudinary.cloudName };

if (Meteor.isServer) {
  Object.assign(config, {
    api_key: Config.cloudinary.apiKey,
    api_secret: Config.cloudinary.apiSecret,
  });
}

export default config;
