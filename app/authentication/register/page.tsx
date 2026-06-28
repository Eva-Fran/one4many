"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      // await createUserWithEmailAndPassword(auth, email, password);

      alert("Account created!");
      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Create account</button>

      <Link href="/authentication/signin" className="underline">
        Sign in
      </Link>
    </>
  );
}
