import './App.css'
import YouTubeVideo from './components/YouTubeVideo';

function App() {
  return (
    <div className="App">
      <YouTubeVideo src="/aeropuerto-malaga.mp4" width="100%" height="100%" position={[0, 2, -5]} />
    </div>
  );
}

export default App
