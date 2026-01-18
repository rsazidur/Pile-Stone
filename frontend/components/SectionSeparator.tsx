export default function SectionSeparator({
    color = "bg-yellow",
    direction = "right"
}: {
    color?: string,
    direction?: "left" | "right"
}) {
    return (
        <div className="relative h-4 w-full overflow-hidden">
            {/* 
               A simple diagonal band approach. 
               In a real SVG this would be cleaner, but using CSS borders/transforms fits the 'constructed' request.
            */}
            <div className={`absolute top-0 w-full h-full ${color}`}></div>
        </div>
    );
}

// NOTE: For better visuals, users often use specific SVGs. 
// I will create a dedicated SVG separator component that looks sharper.

export function DiagonalSeparator({ className = "text-navy" }: { className?: string }) {
    return (
        <div className={`w-full overflow-hidden leading-[0] ${className}`}>
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="relative block w-full h-[60px] fill-current"
            >
                <path d="M1200 120L0 16.48V0h1200v120z" />
            </svg>
        </div>
    );
}
