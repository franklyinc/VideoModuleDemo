import React, { Component, PropTypes } from 'react';
import Video from 'components/media/Video';

class VideoModuleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ''
    };
    
    this.updateVideo1 = this.updateVideo1.bind(this);
    this.updateVideo2 = this.updateVideo2.bind(this);
    this.updateVideo3 = this.updateVideo3.bind(this);

  }

  componentDidMount() { // set initial video
    const url = 'https://channels-1.video.franklyinc.com/out/i/10755.m3u8';
    const wNVideoCanvasProps = [{
      SetFlashLiveStream: [{
        strUrl: url,
        strHeadline: 'Livestream 1',
        strAdTag: 'News',
        hasPreroll: false,
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
  }
  
  async updateVideo1() {
    
    const url = 'https://channels-1.video.franklyinc.com/out/i/10755.m3u8';
    const wNVideoCanvasProps = [{
      SetFlashLiveStream: [{
        strUrl: url,
        strHeadline: 'Livestream 1',
        strAdTag: 'News',
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
      video: <Video clipId={1} autoPlay={true} wNVideoCanvasProps={wNVideoCanvasProps} />  
    });
  }
	
  async updateVideo2() {
    
    const url = 'https://channels-1.video.franklyinc.com/out/i/6989.m3u8';
    const wNVideoCanvasProps = [{
      SetFlashLiveStream: [{
        strUrl: url,
        strHeadline: 'Livestream 2',
        strAdTag: 'News',
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
	
  async updateVideo3() {
    
    const url = 'https://channels-1.video.franklyinc.com/out/i/4926.m3u8';
    const wNVideoCanvasProps = [{
      SetFlashLiveStream: [{
        strUrl: url,
        strHeadline: 'Livestream 3',
        strAdTag: 'News',
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
      video: <Video clipId={3} autoPlay={true} wNVideoCanvasProps={wNVideoCanvasProps} />  
    });
  }	
  
  render(){
    return (
      <div className='VideoModuleDemo'>	
        <h1>Video Demo 7</h1> 
	<table>
	  <tr>
	    <td>  
	      <span className='VideoModuleDemo-Video'>{this.state.video}</span>
	    </td>
	    <td>
		<span className='VideoModuleDemo-Thumb'><a onClick={this.updateVideo1}>Video 1</a></span>
                <span className='VideoModuleDemo-Thumb'><a onClick={this.updateVideo2}>Video 2</a></span>
            	<span className='VideoModuleDemo-Thumb'><a onClick={this.updateVideo3}>Video 3</a></span>
	    </td>
	  </tr>
        </table>
      </div>
    );
	  
  }
}

export default VideoModuleDemo;
