interface LectureContentProps {
  lecture: {
    id: string;
    title: string;
    content: string;
    videoUrl: string;
  };
}

export function LectureContent({ lecture }: LectureContentProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* 실제 프로젝트에서는 여기에 비디오 플레이어가 들어갑니다 */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600">여기에 비디오 플레이어가 표시됩니다</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">강의 내용</h2>
        <div className="prose max-w-none">
          <p>{lecture.content}</p>
        </div>
      </div>
    </div>
  );
}
