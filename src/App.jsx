import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router";
export default function App() {
  const [active, setActive] = useState(true);
  function handleClick() {
    setActive(!active);
  }
  let navigate = useNavigate();
  return (
    <div className="App">
      <h1>Gostaria de saber se você quer sair comigo!!! 😅</h1>
      <div className="buttonDiv">
        {/* <button onClick={() => navigate("zap")} className="buttonSize">
          SIM
        </button>

        {active === true ? (
          <button className="buttonSize" onClick={() => handleClick()}>
            NÃO
          </button>
        ) : (
          <div className="buttonDivPosition">
            <div className="buttonDivPositionSquare"></div>
            <button
              className="buttonSizePosition"
              onClick={() => handleClick()}
            >
              NÃO
            </button>
          </div>
        )} */}
        {active === true ? (
          <div className="buttonDiv">
            <button onClick={() => navigate("zap")} className="buttonSize">
              SIM
            </button>
            <button className="buttonSize" onClick={() => handleClick()}>
              NÃO
            </button>
          </div>
        ) : (
          <div className="buttonDiv">
            <button className="buttonSize" onClick={() => handleClick()}>
              NÃO
            </button>
            <button onClick={() => navigate("zap")} className="buttonSize">
              SIM
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
