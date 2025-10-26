import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cine Seek</title>
        <meta name="description" content="Discover and track your favorite movies" />
      </Head>
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Cine Seek</h1>
          <p className="text-lg text-slate-300">
            Progressive web experience for movie lovers coming soon.
          </p>
          <a
            href="https://github.com/bini34"
            className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
          >
            Explore on GitHub
          </a>
        </div>
      </main>
    </>
  );
}
