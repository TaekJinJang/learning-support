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
    <div
      className="bg-white overflow-hidden shadow-md rounded-lg"
      role="article"
      aria-labelledby={`course-title-${course.id}`}
    >
      <div className="px-6 py-4">
        <h3
          id={`course-title-${course.id}`}
          className="text-xl font-semibold mb-2"
          role="heading"
          aria-level={3}
        >
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4">강사: {course.instructor}</p>
        <p className="text-gray-600 mb-4">총 {course.totalLectures}개 강의</p>
        <Link
          href={`/courses/${course.id}`}
          className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label={`${course.title} 강의 보기`}
        >
          강의 보기
        </Link>
      </div>
    </div>
  );
}
