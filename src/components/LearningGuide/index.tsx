interface LearningGuideProps {
  reasons: readonly string[];
  benefits: readonly string[];
  orderGuide: string;
}

// 목록 페이지 상단에 학습 이유, 장점, 학습 순서를 안내하는 컴포넌트
export default function LearningGuide({ reasons, benefits, orderGuide }: LearningGuideProps) {
  return (
    <div className="space-y-4 rounded bg-gray-50 p-4">
      <div>
        <h3 className="font-semibold">왜 배워야 할까요?</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
          {reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">사용하면 어떤 점이 좋을까요?</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-gray-600">{orderGuide}</p>
    </div>
  );
}
