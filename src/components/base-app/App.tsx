import './App.css';
import {FC} from "react";
import MainContent from "./main-content/MainContent";

const HeadContainer: FC = () => (
  <div className="head">BROCCOLI & CO .</div>
)

const FootContainer: FC = () => (
  <div className="foot">
    <div>
      <div>Made with ❤ in Melbourne.</div>
      <div>© 2016 Broccoli & Co . All rights reserved</div>
    </div>
  </div>
)

function App() {
  return (
    <div className="App">
      <HeadContainer />
      <MainContent />
      <FootContainer />
    </div>
  );
}

export default App;
