import Link from "next/link";
import React from "react";
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
              Don&apos;t have an account?{" "}
              <Link href={"/register"}>Sign Up!</Link>
            </p>
          </section>

          <section className="flex column gap1rem login_form">
            <div className="flex column gap075rem">
              <label htmlFor="email">Email</label>
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
                htmlFor="email"
              >
                Password{" "}
                <Link href={"/forget_password"}>Forgot your password?</Link>
              </label>
              <input
                placeholder="Password..."
                type="email"
                name="email"
                id="email"
              />
            </div>
            <AuthButton text={"Login"} />
            <p className="or">OR</p>
            <GoogleBtn text={"Continue with Google"} />
          </section>
        </section>
        <RightSide />
      </div>
    </div>
  );
};

export default Page;
