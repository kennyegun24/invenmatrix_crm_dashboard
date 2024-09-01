"use client";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import RightSide from "@/components/auth/RightSide";
import GoogleBtn, { AuthButton } from "@/components/auth/GoogleBtn";
import Onboarding from "@/components/auth/onboarding/Onboarding";
import { signUp } from "@/actions/signup";
import AuthError from "@/components/auth/AuthError";

const Page = () => {
  const [userInput, setUserInput] = useState({
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    user_name: "",
  });
  const [errMessage, setErrMessage] = useState(null);
  const [isPending, startTransition] = useTransition();
  const signUpUser = async (e) => {
    e.preventDefault();
    setErrMessage(null);
    startTransition(() => {
      signUp(userInput)
        .then((err) => {
          err?.error && setErrMessage(JSON.parse(err?.error));
        })
        .catch((err) => {
          setErrMessage(JSON.parse(err?.error));
        });
    });
  };
  return (
    <div className="login_page flex">
      {/* {<Onboarding />} */}
      <div className="flex sub_auth">
        <section className="first_part flex align_center justify_center column gap15rem">
          <h1>AJL Logo</h1>

          <section className="flex column gap05rem">
            <h3>Welcome Back!</h3>
            <p>
              Have an account? <Link href={"/login"}>Sign in!</Link>
            </p>
          </section>

          <form
            onSubmit={signUpUser}
            className="flex column gap1rem login_form"
          >
            <div className="flex column gap075rem">
              <label htmlFor="name">Name</label>
              <div className="flex gap05rem">
                <input
                  onChange={(e) =>
                    setUserInput((prev) => ({
                      ...prev,
                      first_name: e.target.value,
                    }))
                  }
                  placeholder="First name..."
                  type="text"
                  name="first_name"
                  id="first_name"
                />
                <input
                  onChange={(e) =>
                    setUserInput((prev) => ({
                      ...prev,
                      last_name: e.target.value,
                    }))
                  }
                  placeholder="Last name..."
                  type="text"
                  name="last_name"
                  id="last_name"
                />
              </div>
            </div>
            <div className="flex gap05rem width100">
              <div className="flex column width100 gap075rem">
                <label htmlFor="password">Email Address</label>
                <input
                  onChange={(e) =>
                    setUserInput((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  placeholder="Email address..."
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex column width100 gap075rem">
                <label htmlFor="password">User Name</label>
                <input
                  onChange={(e) =>
                    setUserInput((prev) => ({
                      ...prev,
                      user_name: e.target.value,
                    }))
                  }
                  placeholder="User Name..."
                  type="text"
                  name="user_name"
                  id="user_name"
                />
              </div>
            </div>
            <div className="flex column gap075rem">
              <label
                className="flex align_center justify_between"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={(e) =>
                  setUserInput((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                placeholder="Password..."
                type="email"
                name="email"
                id="email"
              />
            </div>
            <AuthError errMessage={errMessage} />
            <AuthButton
              disable={isPending}
              login={signUpUser}
              text={"Signup"}
            />
            <p className="or">OR</p>
            <GoogleBtn text={"Signup with Google"} />
          </form>
        </section>
        <RightSide />
      </div>
    </div>
  );
};

export default Page;
