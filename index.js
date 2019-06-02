import React, { Component, PropTypes } from 'react';
import Video from 'components/media/Video';

class VideoModuleDemo extends Component {
  static defaultProps = {
    "titles": [
      "Vid1",
      "Vid2",
      "Vid3"
    ],
    "streamUrls": [
      "https://channels-1.video.franklyinc.com/out/i/15812.m3u8",
      "https://channels-1.video.franklyinc.com/out/i/19735.m3u8",
      "https://f3ba597f7d4949af9ea7f7405594adea.mediatailor.us-east-1.amazonaws.com/v1/master/1d83eb30e3b0c3924fb4496062b92664bd531371/Fox-WAGA-MediaPackage-Beta/index.m3u8"
    ],
    "posterUrls": [
      "https://FRANKLYDEMO.images.worldnow.com/images/18020840_G.jpeg",
      "https://FRANKLYDEMO.images.worldnow.com/images/18018385_G.jpeg",
      "https://FRANKLYDEMO.images.worldnow.com/images/18055016_G.jpeg"
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      video: ''
    };

    this.updateVideo = this.updateVideo.bind(this);
    // this.clearVideo = this.clearVideo.bind(this);

    // 	  this.updateVideo('https://channels-1.video.franklyinc.com/out/i/6989.m3u8');
    // 	  this.updateVideo('https://1cfed095bf82411d8d4a38bed11fa674.mediatailor.us-east-1.amazonaws.com/v1/master/1d83eb30e3b0c3924fb4496062b92664bd531371/Fox-WAGA/83.m3u8');

    console.log("*** this.props : ", this.props);

    // this.videoPlaylist = [
    //   'https://channels-1.video.franklyinc.com/out/i/15812.m3u8',
    //   'https://channels-1.video.franklyinc.com/out/i/19735.m3u8',
    //   'https://f3ba597f7d4949af9ea7f7405594adea.mediatailor.us-east-1.amazonaws.com/v1/master/1d83eb30e3b0c3924fb4496062b92664bd531371/Fox-WAGA-MediaPackage-Beta/index.m3u8',
    //   'https://1cfed095bf82411d8d4a38bed11fa674.mediatailor.us-east-1.amazonaws.com/v1/master/1d83eb30e3b0c3924fb4496062b92664bd531371/Fox-WAGA/83.m3u8',
    //   'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    //   'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8'
    // ]

    // this.videoPlaylist = this.props.streamUrls;

  }
  shouldComponentUpdate() {
    console.log("*** shouldComponentUpdate()");
  	return false;
  }
  componentWillMount() { // set initial video
    console.log("*** componentWillMount()");
    const url = this.props.streamUrls[0];
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

  // async clearVideo() {
  //   console.log("*** clearVideo()");
  //   if (FranklyVideoPlayerList && FranklyVideoPlayerList[0] && FranklyVideoPlayerList[0].playerInfo && FranklyVideoPlayerList[0].playerInfo.playerId) {
	//        videojs(FranklyVideoPlayerList[0].playerInfo.playerId).dispose();
  //        FranklyVideoPlayerList[0].enabled = false;
  //        FranklyVideoPlayerList.splice(0,1);
	//        await this.setState({ video: '' }); // clear the current video
  //   }
  // }

  async updateVideo(id) {
    console.log("*** updateVideo(), id:", id + " url: " + this.props.streamUrls[id]);
    if (FranklyVideoPlayerList && FranklyVideoPlayerList[0] && FranklyVideoPlayerList[0].playerInfo && FranklyVideoPlayerList[0].playerInfo.playerId) {

//       videojs(FranklyVideoPlayerList[0].playerInfo.playerId).src(this.props.streamUrls[id]);
//       videojs(FranklyVideoPlayerList[0].playerInfo.playerId).play(); // this is a hack. no update to analytics/etc.
// //       FranklyVideoPlayerList[0].playerInfo.canFireResumeAfterPause = false;
// //       FranklyVideoPlayerList[0].playerInfo.loadInitialVideo(true);

      autoplayPossible = true; // hack fix for Chrome to play on second video. can be removed after forceAutoplay is added in legacy PR #487
      var franklyStreamPlayer = FranklyVideoPlayerList[0].playerInfo;
      var player_id = franklyStreamPlayer.playerId;
      console.log("*** updateVideo :: franklyStreamPlayer : ", franklyStreamPlayer);
      console.log("*** updateVideo :: this.props.streamUrls[id] : ", this.props.streamUrls[id]);

      // franklyStreamPlayer.currentClip.content[0].src = this.props.streamUrls[id]; // this is already set at the end of loadClip
      franklyStreamPlayer.vars.liveStreamUrl = this.props.streamUrls[id];
      franklyStreamPlayer.loadInitialVideo(true);  // true == force autoplay
    }
  }

  render(){

    this.vidContainerStyles = {
      display: 'grid',
      width: '100%',
      height: '100%',
      gridTemplateAreas: "", // will be dynamically generated below in streamUrls map
      gridTemplateColumns: '75% 25%',
      gridTemplateRows: "", // will be dynamically generated below in streamUrls map
      gridRowGap: '16px',
      rowGap: '16px'
    };

    var vidList = this.props.streamUrls.map(function(streamUrl, index){

      this.vidContainerStyles.gridTemplateAreas += "'main vid" + index + "' ";
      this.vidContainerStyles.gridTemplateRows += "1fr ";

      var vidThumbStyles = {
        height: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '3em',
        marginLeft: '16px',
        color: '#fff',
        textDecoration: 'none',
        backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,.5),transparent), url("'+ this.props.posterUrls[index] +'")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
      return (

        <div style={{gridArea: 'vid' + index}} >
          <div style={vidThumbStyles} onClick={() => this.updateVideo(index)} >
            <img style={{width: '36px', height: '36px'}} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cGF0aCBkPSJNMzAsMEMxMy40NTgsMCwwLDEzLjQ1OCwwLDMwczEzLjQ1OCwzMCwzMCwzMHMzMC0xMy40NTgsMzAtMzBTNDYuNTQyLDAsMzAsMHogTTQ1LjU2MywzMC44MjZsLTIyLDE1ICBDMjMuMzk0LDQ1Ljk0MSwyMy4xOTcsNDYsMjMsNDZjLTAuMTYsMC0wLjMyMS0wLjAzOC0wLjQ2Ny0wLjExNkMyMi4yMDUsNDUuNzExLDIyLDQ1LjM3MSwyMiw0NVYxNWMwLTAuMzcxLDAuMjA1LTAuNzExLDAuNTMzLTAuODg0ICBjMC4zMjgtMC4xNzQsMC43MjQtMC4xNSwxLjAzMSwwLjA1OGwyMiwxNUM0NS44MzYsMjkuMzYsNDYsMjkuNjY5LDQ2LDMwUzQ1LjgzNiwzMC42NCw0NS41NjMsMzAuODI2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
            <br/>{this.props.titles[index]}
          </div>
    	  </div>
      );
    }.bind(this));

    console.log("*** this.vidContainerStyles: ", this.vidContainerStyles);

    return (
<div className='VideoModuleDemo'>
	<div className="vidContainer" style={this.vidContainerStyles}>
	  <div className="vidMain" style={{gridArea: 'main'}}><span className='VideoModuleDemo-Video'>{this.state.video}</span></div>
    {vidList}
	</div>
</div>
    );

  }
}

export default VideoModuleDemo;
