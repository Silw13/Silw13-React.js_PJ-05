import Column from "./column/column";

export default function Board() {
    return (
        <div className="board">
            <Column />
            <Column />
            <Column />
            <Column />
        </div>
    )
}