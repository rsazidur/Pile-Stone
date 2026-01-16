import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="text-3xl font-extrabold">Projects</h1>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="rounded-lg border p-5 hover:shadow"
                    >
                        <h2 className="font-bold">{p.title}</h2>
                        <p className="mt-2 text-sm text-gray-600">{p.place}</p>
                        <p className="mt-1 text-sm text-gray-600">
                            DIA: {p.dia} • Qty: {p.quantity}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">Date: {p.date}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
