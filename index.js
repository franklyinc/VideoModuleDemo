import React, { Component, PropTypes } from 'react';
import Video from 'components/media/Video';

class VideoModuleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      id: 1,
      autoplay: true,
      wNVideoCanvasProps: [{
        SetFlashLiveStream: [{
            strUrl: 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8',
            strHeadline: 'Encoder 2 Test CBS Stream',
            strSummaryImageUrl: '',
            mobileStreamCcUrl: 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8',
            hasPreroll: true,
            strAdTag: 'Weather - Live Streaming',
            mobileStreams: [{
              url: 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8',
              type: 'video/mp4'
            }, {
              url: '',
              type: 'video/mp4'
            }, {
              url: '',
              type: 'video/mp4'
            }] // mobileStreams
          }] // SetFlashLiveStream
      }] // wNVideoCanvasProps
    }; // this.state
    
    setTimeout(function(){ consle.log("*** test") }, 10000);

  } // constructor
  
  render(){
    return (
      <div className='VideoModuleDemo'>	
        <h1>Video Demo 12</h1>
	      <Video clipId={this.state.id} autoPlay={this.state.autoPlay} wNVideoCanvasProps={this.state.wNVideoCanvasProps} />
      </div>
    );
	  
  }
}

export default VideoModuleDemo;