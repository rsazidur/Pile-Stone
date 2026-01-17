export default function CurvedLine({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 50 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M48 2C15 2 2 35 2 70"
                stroke="#FACC15"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
}
