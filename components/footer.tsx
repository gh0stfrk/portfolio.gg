import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-text-secondary sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Salman Sayyed</p>
        <div className="flex gap-4">
          <Link className="hover:text-primary" href="https://github.com/gh0stfrk">
            GitHub
          </Link>
          <Link
            className="hover:text-primary"
            href="https://www.linkedin.com/in/syydsalman"
          >
            LinkedIn
          </Link>
          <Link className="hover:text-primary" href="https://x.com/gh0stfrk">
            X
          </Link>
        </div>
      </div>
    </footer>
  );
}
