import { Link } from 'react-router-dom';
// 메뉴별 학습 주제 설명
const MENUS = [] as const;

export default function Home() {
  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h2 className="text-xl font-bold">이펙트 비동기 통신</h2>

      <ul className="space-y-4">
        {MENUS.map(({ path, title, description }) => (
          <li key={path} className="rounded border border-gray-300 p-4 hover:bg-amber-50">
            <Link to={path} className="block">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
