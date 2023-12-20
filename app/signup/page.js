import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "./user-auth-form";

import comsatslogo from "../../public/comsats-logo.svg";

export default function SignUp() {
  return (
    <>
      <div className="container relative grid h-[700px] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <span className="absolute right-4 top-4 md:right-8 md:top-8">
          <span className=" text-sm mr-2">Already have an account?</span>
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Login
          </Link>
        </span>
        <div className="relative hidden h-[100vh] justify-between flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="h-[100vh] absolute inset-0 bg-[#1b3f81]" />
          <div className="relative z-20">
            <Link
              className="flex items-center text-lg font-medium w-max"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              COMSIANS&apos; Connect
            </Link>
          </div>

          <Image
            className="relative z-20 ml-[25%] w-[40%]"
            src={comsatslogo}
            alt="comsats logo"
          />
          <div className="relative z-20">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;The aim is to make a network beyond the typical ways with
                COMSIANS&apos; own Connect! .&rdquo;
              </p>
              <footer className="text-sm">Founder</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
