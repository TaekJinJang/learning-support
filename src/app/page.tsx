import { LoginForm } from "@/components/auth/LoginForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">학습지원시스템</h1>
          <p className="mt-2 text-gray-600">계정에 로그인하세요</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
