"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "bg-gray-900 text-white"
      : "text-gray-300 hover:bg-gray-700 hover:text-white";
  };

  // 키보드 사용 감지
  useEffect(() => {
    const handleTabNavigation = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        document.body.classList.add("using-keyboard");
      }
    };

    window.addEventListener("keydown", handleTabNavigation);
    return () => window.removeEventListener("keydown", handleTabNavigation);
  }, []);

  return (
    <nav className="bg-gray-800" role="navigation" aria-label="메인 네비게이션">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* 로고 이미지 */}
              <div className="w-10 h-10 mr-3 bg-white rounded-full overflow-hidden">
                <Image
                  src="/logo.svg"
                  alt="숙명여자대학교 로고"
                  width={40}
                  height={40}
                  className="object-contain"
                  onError={(e) => {
                    // 이미지 로드 실패 시 대체 텍스트 표시
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div>
                <span
                  className="text-white font-bold text-sm block"
                  aria-hidden="true"
                >
                  숙명여자대학교
                </span>
                <span
                  className="text-white font-bold text-xl"
                  role="heading"
                  aria-level={1}
                >
                  학습지원시스템
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div
                className="ml-10 flex items-baseline space-x-4"
                role="menubar"
                aria-label="메인 메뉴"
              >
                <Link
                  href="/dashboard"
                  role="menuitem"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:scale-110 focus:scale-110 ${isActive(
                    "/dashboard"
                  )}`}
                  aria-current={pathname === "/dashboard" ? "page" : undefined}
                >
                  대시보드
                </Link>
                <Link
                  href="/courses"
                  role="menuitem"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:scale-110 focus:scale-110 ${isActive(
                    "/courses"
                  )}`}
                  aria-current={pathname === "/courses" ? "page" : undefined}
                >
                  강좌
                </Link>
              </div>
            </div>
          </div>
          <div>
            <button
              className="bg-gray-700 p-2 rounded-md text-gray-200 hover:text-white transition-all hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={() => {
                window.location.href = "/";
              }}
              aria-label="로그아웃"
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
