import React, { Component, PropTypes } from 'react';
import Video from 'components/media/Video';

class VideoModuleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      autoplay: true,
      video: ''
    }; // this.state
    
    // this.updateVideo = this.updateVideo.bind(this);

  } // constructor

  componentDidMount() {
    const url = 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8';
    const wNVideoCanvasProps = [{
      SetFlashLiveStream: [{
        strUrl: url,
        strHeadline: 'Bike Video',
        strSummaryImageUrl: '',
        mobileStreamCcUrl: url,
        hasPreroll: true,
        strAdTag: 'Weather - Live Streaming',
        mobileStreams: [{
          url,
          type: 'video/mp4'
        }, {
          url: '',
          type: 'video/mp4'
        }, {
          url: '',
          type: 'video/mp4'
        }]
      }]
    }];
      
    this.setState({
      video: <Video clipId={1} autoPlay={true} wNVideoCanvasProps={wNVideoCanvasProps} />
    });
  }
  
  // updateVideo() {
  //   this.setState({
  //     id: 2,
  // 
  //     wNVideoCanvasProps: [{
  //       SetFlashLiveStream: [{
  //           strUrl: 'http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
  //           strHeadline: 'Video Test 2',
  //           strSummaryImageUrl: '',
  //           mobileStreamCcUrl: 'http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
  //           hasPreroll: true,
  //           strAdTag: 'Weather - Live Streaming',
  //           mobileStreams: [{
  //             url: 'http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
  //             type: 'video/mp4'
  //           }, {
  //             url: '',
  //             type: 'video/mp4'
  //           }, {
  //             url: '',
  //             type: 'video/mp4'
  //           }] // mobileStreams
  //         }] // SetFlashLiveStream
  //     }] // wNVideoCanvasProps
  // 
  //   });
  // }
  
  render(){
    return (
      <div className='VideoModuleDemo'>	
        <h1>Video Demo 25 - {this.state.id}</h1> 
	      {this.state.video}
      </div>
    );
	  
  }
}

export default VideoModuleDemo;