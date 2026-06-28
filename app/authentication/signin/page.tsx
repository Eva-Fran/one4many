"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// const VALID_USERNAME = "Admin";
// const VALID_PASSWORD = "admin";

export default function SignIn() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const handleSignIn = () => {
  if (!username || !password) {
    setError("Please enter your username and password.");
    return;
  }

  setError("");
  setLoading(true);
  localStorage.setItem("username", username);

  setTimeout(() => {
    router.push("/home");
  }, 600);
};

  return (
   <div className="min-h-screen bg-linear-to-b from-[#f8f6f1] to-[#ece8de] flex items-center justify-center px-4">
  <div className="w-full max-w-md -translate-y-12">
    <div className="bg-white rounded-3xl shadow-xl px-8 py-10 flex flex-col gap-6">
      {/* Logo */}
      <div className="text-center">
        <h1
          className="text-4xl text-[#1a1a1a]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          One4M
        </h1>

        <h2
          className="mt-4 text-3xl text-[#1a1a1a]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Welcome back
        </h2>

        <p className="text-sm text-[#6b6b6b] mt-2">
          Sign in to continue making an impact.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-3 text-sm">
          {error}
        </div>
      )}

      {/* Username */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#1a1a1a]">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-2xl border border-[#e6e3dc] bg-[#f8f6f1] text-black! px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d4a2d]/20"
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#1a1a1a]">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-2xl border border-[#e6e3dc] bg-[#f8f6f1] text-black! px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d4a2d]/20"
        />
      </div>

      {/* Remember Me */}
      <label className="flex items-center gap-2 text-sm text-[#6b6b6b]">
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="accent-[#c8942a]"
        />
        Remember me
      </label>

      {/* Button */}
      <button
        onClick={handleSignIn}
        disabled={loading}
        className="w-full bg-[#2d4a2d] text-white py-4 rounded-2xl font-semibold hover:bg-[#3a5e3a] transition"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

      <p className="text-center text-sm text-[#8a8a8a]">
        Enter any username and password to continue.
      </p>
    </div>
  </div>
</div>
  );
}
