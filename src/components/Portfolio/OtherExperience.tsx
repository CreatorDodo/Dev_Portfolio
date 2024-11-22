import Badge from '@/components/common/Badge.tsx';

function OtherExperience() {
  return (
    <section id="other-experience" className="w-full py-12 border-b">
      <div className="container px-10">
        <h2 className="text-4xl font-bold mb-8">
          Other Experience<span className="text-blue-600">.</span>
        </h2>
        <div className="space-y-12">
          <div className="border-b border-gray-200 pb-8">
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              청년취업사관학교<span className="text-blue-600">.</span>
            </h3>
            <p className="mb-4 text-blue-500 font-bold">
              자바스크립트 웹서비스 개발자 과정 | 2024. 10 - 2025. 01 | <Badge variant="secondary">Node.js</Badge>{' '}
              <Badge variant="secondary">Express</Badge> <Badge variant="secondary">JavaScript</Badge>{' '}
              <Badge variant="secondary">AWS</Badge>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li className="text-gray-700">Node.js, Express, React 등을 활용한 웹서비스 개발자 과정 교육 이수.</li>
            </ul>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              항해 플러스<span className="text-blue-600">.</span>
            </h3>
            <p className="mb-4 text-blue-500 font-bold">
              프론트엔드 코스 1기 | 2024. 03 - 2024. 05 | <Badge variant="secondary">JavaScript</Badge>{' '}
              <Badge variant="secondary">React</Badge> <Badge variant="secondary">Design Pattern</Badge>{' '}
              <Badge variant="secondary">Jest</Badge> <Badge variant="secondary">SEO</Badge>{' '}
              <Badge variant="secondary">SSR</Badge>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li className="text-gray-700">프론트엔드 개발자 역량 강화 교육 이수.</li>
              <li className="text-gray-700">
                일정 관리 팀 프로젝트<span className="text-blue-600">[Date Leaf]</span> 개발.
              </li>
            </ul>
          </div>
          <div className="border-gray-200 pb-8">
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              쌍용교육센터<span className="text-blue-600">.</span>
            </h3>
            <p className="mb-4 text-blue-500 font-bold">
              Java 기반 풀스택 개발자 양성과정 | 2022. 10 - 2023. 04 | <Badge variant="secondary">Java</Badge>{' '}
              <Badge variant="secondary">Spring</Badge> <Badge variant="secondary">JavaScript</Badge>{' '}
              <Badge variant="secondary">AJAX</Badge> <Badge variant="secondary">Oracle SQL</Badge>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li className="text-gray-700">Java 기반 풀스택 개발자 양성과정 교육 이수.</li>
              <li className="text-gray-700">Java 기반 프로젝트 2건, Spring 기반 프로젝트 1건 개발.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherExperience;
