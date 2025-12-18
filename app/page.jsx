import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FlowStateEliteSite() {
  return (
    <div className="min-h-screen bg-white text-navy-900">
      {/* HERO */}
      <section className="bg-[#0b1f3a] text-white py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            FLOW STATE ELITE
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-xl">
            Boys AAU Basketball • Built for the Next Level
          </p>
          <div className="mt-8 flex gap-4">
            <Button className="bg-white text-[#0b1f3a] hover:bg-blue-100">
              View Team
            </Button>
            <Button variant="outline" className="border-white text-white">
              Watch Highlights
            </Button>
          </div>
        </motion.div>
      </section>

      {/* IDENTITY */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl text-gray-700">
            Flow State Elite is a competitive boys AAU basketball program focused
            on development, discipline, and playing the game the right way.
          </p>
        </div>
      </section>

      {/* TEAMS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Teams</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">High School Freshmen</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Summer AAU Season
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Media</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video bg-[#0b1f3a] rounded-2xl flex items-center justify-center text-blue-200"
              >
                Highlight Coming Soon
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-blue-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">Flow</h3>
            <p className="mt-2 text-gray-700">
              Reading the game and reacting naturally.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Discipline</h3>
            <p className="mt-2 text-gray-700">
              Details matter on every possession.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Growth</h3>
            <p className="mt-2 text-gray-700">
              Developing athletes on and off the court.
            </p>
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Coaches</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Izzy Smith", "Savannah Hamilton", "Doriah Holden"].map((name) => (
              <Card key={name} className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">{name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Coach</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b1f3a] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="font-bold">Flow State Elite</h4>
            <p className="text-sm text-blue-200 mt-2">Boys AAU Basketball</p>
          </div>
          <div>
            <p className="text-sm">Instagram</p>
            <a
              href="https://instagram.com/flowstateelite"
              className="text-blue-200 hover:underline"
            >
              @flowstateelite
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
