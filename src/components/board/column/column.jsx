import Scrollbars from "react-custom-scrollbars-2";
import Card from "./card/card";

export default function Column(props) {
    return (
        <div className="column">
            <div className="column__wrapper">
                <div className="column__header" name={props.name}></div >
                <Scrollbars autoHeight autoHeightMax={500}>
                    <Card />
                </Scrollbars>
                <button>+ Add Card</button>
            </div>
        </div>
    )
}