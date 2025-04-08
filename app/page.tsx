"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GamepadIcon, Users, Briefcase, Trophy, ArrowRight, Search, Gamepad2, Cpu, PenTool, Code, MonitorPlay, Layers } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center gaming-gradient hero-pattern">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <GamepadIcon className="w-20 h-20 mx-auto mb-8 text-purple-400 animate-float" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-slide-in">
              Level Up Your Gaming Career
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-purple-100">
              Join the elite ranks of game developers shaping the future of interactive entertainment
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg h-14 px-8 animate-glow">
                Find Jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-purple-400 hover:bg-purple-900/50 text-lg h-14 px-8">
                For Employers
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center card-hover bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-background">
                <Users className="w-16 h-16 mx-auto mb-6 text-purple-600 animate-float" />
                <h3 className="text-3xl font-bold mb-2">5000+</h3>
                <p className="text-muted-foreground text-lg">Game Developers Placed</p>
              </Card>
              <Card className="p-8 text-center card-hover bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-background">
                <Briefcase className="w-16 h-16 mx-auto mb-6 text-purple-600 animate-float" />
                <h3 className="text-3xl font-bold mb-2">300+</h3>
                <p className="text-muted-foreground text-lg">Partner Studios</p>
              </Card>
              <Card className="p-8 text-center card-hover bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-background">
                <Trophy className="w-16 h-16 mx-auto mb-6 text-purple-600 animate-float" />
                <h3 className="text-3xl font-bold mb-2">98%</h3>
                <p className="text-muted-foreground text-lg">Placement Success Rate</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-24 bg-muted/50 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Explore Game Development Roles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Game Programmers", icon: Code, desc: "Build the core mechanics and systems" },
                { title: "3D Artists", icon: Layers, desc: "Create stunning visual experiences" },
                { title: "Game Designers", icon: PenTool, desc: "Craft engaging gameplay mechanics" },
                { title: "Unity Developers", icon: Gamepad2, desc: "Develop with the leading game engine" },
                { title: "Unreal Engine Specialists", icon: MonitorPlay, desc: "Create next-gen gaming experiences" },
                { title: "Technical Artists", icon: Cpu, desc: "Bridge art and technology" },
              ].map(({ title, icon: Icon, desc }) => (
                <Link href="#" key={title}>
                  <Card className="p-8 card-hover bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-background">
                    <Icon className="w-12 h-12 mb-6 text-purple-600" />
                    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {desc}
                    </p>
                    <Button variant="ghost" className="group text-purple-600 hover:text-purple-700">
                      View Jobs
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-24 gaming-gradient relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
              Ready to Level Up Your Career?
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-6 w-6" />
                  <input
                    type="text"
                    placeholder="Search for game development jobs..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/95 text-black text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 h-14 px-8 text-lg">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}