import { site } from "@/content/site";

export default function ContactPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="text-3xl font-extrabold">Contact</h1>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div className="rounded-lg border p-5">
                    <p className="font-semibold">{site.name}</p>
                    <p className="mt-2 text-sm text-gray-600">{site.address}</p>
                    <p className="mt-2 text-sm text-gray-600">
                        Email: {site.email}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                        Phone: {site.phones.join(", ")}
                    </p>
                </div>

                <form className="rounded-lg border p-5" method="post" action="/api/contact">
                    <label className="block text-sm font-medium">Name</label>
                    <input name="name" className="mt-1 w-full rounded border p-2" required />

                    <label className="mt-4 block text-sm font-medium">Email</label>
                    <input name="email" type="email" className="mt-1 w-full rounded border p-2" required />

                    <label className="mt-4 block text-sm font-medium">Message</label>
                    <textarea name="message" className="mt-1 w-full rounded border p-2" rows={5} required />

                    <button className="mt-4 rounded bg-slate-900 px-4 py-2 font-semibold text-white">
                        Send
                    </button>
                </form>
            </div>
        </main>
    );
}
