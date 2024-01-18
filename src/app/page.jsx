"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import Link from "next/link";

export default function Component() {
  const router = useRouter();
  return (
    <section className="w-full min-h-screen px-7 py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Unleash Your Creativity
              </h1>
              <p className="max-w-[600px] text-white md:text-xl">
                Our platform offers a wide range of tools that will help you
                create, innovate, and bring your ideas to life. Join us and
                start your creative journey today.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex space-x-2">
                <Button
                  type="button"
                  className="border-2 border-white "
                  onClick={() => router.push("/signup")}
                >
                  Get Started
                </Button>
              </div>
              <p className="text-xs text-white">
                Sign up to get notified about our latest tools and updates.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}
