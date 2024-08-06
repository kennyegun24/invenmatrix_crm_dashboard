import React from "react";
import RightSide from "@/components/auth/RightSide";
import { AuthButton } from "@/components/auth/GoogleBtn";

const Page = () => {
  return (
    <div className="login_page flex">
      <div className="flex sub_auth">
        <section className="first_part flex align_center justify_center column gap2rem">
          <h1>AJL Logo</h1>

          <section className="flex column gap05rem">
            <h3>Having trouble logging in?</h3>
            <p>
              Enter the email address linked to your account and we’ll send you
              a reset code. The code is ONLY VALID for 10 MINUTES maximum
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

            <AuthButton text={"Reset password"} />
          </section>
        </section>
        <RightSide />
      </div>
    </div>
  );
};

export default Page;
