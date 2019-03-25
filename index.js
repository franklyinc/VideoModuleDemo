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
    this.updateVideo = this.updateVideo.bind(this);
    this.clearVideo = this.clearVideo.bind(this);
    
    this.videoPlaylist = [
      'https://channels-1.video.franklyinc.com/out/i/15813.m3u8',
      'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
    ]

  }
  shouldComponentUpdate() { 
    console.log("*** shouldComponentUpdate()");
  	return false;
  }
  componentWillMount() { // set initial video
    console.log("*** componentWillMount()");
    const url = this.videoPlaylist[0];
    const wNVideoCanvasProps = [{
      SetFlashLiveStream: [{
        strUrl: url,
        strHeadline: 'Livestream',
        strAdTag: 'News',
        hasPreroll: false,
        strSummaryImageUrl: '',
        mobileStreams: [{
          url: '',
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
	
  async clearVideo() {
    console.log("*** clearVideo()");
    if (FranklyVideoPlayerList && FranklyVideoPlayerList[0] && FranklyVideoPlayerList[0].playerInfo && FranklyVideoPlayerList[0].playerInfo.playerId) {
	videojs(FranklyVideoPlayerList[0].playerInfo.playerId).dispose();
        FranklyVideoPlayerList[0].enabled = false;
        FranklyVideoPlayerList.splice(0,1);
	await this.setState({ video: '' }); // clear the current video
    }
  }
  
  async updateVideo(url) {
    console.log("*** updateVideo(), url:", url);
    if (FranklyVideoPlayerList && FranklyVideoPlayerList[0] && FranklyVideoPlayerList[0].playerInfo && FranklyVideoPlayerList[0].playerInfo.playerId) {
      videojs(FranklyVideoPlayerList[0].playerInfo.playerId).src(url);
      videojs(FranklyVideoPlayerList[0].playerInfo.playerId).play(); // this is a hack. no update to analytics/etc.
//       FranklyVideoPlayerList[0].playerInfo.canFireResumeAfterPause = false;
//       FranklyVideoPlayerList[0].playerInfo.loadInitialVideo(true);
    }
  }

  async updateVideo1() {
    console.log("*** updateVideo1()");
    this.updateVideo(this.videoPlaylist[0]);
  }
	
  async updateVideo2() {
    console.log("*** updateVideo2()");
// 	  this.updateVideo('https://channels-1.video.franklyinc.com/out/i/6989.m3u8');
        this.updateVideo(this.videoPlaylist[1]);

  }
	
  async updateVideo3() {
        console.log("*** updateVideo3()");
// 	  this.updateVideo('https://1cfed095bf82411d8d4a38bed11fa674.mediatailor.us-east-1.amazonaws.com/v1/master/1d83eb30e3b0c3924fb4496062b92664bd531371/Fox-WAGA/83.m3u8');
        this.updateVideo(this.videoPlaylist[2]);

  }	
  
  render(){
    return (
	    
<div className="vidContainer">
  <div className="vidMain"><span className='VideoModuleDemo-Video'>{this.state.video}</span></div>
  <div className="vid1">
    <div className='VideoModuleDemo-Thumb VideoModuleDemo-Thumb1' onClick={this.updateVideo1}>
	        <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cGF0aCBkPSJNMzAsMEMxMy40NTgsMCwwLDEzLjQ1OCwwLDMwczEzLjQ1OCwzMCwzMCwzMHMzMC0xMy40NTgsMzAtMzBTNDYuNTQyLDAsMzAsMHogTTQ1LjU2MywzMC44MjZsLTIyLDE1ICBDMjMuMzk0LDQ1Ljk0MSwyMy4xOTcsNDYsMjMsNDZjLTAuMTYsMC0wLjMyMS0wLjAzOC0wLjQ2Ny0wLjExNkMyMi4yMDUsNDUuNzExLDIyLDQ1LjM3MSwyMiw0NVYxNWMwLTAuMzcxLDAuMjA1LTAuNzExLDAuNTMzLTAuODg0ICBjMC4zMjgtMC4xNzQsMC43MjQtMC4xNSwxLjAzMSwwLjA1OGwyMiwxNUM0NS44MzYsMjkuMzYsNDYsMjkuNjY5LDQ2LDMwUzQ1LjgzNiwzMC42NCw0NS41NjMsMzAuODI2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />	      
	        <br/>Stream 1
	  </div>
  </div>
  <div className="vid2">
      <div className='VideoModuleDemo-Thumb VideoModuleDemo-Thumb2' onClick={this.updateVideo2}>
    	          <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cGF0aCBkPSJNMzAsMEMxMy40NTgsMCwwLDEzLjQ1OCwwLDMwczEzLjQ1OCwzMCwzMCwzMHMzMC0xMy40NTgsMzAtMzBTNDYuNTQyLDAsMzAsMHogTTQ1LjU2MywzMC44MjZsLTIyLDE1ICBDMjMuMzk0LDQ1Ljk0MSwyMy4xOTcsNDYsMjMsNDZjLTAuMTYsMC0wLjMyMS0wLjAzOC0wLjQ2Ny0wLjExNkMyMi4yMDUsNDUuNzExLDIyLDQ1LjM3MSwyMiw0NVYxNWMwLTAuMzcxLDAuMjA1LTAuNzExLDAuNTMzLTAuODg0ICBjMC4zMjgtMC4xNzQsMC43MjQtMC4xNSwxLjAzMSwwLjA1OGwyMiwxNUM0NS44MzYsMjkuMzYsNDYsMjkuNjY5LDQ2LDMwUzQ1LjgzNiwzMC42NCw0NS41NjMsMzAuODI2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
	          <br/>Stream 2
	    </div>
  </div>
  <div className="vid3">
      <div className='VideoModuleDemo-Thumb VideoModuleDemo-Thumb3' onClick={this.updateVideo3}>
	    	  <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cGF0aCBkPSJNMzAsMEMxMy40NTgsMCwwLDEzLjQ1OCwwLDMwczEzLjQ1OCwzMCwzMCwzMHMzMC0xMy40NTgsMzAtMzBTNDYuNTQyLDAsMzAsMHogTTQ1LjU2MywzMC44MjZsLTIyLDE1ICBDMjMuMzk0LDQ1Ljk0MSwyMy4xOTcsNDYsMjMsNDZjLTAuMTYsMC0wLjMyMS0wLjAzOC0wLjQ2Ny0wLjExNkMyMi4yMDUsNDUuNzExLDIyLDQ1LjM3MSwyMiw0NVYxNWMwLTAuMzcxLDAuMjA1LTAuNzExLDAuNTMzLTAuODg0ICBjMC4zMjgtMC4xNzQsMC43MjQtMC4xNSwxLjAzMSwwLjA1OGwyMiwxNUM0NS44MzYsMjkuMzYsNDYsMjkuNjY5LDQ2LDMwUzQ1LjgzNiwzMC42NCw0NS41NjMsMzAuODI2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
	        <br/>Stream 3
      </div>
   </div>
</div>	    
	    
	    
      <div className='VideoModuleDemo'>	
	<table className='VideoModuleDemo-Table'>
	  <tr>
	    <td className='VideoModuleDemo-col1' rowspan='3'>  col1
	    </td>
	    <td className='VideoModuleDemo-col2'>  col2 1
	     
	    </td>
	  </tr>
	  <tr>  
	    <td className='VideoModuleDemo-col2'>
            col2 2
	    </td>
	  </tr>
	  <tr>
	    <td className='VideoModuleDemo-col2'>
            col2 3
	    </td>
	  </tr>
        </table>
        <div className='' onClick={this.clearVideo}>&nbsp;&nbsp;&nbsp;</div>
      </div>
    );
	  
  }
}

export default VideoModuleDemo;
