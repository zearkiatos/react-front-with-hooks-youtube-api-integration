import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtubeServices from '../apis/youtube';
import VideoList from './VideosList';
import VideoDetail from './VideoDetail';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);


    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={setSelectedVideo}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;