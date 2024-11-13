// import Image from 'next/image';
// import Link from 'next/link';
import { Mail, Phone, Globe, Github, Facebook, Rss } from 'lucide-react';
import PortfolioPageLayout from '../layouts/PortfolioPageLayout.tsx';
import Header from '../components/Portfolio/Header.tsx';

function PortfolioPage() {
  return (
    <PortfolioPageLayout>
      <Header />

      <div className="min-h-screen bg-white">
        <main className="container mx-auto max-w-6xl px-4 py-16">
          <section id="profile" className="mb-24 text-center">
            <div className="mb-24 flex flex-col items-center gap-16 md:flex-row md:items-start md:gap-12">
              <div className="w-full md:w-1/2 md:flex-shrink-0">
                <img
                  src="/profile.png"
                  alt="Profile of 김도영"
                  className="mx-auto rounded-full w-96 h-96 object-cover"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h1 className="mb-8 text-left text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-left">
                  반갑습니다,
                  <br />
                  저는 김도영입니다<span className="text-blue-600">.</span>
                </h1>
                <p className="mx-auto mb-6 max-w-3xl text-left text-xl font-bold tracking-wide text-gray-800">
                  Python을 시작으로 Java, GoLang, Vue.js, React, Node.js 등 다양한 언어와 기술을 익히며 개발 역량을
                  쌓아왔습니다. 현재는 프론트엔드 개발에 집중하고 있으며 실무에 강한 역량을 갖추고 있습니다. 팀원들과의
                  협업뿐만 아니라 네트워킹과 새로운 기술 트렌드에도 많은 관심을 가지고 있으며, 지속적인 기술 학습과 문제
                  해결을 통해 프로젝트 생산성을 높이고 구조적 개선을 추구하고 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section id="work-experience" className="mb-24">
            <h1 className="mb-12 text-4xl font-bold text-gray-900">
              Work Experience<span className="text-blue-600">.</span>
            </h1>
            <div className="space-y-12">
              <div className="border-b border-gray-200 pb-8">
                <h2 className="mb-2 text-2xl font-semibold text-gray-900">
                  가이랩<span className="text-blue-600">.</span>
                </h2>
                <p className="mb-4 text-gray-600">Frontend Developer | 2020. 08 - 현재</p>
                <p className="text-gray-700">가이랩 만들고 유지보수하고 있습니다.</p>
              </div>
              <div className="border-b border-gray-200 pb-8">
                <h2 className="mb-2 text-2xl font-semibold text-gray-900">
                  가이랩 JavaScript SDK<span className="text-blue-600">.</span>
                </h2>
                <p className="mb-4 text-gray-600">2020. 08 - 현재</p>
                <p className="text-gray-700">
                  Description<span className="text-blue-600">.</span>
                </p>
              </div>
            </div>
          </section>

          <section id="skill" className="mb-24">
            <h1 className="mb-12 text-4xl font-bold text-gray-900">
              SKILL<span className="text-blue-600">.</span>
            </h1>

            <div className="space-y-16">
              {/* Languages */}
              <div>
                <h2 className="mb-6 text-xl font-medium text-gray-500">Languages</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-gray-800">Kotlin</div>
                    <div className="text-gray-800">Java</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800">TypeScript</div>
                    <div className="text-gray-800">JavaScript</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800">HTML/CSS</div>
                  </div>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div>
                <h2 className="mb-6 text-xl font-medium text-gray-500">Frameworks & Libraries</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-gray-800">Spring Boot</div>
                    <div className="text-gray-800">Node.js</div>
                    <div className="text-gray-800">Express.js</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800">Nest.js</div>
                    <div className="text-gray-800">Next.js</div>
                    <div className="text-gray-800">React.js</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800">CodeIgniter</div>
                    <div className="text-gray-800">Coroutine</div>
                  </div>
                </div>
              </div>

              {/* Infrastructure & Databases */}
              <div>
                <h2 className="mb-6 text-xl font-medium text-gray-500">Infrastructure & Databases</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-gray-800">AWS</div>
                    <div className="text-gray-800">NCP</div>
                    <div className="text-gray-800">Kubernetes</div>
                    <div className="text-gray-800">Docker</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800">nginx</div>
                    <div className="text-gray-800">Apache</div>
                    <div className="text-gray-800">Kafka</div>
                    <div className="text-gray-800">MySQL</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800">Redis</div>
                    <div className="text-gray-800">MongoDB</div>
                    <div className="text-gray-800">Linux</div>
                  </div>
                </div>
              </div>

              {/* Tools & IDEs */}
              <div>
                <h2 className="mb-6 text-xl font-medium text-gray-500">Tools & IDEs</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-gray-800">Vim</div>
                    <div className="text-gray-800">VS Code</div>
                    <div className="text-gray-800">IDEA</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800">Git</div>
                    <div className="text-gray-800">Github</div>
                    <div className="text-gray-800">Bitbucket</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800">Jenkins</div>
                    <div className="text-gray-800">Jira</div>
                    <div className="text-gray-800">Confluence</div>
                  </div>
                </div>
              </div>

              {/* Misc */}
              <div>
                <h2 className="mb-6 text-xl font-medium text-gray-500">Misc</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-gray-800">DevOps</div>
                    <div className="text-gray-800">Agile</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800">HHKB</div>
                    <div className="text-gray-800">Drum</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800">Electric Guitar</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="mb-24">
            <h1 className="mb-8 text-4xl font-bold text-gray-900">
              Contact<span className="text-blue-600">.</span>
            </h1>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">dodo.dev</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Please contact me by email</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-blue-600" />
                <a href="https://wiki.dodo.dev" className="text-gray-700 hover:text-blue-600">
                  https://wiki.dodo.dev
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-blue-600" />
                <a href="https://github.com/creatorDodo" className="text-gray-700 hover:text-blue-600">
                  https://github.com/creatorDodo
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-blue-600" />
                <a href="https://fb.com/dodo" className="text-gray-700 hover:text-blue-600">
                  https://fb.com/dodo
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Rss className="h-5 w-5 text-blue-600" />
                <a href="https://blog.dodo.dev" className="text-gray-700 hover:text-blue-600">
                  https://blog.dodo.dev
                </a>
              </div>
            </div>
          </section>
          <section className="mb-24">
            <div className="mb-8 flex items-center gap-2">
              <h2 className="text-4xl font-bold text-blue-500">
                EXPERIENCE<span className="text-blue-600">.</span>
              </h2>
              {/* <Badge variant="secondary" className="h-fit">
                총 9년 2개월
              </Badge> */}
            </div>

            <div className="space-y-12">
              {/* NAVER */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xl text-gray-600">2021. 02 ~ 2024. 11</span>
                  <span className="font-bold">네이버 (NAVER)</span>
                  {/* <Badge variant="secondary">재직중</Badge>
                  <Badge variant="secondary">3년 10개월</Badge> */}
                </div>

                <div className="mb-6 space-y-6">
                  <div>
                    <h3 className="mb-4 text-lg italic text-gray-800">Shopping Product NSPA 백엔드 개발자</h3>
                    <div className="space-y-2">
                      <p>2024. 02 ~</p>
                      <ul className="ml-5 list-disc space-y-2">
                        <li>Scheduled to be updated after December 2024</li>
                      </ul>
                      <div className="mt-4">
                        <p className="mb-2 font-medium">Skill Keywords</p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Kotlin',
                            'Coroutine',
                            'Java',
                            'Spring Boot',
                            'MySQL',
                            'MongoDB',
                            'Redis',
                            'Kubernetes',
                            'Docker',
                            'Kafka',
                            'Jenkins',
                          ].map((skill) => (
                            // <Badge key={skill} variant="secondary">
                            //   {skill}
                            // </Badge>
                            <span key={skill} className="badge-secondary">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg italic text-gray-800">Forest CIC 쇼핑라이브 백엔드 개발자</h3>
                    <div className="space-y-2">
                      <p>2021. 02 ~ 2024. 02</p>
                      <ul className="ml-5 list-disc space-y-2">
                        <li>네이버 비디오커머스 서비스(쇼핑라이브) 백엔드 개발</li>
                        <li>쇼핑라이브 라이브 방송 및 숏클립 서비스 제공을 위한 데이터 모델링 / API 개발</li>
                        <li>사용자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현</li>
                        <li>레거시 전산 및 기존 비즈니스 유지보수</li>
                        <li>MySQL / NoSQL 데이터베이스 유지보수 및 관리</li>
                        <li>Kafka 이벤트 핸들링 및 쇼핑라이브 데이터 실시간 통합</li>
                        <li>Kubernetes 기반 컨테이너 클러스터 유지보수 및 관리</li>
                      </ul>
                      <div className="mt-4">
                        <p className="mb-2 font-medium">Skill Keywords</p>
                        <div className="flex flex-wrap gap-2">
                          {[
                            'Java',
                            'Spring Boot',
                            'NCP',
                            'Kubernetes',
                            'Docker',
                            'MySQL',
                            'MongoDB',
                            'Redis',
                            'Kafka',
                            'Jenkins',
                          ].map((skill) => (
                            <span key={skill} className="badge-secondary">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yanolia */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xl text-gray-600">2018. 02 ~ 2021. 02</span>
                  <span className="font-bold">야놀자 (Yanolia)</span>
                  {/* <Badge variant="secondary">3년 1개월</Badge> */}
                  <span className="secondary">3년 1개월</span>
                </div>

                <div className="space-y-2">
                  <h3 className="mb-4 text-lg italic text-gray-800">R&D 그룹 CX 개발실 백엔드 개발자</h3>
                  <ul className="ml-5 list-disc">
                    <li>국내 및 글로벌 숙박/레저 OTA (800명~, R&D 200명~)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PortfolioPageLayout>
  );
}

export default PortfolioPage;
