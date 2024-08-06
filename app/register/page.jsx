import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import RightSide from "@/components/auth/RightSide";
import GoogleBtn, { AuthButton } from "@/components/auth/GoogleBtn";

const Page = () => {
  return (
    <div className="login_page flex">
      <div className="flex sub_auth">
        <section className="first_part flex align_center justify_center column gap15rem">
          <h1>AJL Logo</h1>

          <section className="flex column gap05rem">
            <h3>Welcome Back!</h3>
            <p>
              Have an account? <Link href={"/login"}>Sign in!</Link>
            </p>
          </section>

          <section className="flex column gap1rem login_form">
            <div className="flex column gap075rem">
              <label htmlFor="name">Name</label>
              <div className="flex gap05rem">
                <input
                  placeholder="First name..."
                  type="text"
                  name="first_name"
                  id="first_name"
                />
                <input
                  placeholder="Last name..."
                  type="text"
                  name="last_name"
                  id="last_name"
                />
              </div>
            </div>
            <div className="flex column gap075rem">
              <label htmlFor="password">Email Address</label>
              <input
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
                Password
              </label>
              <input
                placeholder="Password..."
                type="email"
                name="email"
                id="email"
              />
            </div>
            <AuthButton text={"Signup"} />
            <p className="or">OR</p>
            <GoogleBtn text={"Signup with Google"} />
          </section>
        </section>
        <RightSide />
      </div>
    </div>
  );
};

export default Page;
