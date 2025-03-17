import Link from "next/link";

interface CourseProps {
  course: {
    id: number;
    title: string;
    instructor: string;
    totalLectures: number;
  };
}

export function CourseCard({ course }: CourseProps) {
  return (
    <div className="bg-white overflow-hidden shadow-md rounded-lg">
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">강사: {course.instructor}</p>
        <p className="text-gray-600 mb-4">총 {course.totalLectures}개 강의</p>
        <Link
          href={`/courses/${course.id}`}
          className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          강의 보기
        </Link>
      </div>
    </div>
  );
}
