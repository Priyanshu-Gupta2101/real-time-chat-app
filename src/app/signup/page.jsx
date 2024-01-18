import Link from "next/link";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Sign up to our service
        </h2>
        <p className="mt-2 text-center text-sm text-white">
          Or{" "}
          <Link className="font-medium text-white underline" href="/login">
            log in if you're already a member
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <Label className="text-black" htmlFor="name">
                Name
              </Label>
              <Input id="name" name="name" required type="text" />
            </div>
            <div>
              <Label className="text-black" htmlFor="email">
                Email address
              </Label>
              <Input id="email" name="email" required type="email" />
            </div>
            <div>
              <Label className="text-black" htmlFor="password">
                Password
              </Label>
              <Input id="password" name="password" required type="password" />
            </div>
            <div>
              <Button className="w-full bg-black" type="submit">
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
