import React from 'react';
import SearchBar from './SearchBar';
import youtube from "../apis/youtube";
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'


class App extends React.Component {
    state = { videos: [], 
        selectedVideo: null 
    };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search' , {
            params: {
                q: term
            }
        });
// Is reponse something that is recognized, could it be anything? Where do data and items come from? 
        this.setState({ videos: response.data.items });
    };
    // Why is video passed before the arrow function? 
    onVideoSelect = (video => {
        this.setState({ selectedVideo: video })
    });

    render () {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList  
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos} 
                />
            </div>
        );
    }
}

export default App;