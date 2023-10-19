import { TaskProvider } from "../../hooks/task/task-provider"

export const Layout = (props) => {
    return (
        <TaskProvider>
            <div className="layout">
                {props.children}
            </div>
        </TaskProvider>
    )
}