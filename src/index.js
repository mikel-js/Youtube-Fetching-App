import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDR478_HsrN7YDcheUpm1ZJod29wsjdPZw'




class App extends Component { 
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		 }
		
		YTSearch({key: API_KEY, term: 'Finland Travel'}, (data)=>{
		this.setState({ 
			videos: data,
			selectedVideo: data[0]
		 })
		})
	}

	render() {
		return ( 
		<div>
			<SearchBar />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList
				onVideoSelect ={(selectedVideo) => this.setState({selectedVideo:selectedVideo})}
				videos={this.state.videos} />
			
		</div>
		)	
	}
}



ReactDOM.render(<App />, document.querySelector('.container'))