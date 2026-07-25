import { Navbar, Hero, Footer, Banner, Team } from "./components";
import { Disclosure } from "@headlessui/react";

export default function App() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-xs"
        >
          <Navbar />
        </Disclosure>

        <header className="relative after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-0 after:border-y after:border-white/10 ">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-4 lg:px-8">
            <Banner />
          </div>
        </header>

        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Hero />
            <Team />
          </div>
        </main>

        <footer className="mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:px-8">
          <Footer />
        </footer>
      </div>
    </>
  );
}
