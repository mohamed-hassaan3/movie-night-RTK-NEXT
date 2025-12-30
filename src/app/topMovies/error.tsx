"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Error = () => {
  const router = useRouter();
  return (
    <div className="text-center my-6 m-auto space-y-2">
      <p>Something went Wrong!</p>
      <button
        className="bg-red-600 text-white rounded-md px-12 py-2"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
