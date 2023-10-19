import Column from "./column/column";
import { useTasks } from "../../hooks/task/use-task";


export default function Board() {
    const { states } = useTasks();
    return (
        <div className="board">
            {states.map(
                (state) =>
                    <Column key={state.id} name={state.name} state={state.state} />
            )}
        </div>
    )
}
