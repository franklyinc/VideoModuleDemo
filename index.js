import React, { Component, PropTypes } from 'react';
import Video from 'components/media/Video';
// import AdvertisementUnit from 'components/AdvertisementUnit';
// import axios from 'axios';

class VideoModuleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ''
    };
    
    this.updateVideo = this.updateVideo.bind(this);

  }

  componentDidMount() { // set initial video
    const url = 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8';
    const wNVideoCanvasProps = [{
      SetFlashLiveStream: [{
        strUrl: url,
        strHeadline: 'Bike Video (1)',
        strAdTag: 'Weather - Live Streaming',
        hasPreroll: true,
        strSummaryImageUrl: '',
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
	  
//   axios.get('https://s3.amazonaws.com/frankly-news-web/test/playlist.json')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });

  }
  
  async updateVideo() {
    
    const url = 'http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8';
    const wNVideoCanvasProps = [{
      SetFlashLiveStream: [{
        strUrl: url,
        strHeadline: 'Test Video (2)',
        strAdTag: 'Weather - Live Streaming',
        hasPreroll: true,
        strSummaryImageUrl: '',
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
    
    await this.setState({ video: '' }); // clear the current video before setting a new one.

    // clipId is required if you are not using FRN_rawResponses
    this.setState({
      video: <Video clipId={2} autoPlay={true} wNVideoCanvasProps={wNVideoCanvasProps} />  
    });
  }
  
  render(){
    return (
      <div className='VideoModuleDemo'>	
        <h1>Video Demo 3</h1> 
        <button onClick={this.updateVideo}>Video2</button>
	      {this.state.video}
	    
      </div>
    );
	  
  }
}

export default VideoModuleDemo;
