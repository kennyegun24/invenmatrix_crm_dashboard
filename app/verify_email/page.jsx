"use client";
import DotLoader from "@/components/loaders/DotLoader";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./style.css";
import SvgBlob from "@/components/loaders/SvgBlob";
import { FaCheck } from "react-icons/fa";
import Confetti from "react-confetti";
import error from "@/public/error.png";
import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";
const StillVerifying = () => {
  return (
    <>
      <h3>We are verifying your email.</h3>
      <p className="text_center">
        Please wait while we verify your email shortly... <br /> Hmmm, It will
        be over shortly...
      </p>
      <DotLoader />
    </>
  );
};

const AlreadyVerified = () => {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });
  const [showConfetti, setShowConfetti] = useState(true);
  useEffect(() => {
    // const handleResize = () => {
    setWindowSize({
      width: window?.innerWidth,
      height: window?.innerHeight,
    });
    // };

    // Add event listener to handle window resize
    // window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to remove event listener and timer
    return () => {
      // window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowSize.width * 0.4}
          height={windowSize.height * 0.4}
        />
      )}
      <div
        className="relative"
        style={{
          width: "50px",
          height: "50px",
          position: "relative",
        }}
      >
        <SvgBlob />
        <FaCheck className="absolute check_center" />
      </div>
      <h3>Verification Success.</h3>
      <p className="text_center">
        Your email has been verified already... <br /> Verification has been
        completed, you can now proceed to login to your account.
      </p>
    </>
  );
};

const ErrorOccured = ({ message }) => {
  const redirect = useRouter();
  return (
    <>
      <Image alt="Error icon" height={60} width={50} src={error} />
      <h3 className="text_red">An error occured.</h3>
      <p className="text_center text_red">
        {message}
        <br />
        Click to go back to the login page to get a new verification mail sent
        to you...
      </p>
      <button onClick={redirect.push("/login")}>Login</button>
    </>
  );
};
const Page = () => {
  const BACKEND_API_ROUTE = process.env.NEXT_PUBLIC_BACKEND_API_ROUTE;
  const searchParams = useSearchParams();
  const verification_id = searchParams.get("verification_id");

  const fetcher = async () => {
    try {
      const req = await fetch(
        `${BACKEND_API_ROUTE}/user/email_verification?verification_id=${verification_id}`
      );
      const data = await req.json();
      if (!req.ok) {
        const error = new Error(data.error);
        error.status = req.status;
        throw error;
      }
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const { data, error, isLoading } = useSWR(
    "all_folders_and_products",
    fetcher,
    {
      refreshInterval: null,
      errorRetryInterval: 5000,
      revalidateIfStale: false,
      revalidateOnMount: true,
      revalidateOnFocus: false,
      errorRetryCount: 1,
    }
  );
  return (
    <div className="flex align_center justify_center width100 verify_email_page">
      <div className="flex column align_center justify_center gap1rem verify_email_sub_page">
        {isLoading ? (
          <StillVerifying />
        ) : error ? (
          <ErrorOccured message={error?.message} />
        ) : (
          data && <AlreadyVerified />
        )}
      </div>
    </div>
  );
};

export default Page;
