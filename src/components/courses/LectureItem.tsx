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
    <Link href={`/courses/${courseId}/${lecture.id}`}>
      <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{lecture.title}</h3>
          <span className="text-sm text-gray-500">{lecture.duration}</span>
        </div>
      </div>
    </Link>
  );
}
