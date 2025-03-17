import { LectureItem } from "@/components/courses/LectureItem";
import Link from "next/link";

export default function CourseLectures({
  params,
}: {
  params: { courseId: string };
}) {
  const courseId = params.courseId;

  // 예시 데이터
  const course = {
    id: courseId,
    title: "웹 개발 기초",
    instructor: "김교수",
    description: "HTML, CSS, JavaScript를 활용한 웹 개발의 기초를 배웁니다.",
  };

  const lectures = [
    { id: 1, title: "HTML 기초", duration: "45분" },
    { id: 2, title: "CSS 기초", duration: "50분" },
    { id: 3, title: "JavaScript 소개", duration: "60분" },
  ];

  return (
    <div
      className="container mx-auto p-6"
      role="region"
      aria-label={`${course.title} 강좌 상세 페이지`}
    >
      <Link
        href="/courses"
        className="text-blue-600 hover:underline mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-110 hover:scale-110 transition-all"
        aria-label="강좌 목록으로 돌아가기"
      >
        ← 강좌 목록으로 돌아가기
      </Link>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6" role="article">
        <h1 className="text-3xl font-bold mb-2" role="heading" aria-level={1}>
          {course.title}
        </h1>
        <p className="text-gray-600 mb-2">강사: {course.instructor}</p>
        <p className="text-gray-700">{course.description}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4" role="heading" aria-level={2}>
        강의 목록
      </h2>
      <div className="space-y-4" role="list" aria-label="강의 목록">
        {lectures.map((lecture) => (
          <div key={lecture.id} role="listitem">
            <LectureItem lecture={lecture} courseId={courseId} />
          </div>
        ))}
      </div>
    </div>
  );
}
