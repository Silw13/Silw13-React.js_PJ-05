export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__content">
                <div className="taskCounters">
                    <span className="taskCounter">Active tasks: 0</span>
                    <span className="taskCounter">Finished tasks: 0</span>
                </div>
                <div className="authorName">
                    <span>Kanban board by Author</span>
                </div>
            </div>
        </footer>
    )
}