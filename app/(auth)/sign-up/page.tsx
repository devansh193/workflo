"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [checkingPassword, setCheckingPassword] = useState(false);
  const [requiredError, setRequiredError] = useState({
    emailReq: false,
    passReq: false,
    userReq: false,
  });

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState: any) => !prevState);
  }
  const router = useRouter();
  const email = useRef("");
  const password = useRef("");
  const username = useRef("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEFEFE] to-[#BAAFFE] ">
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-[450px] border-zinc-200 border-2 ">
          <CardHeader>
            <CardTitle className="text-center">
              <p className="text-3xl font-semibold">
                Welcome to{" "}
                <span className="text-3xl text-[#4534AB]">Workflo</span>!
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div>
                <Input
                  className="mb-4 bg-gray-100"
                  type="name"
                  placeholder="Username"
                  id="username"
                  onChange={(e) => {
                    setRequiredError((prevState) => ({
                      ...prevState,
                      userReq: false,
                    }));
                    username.current = e.target.value;
                  }}
                />
                <Input
                  className="mb-2 bg-gray-100"
                  type="email"
                  placeholder="Your email"
                  id="email"
                  onChange={(e) => {
                    setRequiredError((prevState) => ({
                      ...prevState,
                      emailReq: false,
                    }));
                    email.current = e.target.value;
                  }}
                />
                {requiredError.emailReq && (
                  <span className="text-red-500">Email is required</span>
                )}
                <Input
                  className="mt-4 bg-gray-100"
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setRequiredError((prevState) => ({
                      ...prevState,
                      passReq: false,
                    }));
                    password.current = e.target.value;
                  }}
                />

                <Button
                  type="submit"
                  className={cn("w-full mt-4 bg-[#4534AB]")}
                >
                  Signup
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <p>
              Already have an account?
              <span
                onClick={() => router.push("/sign-in")}
                className="text-[#0054A1] hover:cursor-pointer"
              >
                {" "}
                Login.
              </span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
