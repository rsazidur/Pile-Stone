import { services } from "@/content/services";

export default function ServicesPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="text-3xl font-extrabold">Services</h1>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                    <div key={s.title} className="rounded-lg border p-5">
                        <h2 className="font-bold">{s.title}</h2>
                        <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
