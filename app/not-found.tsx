import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#070b14] px-5 text-center text-white">
      <div className="glass rounded-3xl p-8 max-w-md w-full">
        <h1 className="text-6xl font-black text-blue-400">404</h1>
        <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
        <p className="mt-2 text-sm text-slate-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-glow hover:bg-blue-400 transition"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
