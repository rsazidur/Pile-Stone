
import Image from "next/image";

interface ProfileCardProps {
    name: string;
    role: string;
    education: string;
    credits: { label: string; value: string }[];
    bio: string;
    image: string;
    align?: "left" | "right";
}

export default function ProfileCard({
    name,
    role,
    education,
    credits,
    bio,
    image,
    align = "left",
}: ProfileCardProps) {
    const isRight = align === "right";

    return (
        <div className={`relative flex flex-col ${isRight ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16 py-12`}>

            {/* Geometric Background Element (Triangle) */}
            <div
                className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-solid
                ${isRight
                        ? "right-[-100px] border-y-[200px] border-y-transparent border-r-[300px] border-r-yellow"
                        : "left-[-100px] border-y-[200px] border-y-transparent border-l-[300px] border-l-yellow"
                    } 
                opacity-90 z-0 pointer-events-none hidden md:block`}
            />

            {/* Profile Image Circle */}
            <div className="relative z-10 shrink-0">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-[10px] border-yellow overflow-hidden shadow-2xl bg-zinc-800">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

            {/* Content */}
            <div className={`relative z-10 flex-1 ${isRight ? "text-right" : "text-left"} text-center md:text-left`}>
                <h2 className={`text-4xl md:text-5xl font-black text-white mb-2 font-heading ${isRight ? "md:text-right" : ""}`}>{name}</h2>
                <h3 className={`text-xl md:text-2xl text-yellow font-bold uppercase tracking-wider mb-2 ${isRight ? "md:text-right" : ""}`}>{role}</h3>

                <p className={`text-gray-400 font-medium italic mb-8 border-b border-gray-700 pb-4 inline-block ${isRight ? "md:ml-auto" : "md:mr-auto"}`}>
                    {education}
                </p>

                <div className={`space-y-1 text-sm font-bold uppercase tracking-wide text-gray-300 mb-8 flex flex-col ${isRight ? "md:items-end" : "md:items-start"}`}>
                    {credits.map((credit, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-1 md:gap-2">
                            <span className="text-yellow">{credit.label}:</span>
                            <span>{credit.value}</span>
                        </div>
                    ))}
                </div>

                <p className={`text-gray-300 leading-relaxed text-lg max-w-2xl ${isRight ? "ml-auto border-r-4 border-yellow pr-6" : "mr-auto border-l-4 border-yellow pl-6"}`}>
                    "{bio}"
                </p>
            </div>
        </div>
    );
}
