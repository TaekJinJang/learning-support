"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "bg-gray-900 text-white"
      : "text-gray-300 hover:bg-gray-700 hover:text-white";
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl">
                학습지원시스템
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/dashboard"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
                    "/dashboard"
                  )}`}
                >
                  대시보드
                </Link>
                <Link
                  href="/courses"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
                    "/courses"
                  )}`}
                >
                  강좌
                </Link>
              </div>
            </div>
          </div>
          <div>
            <button
              className="bg-gray-700 p-2 rounded-md text-gray-200 hover:text-white"
              onClick={() => {
                // 로그아웃 처리 후 메인 페이지로 이동
                window.location.href = "/";
              }}
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
