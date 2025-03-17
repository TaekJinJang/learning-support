import { CourseCard } from "@/components/courses/CourseCard";

export default function Courses() {
  const courses = [
    { id: 1, title: "웹 개발 기초", instructor: "김교수", totalLectures: 12 },
    {
      id: 2,
      title: "데이터 구조와 알고리즘",
      instructor: "이교수",
      totalLectures: 15,
    },
    { id: 3, title: "인공지능 입문", instructor: "박교수", totalLectures: 10 },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">강좌 목록</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
