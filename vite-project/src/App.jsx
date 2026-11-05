
import RetroHeader from './components/RetroHeader';
import VinylPlayer from './components/VinylPlayer';
import TrackList from './components/TrackList';
import { Equalizer } from './components/Equalizer';
import { PlaybackControls } from './components/PlaybackControls';

import './index.css';

export default function App() {
  return (
    <div className="synth-app">
      <RetroHeader />
      <div className="main-deck">
        <VinylPlayer />
        <div className="side-panel">
          <Equalizer />
          <TrackList />
          <PlaybackControls />
        </div>
      </div>
    </div>
  );
}