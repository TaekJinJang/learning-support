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
    <div className="container mx-auto p-6">
      <Link
        href="/courses"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← 강좌 목록으로 돌아가기
      </Link>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-600 mb-2">강사: {course.instructor}</p>
        <p className="text-gray-700">{course.description}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">강의 목록</h2>
      <div className="space-y-4">
        {lectures.map((lecture) => (
          <LectureItem key={lecture.id} lecture={lecture} courseId={courseId} />
        ))}
      </div>
    </div>
  );
}
