import "./App.css";
import Thanks from "./components/thanks";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show === true ? (
        <div className="rate-countainer">
          <div className="star-box">
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m9.067.43 1.99
                        4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1
                        .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76
                        4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0
                        0-.718 0l-3.98 2.092a.772.772 0 0
                        1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233
                        6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0
                        .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
          </div>
          <div className="rating-body">
            <div className="title">How we did do?</div>
            <div className="sub-title">
              Please let us know how we did with your support request. All
              feedback are appreciated to help us improve our offering
            </div>
          </div>
          <div className="number-containers">
            <span className="number">1</span>
            <span className="number">2</span>
            <span className="number">3</span>
            <span className="number">4</span>
            <span className="number">5</span>
          </div>
          <button
            onClick={function() {
              setShow(!show);
            }}
          >
            {show === false ? "Hide" : "no"}
          </button>
        </div>
      ) : (
        <Thanks />
      )}
    </div>
  );
}

export default App;
