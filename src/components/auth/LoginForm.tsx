"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기서 실제 로그인 로직을 처리합니다
    console.log("로그인 시도:", username, password);

    // 로그인 성공 시 대시보드로 이동
    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-6"
      aria-label="로그인 양식"
      noValidate
    >
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
          id="username-label"
        >
          아이디
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-blue-400 focus:scale-105"
          aria-labelledby="username-label"
          aria-required="true"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
          id="password-label"
        >
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-blue-400 focus:scale-105"
          aria-labelledby="password-label"
          aria-required="true"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:scale-105 focus:scale-105"
          aria-label="로그인 버튼"
        >
          로그인
        </button>
      </div>
    </form>
  );
}
