import { useTasks } from "../../../../hooks/task/use-task";
import { useNavigate } from "react-router-dom";


export default function Card({ name }) {


    return (
        <div className="card">
            <span className="card__content">
                {name}
            </span>
        </div>
    )
}