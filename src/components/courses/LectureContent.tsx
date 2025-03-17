"use client";

import { useState } from "react";

interface LectureContentProps {
  lecture: {
    id: string;
    title: string;
    content: string;
    videoUrl: string;
  };
}

export function LectureContent({ lecture }: LectureContentProps) {
  // 비디오 플레이어 상태 관리 (접근성을 위해)
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="space-y-6" role="region" aria-label="강의 콘텐츠">
      {/* 수평 레이아웃을 위한 flex 컨테이너 */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* 비디오 영역 (60%) */}
        <div
          className="lg:w-[60%] bg-gray-100 p-4 rounded-lg h-[500px]"
          role="region"
          aria-label="강의 비디오"
        >
          <div
            className="aspect-w-16 aspect-h-9 bg-gray-300 flex items-center justify-center"
            role="application"
            aria-label={`${lecture.title} 비디오 플레이어`}
          >
            {/* 비디오 플레이어가 들어갈 자리 */}
            <div className="relative w-full h-full">
              <button
                className="absolute inset-0 w-full h-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-black hover:bg-opacity-10 transition-all"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "비디오 일시정지" : "비디오 재생"}
              >
                비디오 버튼
              </button>
              <p className="sr-only">
                {isPlaying ? "현재 재생 중" : "재생 준비됨"}
              </p>
              <p className="absolute bottom-4 left-4 text-gray-600 bg-white bg-opacity-80 px-2 py-1 rounded text-sm">
                {lecture.title} 강의 영상
              </p>
            </div>
          </div>
        </div>

        {/* 설명 콘텐츠 영역 (40%) */}
        <div
          className="lg:w-[40%] bg-white p-6 rounded-lg shadow-md"
          role="region"
          aria-label="강의 내용 설명"
        >
          <h2
            className="text-xl font-semibold mb-4"
            role="heading"
            aria-level={2}
          >
            설명 텍스트
          </h2>
        </div>
      </div>

      {/* 강의 전체 내용 섹션 */}
      <div
        className="bg-white p-6 rounded-lg shadow-md"
        role="region"
        aria-label="강의 상세 내용"
      >
        <h2
          className="text-xl font-semibold mb-4"
          role="heading"
          aria-level={2}
        >
          강의 전체 내용
        </h2>
        <div className="prose max-w-none">
          <p>{lecture.content}</p>
          <p className="mt-4">
            HTML(Hypertext Markup Language)은 웹 페이지의 구조를 정의하는 마크업
            언어입니다. 웹 브라우저는 HTML 문서를 읽고 화면에 표시합니다. 이
            강의에서는 HTML의 기본 구조와 주요 태그들의 역할, 그리고 시맨틱
            마크업의 중요성에 대해 알아봅니다.
          </p>
        </div>
      </div>
    </div>
  );
}
