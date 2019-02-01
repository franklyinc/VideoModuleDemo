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
	<table className='VideoModuleDemo-Table'>
	  <tr>
	    <td className='VideoModuleDemo-col1' rowspan='3'>  
	      <span className='VideoModuleDemo-Video'>{this.state.video}</span>
	    </td>
	    <td className='VideoModuleDemo-col2'>  
	      <div className='VideoModuleDemo-Thumb VideoModuleDemo-Thumb1' onClick={this.updateVideo1}>
	      <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIGQ9Ik0zMCwwQzEzLjQ1OCwwLDAsMTMuNDU4LDAsMzBzMTMuNDU4LDMwLDMwLDMwczMwLTEzLjQ1OCwzMC0zMFM0Ni41NDIsMCwzMCwweiBNNDUuNTYzLDMwLjgyNmwtMjIsMTUgIEMyMy4zOTQsNDUuOTQxLDIzLjE5Nyw0NiwyMyw0NmMtMC4xNiwwLTAuMzIxLTAuMDM4LTAuNDY3LTAuMTE2QzIyLjIwNSw0NS43MTEsMjIsNDUuMzcxLDIyLDQ1VjE1YzAtMC4zNzEsMC4yMDUtMC43MTEsMC41MzMtMC44ODQgIGMwLjMyOC0wLjE3NCwwLjcyNC0wLjE1LDEuMDMxLDAuMDU4bDIyLDE1QzQ1LjgzNiwyOS4zNiw0NiwyOS42NjksNDYsMzBTNDUuODM2LDMwLjY0LDQ1LjU2MywzMC44MjZ6IiBmaWxsPSIjMDAwMDAwIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
	      <br/>Stream 1</div>
	    </td>
	  </tr>
	  <tr>  
	    <td className='VideoModuleDemo-col2'>
                <div className='VideoModuleDemo-Thumb VideoModuleDemo-Thumb2' onClick={this.updateVideo2}>&#x25B6;<br/>Stream 2</div>
	    </td>
	  </tr>
	  <tr>
	    <td className='VideoModuleDemo-col2'>
            	<div className='VideoModuleDemo-Thumb VideoModuleDemo-Thumb3' onClick={this.updateVideo3}>&#x25B6;<br/>Stream 3</div>
	    </td>
	  </tr>
        </table>
      </div>
    );
	  
  }
}

export default VideoModuleDemo;
