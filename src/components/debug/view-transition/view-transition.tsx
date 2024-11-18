export default function ViewTransition() {
    const isSupported = document.startViewTransition !== undefined;
    return (
        <span>
            {isSupported
                ? "🟢 Your browser supports View Transitions."
                : "🔴 Your browser doesn’t support View Transitions."}
        </span>
    );
}
