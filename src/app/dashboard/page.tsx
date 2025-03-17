import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">대시보드</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">내 강좌</h2>
          <p className="text-gray-600 mb-4">현재 수강중인 강좌를 확인하세요.</p>
          <Link
            href="/courses"
            className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            강좌 보기
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">최근 활동</h2>
          <p className="text-gray-600">최근 학습 활동이 없습니다.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">공지사항</h2>
          <p className="text-gray-600">새로운 공지가 없습니다.</p>
        </div>
      </div>
    </div>
  );
}
