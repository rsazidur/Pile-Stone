export default function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-6xl p-4 text-sm text-gray-600">
                © {new Date().getFullYear()} Pile Stone Engineering Consultants
            </div>
        </footer>
    );
}
