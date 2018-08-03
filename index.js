import React, { Component, PropTypes } from 'react';
import Video from 'components/media/Video';

class VideoModuleDemo extends Component {
  constructor(props) {
    super(props);
	  
    this.wNVideoCanvasProps1 = [{
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
      }]; // wNVideoCanvasProps
	    
      this.wNVideoCanvasProps2 = [{
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
      }]; // wNVideoCanvasProps2
	  
	  
    this.state = {
      id: 1,
      autoplay: true,
      wNVideoCanvasPropsArray: [
        
        [{
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
          }]
          
          ,
          
          [{
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
          }]
        
        
      ],
      currentVideo: 0
    }; // this.state
    
  } // constructor
  
  render(){
    return (
      <div className='VideoModuleDemo'>	
        <h1>Video Demo 2 : {this.state.wNVideoCanvasPropsArray[this.state.currentVideo][0].SetFlashLiveStream[0].strHeadline}</h1>
	      <Video autoPlay={this.state.autoPlay} wNVideoCanvasProps={this.state.wNVideoCanvasPropsArray[this.state.currentVideo]} />
      </div>
    );
	  
  }
}

export default VideoModuleDemo;
