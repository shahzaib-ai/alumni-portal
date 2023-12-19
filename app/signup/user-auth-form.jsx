"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <Tabs defaultValue="mentee" className="mb-4">
            <TabsList className="grid w-full grid-cols-2 bg-gray-200">
              <TabsTrigger className=" text-gray-500" value="mentee">
                Join as Mentee
              </TabsTrigger>
              <TabsTrigger className="text-gray-500" value="mentor">
                Join as Mentor
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="grid  gap-2">
            <div className="flex flex-col lg:flex-row gap-2">
              <Label className="sr-only" htmlFor="fname">
                First Name
              </Label>
              <Input
                id="fname"
                placeholder="First Name"
                type="text"
                autoCapitalize="none"
                autoComplete="text"
                autoCorrect="off"
                disabled={isLoading}
                required
              />
              <Label className="sr-only" htmlFor="email">
                Last Name
              </Label>
              <Input
                id="email"
                placeholder="Last Name"
                type="text"
                autoCapitalize="none"
                autoComplete="text"
                autoCorrect="off"
                disabled={isLoading}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Email Address"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Join Now
          </Button>
        </div>
      </form>
    </div>
  );
}
