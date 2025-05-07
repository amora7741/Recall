import { Button } from "@/components/ui/button";
import { featureCards } from "@/data";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      <section className="mx-auto mb-40 grid w-full max-w-screen-2xl gap-8 p-4 sm:px-8 lg:grid-cols-2">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold">
            Remember <span className="text-rose-500">everything</span> with the
            power of AI
          </h1>
          <p className="text-xl">
            Recall is an intelligent note-taking app that helps you capture and
            retrieve your ideas instantly with AI assistance.
          </p>
          <div className="flex items-center gap-4">
            <Button className="px-8 py-5">
              <span>Try Recall</span>
              <ArrowRight />
            </Button>
            <Button className="px-8 py-5" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid aspect-[16/10] place-items-center rounded-lg shadow-lg" />
      </section>

      <section className="mx-auto mb-40 w-full max-w-screen-2xl space-y-16 p-4 sm:px-8">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold">Supercharge your note-taking</h2>
          <p className="mx-auto max-w-2xl text-xl">
            Recall combines the simplicity of note-taking with the power of
            artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
          {featureCards.map((card, i) => (
            <div
              className="flex flex-col gap-2 rounded-lg border p-4 transition hover:border-rose-500/50 hover:shadow-lg"
              key={i}
            >
              <div className="size-fit rounded-lg bg-rose-500/10 p-2">
                <card.Icon className="text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto w-full max-w-screen-2xl space-y-16 px-4 py-20 sm:px-8">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold">See Recall in action</h2>
            <p className="mx-auto max-w-2xl text-xl">
              A beautiful, intuitive interface designed for productivity.
            </p>
          </div>

          <div className="mx-auto grid aspect-square max-w-3xl place-items-center rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="bg-rose-500">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-8 px-4 py-20 sm:px-8">
          <div className="space-y-4 text-center text-white">
            <h2 className="text-4xl font-bold">Ready to try Recall?</h2>
            <p className="mx-auto max-w-2xl text-xl">
              Experience the future of note-taking with Recall&apos;s AI-powered
              platform.
            </p>
          </div>

          <Button className="px-8 py-5 text-lg">
            <span>Get Started</span>
            <ArrowRight className="!size-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
