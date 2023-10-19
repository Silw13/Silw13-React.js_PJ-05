import { useTasks } from "../../hooks/task/use-task";

export default function Footer() {

    const { getActiveTaskCount, getFinishedTaskCount } = useTasks();

    return (
        <footer className="footer">
            <div className="container footer__content">
                <div className="taskCounters">
                    <span className="taskCounter">Active tasks: {getActiveTaskCount()}</span>
                    <span className="taskCounter">Finished tasks: {getFinishedTaskCount()}</span>
                </div>
                <div className="authorName">
                    <span>Kanban board by Rostislav 2023</span>
                </div>
            </div>
        </footer>
    )
}