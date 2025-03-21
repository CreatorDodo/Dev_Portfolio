import Badge from '@/components/common/Badge.tsx';

function WorkExperience() {
  return (
    <section id="work-experience" className="w-full py-12 border-b">
      <div className="container px-10">
        <h2 className="text-4xl font-bold mb-8">
          Work Experience<span className="text-blue-600">.</span>
        </h2>
        <div className="space-y-12">
          {/* 스튜디오 바톤 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                스튜디오 바톤<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-600 mb-2">
                Full-stack Developer
                <br />
                2025. 02 - 2025. 03
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  셀렉션서울 VIP PASS 서비스(QA 대응 업무)<span className="text-blue-600">.</span>
                </h4>
                <p className="text-gray-600 mb-2">2025. 02 - 2025. 03</p>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-1">
                      Description<span className="text-blue-600">.</span>
                    </h5>
                    <p className="text-gray-700">
                      셀렉션서울 VIP PASS 관리시스템의 런칭 전 QA 대응 업무를 담당했습니다.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">
                      What did I do<span className="text-blue-600">.</span>
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>런칭 전 QA에서 발견된 이슈 해결 및 기능 개선.</li>
                      <li>QR코드 기반 VIP 입장 시스템 개발 및 데이터 CRUD 기능 구현.</li>
                      <li>고객 데이터 관리 기능 추가 및 서비스 운영 지원.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">
                      Tech Stack<span className="text-blue-600">.</span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">Prisma</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 가이랩 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                가이랩<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-600 mb-2">
                Backend Developer
                <br />
                2023. 06 - 2024. 03
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  고객사 계약관리 및 제휴사 페이지 구현<span className="text-blue-600">.</span>
                </h4>
                <p className="text-gray-600 mb-2">2023. 10 - 2023. 12</p>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-1">
                      Description<span className="text-blue-600">.</span>
                    </h5>
                    <p className="text-gray-700">고객사 계약관리 페이지와 제휴사 관리 페이지를 구현하였습니다.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">
                      What did I do<span className="text-blue-600">.</span>
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>고객 유입 데이터 분석 페이지 개발.</li>
                      <li>고객사별 제휴사 관리 페이지 개발.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">
                      Tech Stack<span className="text-blue-600">.</span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">GoLang</Badge>
                      <Badge variant="secondary">Vue.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  고객사 보험 데이터 관리 자동화<span className="text-blue-600">.</span>
                </h4>
                <p className="text-gray-600 mb-2">2023. 06 - 2024. 03</p>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-1">
                      Description<span className="text-blue-600">.</span>
                    </h5>
                    <p className="text-gray-700">
                      보험사 계약 데이터를 분석하여 RPA 자동화 로직을 개발하는 프로젝트에 기여하였습니다.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">
                      What did I do<span className="text-blue-600">.</span>
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>보험사 계약 데이터 분석 RPA 자동화 로직 개발.</li>
                      <li>서비스 개발 및 운영으로 고객사 유지율 상승에 기여.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">
                      Tech Stack<span className="text-blue-600">.</span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">GoLang</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">OracleDB</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
