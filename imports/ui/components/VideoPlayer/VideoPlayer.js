import React from 'react';
import YouTube from 'react-youtube';

import PropTypes from 'prop-types';

import './VideoPlayer.scss';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    const {
      videoId, height, width, mute, autoplay, loop, controls, start, opacity,
    } = props;

    this.state = {
      videoId,
      height,
      width,
      mute,
      autoplay,
      loop,
      controls,
      start,
      opacity,
      player: null,
    };

    this.onReady = this.onReady.bind(this);
  }

  onReady(event) {
    this.setState({
      player: event.target,
    });

    this.state.player.playVideo();
  }

  componentWillUnmount() {
    this.state.player.stopVideo();
  }

  render() {
    const opts = {
      height: this.state.height,
      width: this.state.width,
      playerVars: {
        autoplay: this.state.autoplay,
        loop: this.state.loop,
        opacity: this.state.opacity,
        controls: this.state.controls,
        start: this.state.start,
        playlist: this.state.videoId,
        mute: this.state.mute,
      },
    };

    return (
      <div className="video-background">
        <div className="video-foreground">
          <YouTube videoId={this.state.videoId} opts={opts} onReady={this.onReady} />
        </div>
      </div>
    );
  }
}


VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  mute: PropTypes.number,
  autoplay: PropTypes.number,
  loop: PropTypes.number,
  controls: PropTypes.number,
  start: PropTypes.number,
  opacity: PropTypes.number,
};

VideoPlayer.defaultProps = {
  height: '100%',
  width: '100%',
  mute: 1,
  autoplay: 1,
  loop: 1,
  controls: 0,
  start: 30,
  opacity: 0.5,
};
