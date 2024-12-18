function Profile() {
  return (
    <section id="profile" className="mb-28 text-center">
      <div className="mb-24 flex flex-col items-center md:flex-row md:items-start">
        <div className="w-full md:w-1/2 md:flex-shrink-0">
          <img
            src="/PortfolioImg/profile.png"
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
  );
}

export default Profile;
