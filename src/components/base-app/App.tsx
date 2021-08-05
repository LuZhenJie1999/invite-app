import './App.css';
import {FC} from "react";

const HeadContainer: FC = () => (
  <div>head</div>
)

const FootContainer: FC = () => (
  <div>foot</div>
)

function App() {
  return (
    <div className="App">
      <HeadContainer />
      <div>content</div>
      <FootContainer />
    </div>
  );
}

export default App;
