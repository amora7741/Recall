import HomeImage from "@/components/HomeImage";
import { Button } from "@/components/ui/button";
import { featureCards } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col overflow-y-auto">
      <section className="mx-auto mb-40 mt-20 grid max-w-screen-2xl gap-8 p-4 sm:px-8 lg:grid-cols-2">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-6xl">
            Remember <span className="text-primary">everything</span> with the
            power of AI
          </h1>
          <p className="hidden text-xl md:block">
            Recall is an intelligent note-taking app that helps you capture and
            retrieve your ideas instantly with AI assistance.
          </p>
          <div className="flex items-center gap-4">
            <Button className="md:px-8 md:py-5" asChild>
              <Link href="/notes">
                <span>Try Recall</span>
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild className="md:px-8 md:py-5" variant="outline">
              <Link href="#learn-more">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="relative hidden aspect-[16/10] overflow-hidden rounded-lg shadow-lg md:flex">
          <HomeImage />
        </div>
      </section>

      <section
        id="learn-more"
        className="mx-auto mb-40 max-w-screen-2xl scroll-m-40 space-y-16 p-4 sm:px-8"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-xl font-bold sm:text-2xl md:text-4xl">
            Supercharge your note-taking
          </h2>
          <p className="mx-auto max-w-2xl sm:text-lg md:text-xl">
            Recall combines the simplicity of note-taking with the power of
            artificial intelligence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card, i) => (
            <div
              className="flex flex-col gap-2 rounded-lg border p-4 transition hover:border-primary/50 hover:shadow-lg"
              key={i}
            >
              <div className="size-fit rounded-lg bg-primary/10 p-2">
                <card.Icon className="text-primary" />
              </div>
              <h3 className="font-semibold sm:text-lg md:text-xl">
                {card.title}
              </h3>
              <p className="text-sm md:text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hidden bg-muted sm:block">
        <div className="mx-auto max-w-screen-2xl space-y-16 px-4 py-20 sm:px-8">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold md:text-4xl">
              See Recall in action
            </h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl">
              A beautiful, intuitive interface designed for productivity.
            </p>
          </div>

          <div className="mx-auto grid aspect-square max-w-3xl place-items-center rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-8 px-4 py-20 sm:px-8">
          <div className="space-y-4 text-center text-white">
            <h2 className="text-xl font-bold sm:text-2xl md:text-4xl">
              Ready to try Recall?
            </h2>
            <p className="mx-auto max-w-2xl sm:text-lg md:text-xl">
              Experience the future of note-taking with Recall&apos;s AI-powered
              platform.
            </p>
          </div>

          <Button asChild className="px-8 py-5 sm:text-lg">
            <Link href="/notes">
              <span>Get Started</span>
              <ArrowRight className="" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
