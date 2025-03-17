import Link from "next/link";
import { LectureContent } from "@/components/courses/LectureContent";

export default function Lecture({
  params,
}: {
  params: { courseId: string; lectureId: string };
}) {
  const { courseId, lectureId } = params;

  // 예시 데이터
  const lecture = {
    id: lectureId,
    title: "HTML 기초",
    content:
      "HTML은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 다양한 태그를 사용하여 문서의 구조를 만들 수 있습니다.",
    videoUrl: "https://example.com/video.mp4",
  };

  return (
    <div className="container mx-auto p-6">
      <Link
        href={`/courses/${courseId}`}
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← 강의 목록으로 돌아가기
      </Link>

      <h1 className="text-3xl font-bold mb-6">{lecture.title}</h1>

      <LectureContent lecture={lecture} />
    </div>
  );
}
