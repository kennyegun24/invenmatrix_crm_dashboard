"use client";
import Link from "next/link";
import React, { useContext, useState, useTransition } from "react";
import RightSide from "@/components/auth/RightSide";
import GoogleBtn, { AuthButton } from "@/components/auth/GoogleBtn";
import { login } from "@/actions/login";
import AuthError from "@/components/auth/AuthError";
import { RequestSpinnerContext } from "@/contexts/RequestSpinner";

const Page = () => {
  const [userInput, setUserInput] = useState({ password: "", email: "" });
  const [errMessage, setErrMessage] = useState(null);
  const [isPending, startTransition] = useTransition();
  const { setRequested } = useContext(RequestSpinnerContext);
  const loginUser = async (e) => {
    setRequested(true);
    e.preventDefault();
    setErrMessage(null);
    startTransition(() => {
      login(userInput).then((err) => {
        err?.error && setErrMessage(JSON.parse(err?.error));
        setRequested(false);
      });
    });
  };
  return (
    <div className="login_page flex">
      <div className="flex sub_auth">
        <section className="first_part flex align_center justify_center column gap15rem">
          <h1>AJL Logo</h1>

          <section className="flex column gap05rem">
            <h3>Welcome Back!</h3>
            <p>
              Don&apos;t have an account?{" "}
              <Link href={"/register"}>Sign Up!</Link>
            </p>
          </section>

          <form onSubmit={loginUser} className="flex column gap1rem login_form">
            <div className="flex column gap075rem">
              <label htmlFor="email">Email</label>
              <input
                disabled={isPending}
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Email address..."
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex column gap075rem">
              <label
                className="flex align_center justify_between"
                htmlFor="password"
              >
                Password{" "}
                <Link href={"/forget_password"}>Forgot your password?</Link>
              </label>
              <input
                disabled={isPending}
                onChange={(e) =>
                  setUserInput((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                placeholder="Password..."
                type="password"
                name="password"
                id="password"
              />
            </div>
            <AuthError errMessage={errMessage} />
            <AuthButton disable={isPending} login={loginUser} text={"Login"} />
            <p className="or">OR</p>
            <GoogleBtn text={"Continue with Google"} />
          </form>
        </section>
        <RightSide />
      </div>
    </div>
  );
};

export default Page;
