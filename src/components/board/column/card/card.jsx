import { useTasks } from "../../../../hooks/task/use-task";
import { useNavigate } from "react-router-dom";


export default function Card({ name, id }) {

    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(`/tasks/${id}`)}>
            <span className="card__content">
                {name}
            </span>
        </div>
    )
} 