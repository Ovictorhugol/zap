import "./sucess.css";
import imgURL from "./gato.png";
export default function Sucess() {
  return (
    <div className="sucessDiv">
      <div className="sucessBody">
        <img className="sucessImg" src={imgURL} />
        <div>
          <p>Sabia que você não ia recusar!</p>
          <p>Te mandarei mensagem com mais informações!</p>
          <p>Até logo 😘</p>
        </div>
      </div>
    </div>
  );
}
