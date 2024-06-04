"use client";
import { Login } from "@/services/Auth.service";
import React from "react";
import { useFormState } from "react-dom";

function LoginForm() {
  const [formState, formAction] = useFormState(Login, { error: "" });
  return (
    <form action={formAction}>
      <input
        type="text"
        name="Username"
        placeholder="Username"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="password"
        name="Password"
        placeholder="Password"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
      />
      {formState.error && <h1>{formState.error}</h1>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
