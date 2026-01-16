import { projects } from "@/content/projects";
import { notFound } from "next/navigation";

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return notFound();

    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
            <h1 className="text-3xl font-extrabold">{project.title}</h1>
            <div className="mt-4 rounded border p-5">
                <p><b>Place:</b> {project.place}</p>
                <p><b>DIA:</b> {project.dia}</p>
                <p><b>Quantity:</b> {project.quantity}</p>
                <p><b>Date:</b> {project.date}</p>
            </div>
        </main>
    );
}
