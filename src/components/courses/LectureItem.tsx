import Link from "next/link";

interface LectureItemProps {
  lecture: {
    id: number;
    title: string;
    duration: string;
  };
  courseId: string;
}

export function LectureItem({ lecture, courseId }: LectureItemProps) {
  return (
    <Link
      href={`/courses/${courseId}/${lecture.id}`}
      className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-all hover:scale-105 focus:scale-105"
      aria-label={`${lecture.title} 강의 보기, 재생 시간: ${lecture.duration}`}
    >
      <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium" role="heading" aria-level={3}>
            {lecture.title}
          </h3>
          <span className="text-sm text-gray-500" aria-label="강의 재생 시간">
            {lecture.duration}
          </span>
        </div>
      </div>
    </Link>
  );
}
