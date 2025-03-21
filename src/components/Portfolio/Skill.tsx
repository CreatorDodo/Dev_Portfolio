import RainbowText from '@/components/common/RainbowText.tsx';

function Skill() {
  return (
    <section id="skill" className="w-full py-12 border-b">
      <div className="container px-4 sm:px-6 md:px-10">
        <h2 className="mb-8 sm:mb-12 text-3xl sm:text-4xl font-bold text-gray-900 flex flex-wrap items-center">
          SKILL &&nbsp;<RainbowText>EXPERTISE</RainbowText>
          <span className="text-blue-600">.</span>
        </h2>

        <div className="space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row pt-8 sm:pt-12">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 w-full sm:w-72 mb-4 sm:mb-0">Languages</h3>
            <ul className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 list-disc pl-5">
              <li className="text-gray-800">Java</li>
              <li className="text-gray-800">GoLang</li>
              <li className="text-gray-800">Python</li>
              <li className="text-gray-800">
                <RainbowText>JavaScript</RainbowText>
              </li>
              <li className="text-gray-800">
                <RainbowText>TypeScript</RainbowText>
              </li>
              <li className="text-gray-800">HTML/CSS</li>
              <li className="text-gray-800">SQL</li>
            </ul>
          </div>

          <div className="border-t pt-12 sm:pt-16 flex flex-col sm:flex-row">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 w-full sm:w-72 mb-4 sm:mb-0">
              Frameworks & Libraries
            </h3>
            <ul className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 list-disc pl-5">
              <li className="text-gray-800">
                <RainbowText>React</RainbowText>
              </li>
              <li className="text-gray-800">Vue.js</li>
              <li className="text-gray-800">jQuery</li>
              <li className="text-gray-800">Spring</li>
              <li className="text-gray-800">MyBatis</li>
              <li className="text-gray-800">Node.js</li>
              <li className="text-gray-800">Next.js</li>
              <li className="text-gray-800">Express.js</li>
              <li className="text-gray-800">Bootstrap</li>
              <li className="text-gray-800">
                <RainbowText>DaisyUI</RainbowText>
              </li>
              <li className="text-gray-800">AntDesign</li>
              <li className="text-gray-800">Vite</li>
              <li className="text-gray-800">Cypress</li>
              <li className="text-gray-800">Vitest</li>
            </ul>
          </div>
          <div className="border-t pt-12 sm:pt-16 flex flex-col sm:flex-row">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 w-full sm:w-72 mb-4 sm:mb-0">
              Infrastructure & Databases
            </h3>
            <ul className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 list-disc pl-5">
              {/* TODO: 완전히 배우면 넣자 */}
              {/* <li className="text-gray-800">AWS</li> */}
              <li className="text-gray-800">Apache</li>
              <li className="text-gray-800">
                <RainbowText>MongoDB</RainbowText>
              </li>
              <li className="text-gray-800">Linux</li>
              <li className="text-gray-800">OracleDB</li>
              <li className="text-gray-800">MySQL</li>
              <li className="text-gray-800">
                <RainbowText>Supabase</RainbowText>
              </li>
            </ul>
          </div>
          <div className="border-t pt-12 sm:pt-16 flex flex-col sm:flex-row">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 w-full sm:w-72 mb-4 sm:mb-0">Tools & IDEs</h3>
            <ul className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 list-disc pl-5">
              <li className="text-gray-800">Vim</li>
              <li className="text-gray-800">
                <RainbowText>Git</RainbowText>
              </li>
              <li className="text-gray-800">Eclipse IDE</li>
              <li className="text-gray-800">IntelliJ IDEA</li>
              <li className="text-gray-800">
                <RainbowText>VS Code</RainbowText>
              </li>
              <li className="text-gray-800">
                <RainbowText>GitHub</RainbowText>
              </li>
              <li className="text-gray-800">GitLab</li>
              <li className="text-gray-800">Gerrit</li>
              <li className="text-gray-800">Slack</li>
              <li className="text-gray-800">Notion</li>
              <li className="text-gray-800">Jira</li>
            </ul>
          </div>
          <div className="border-t pt-12 sm:pt-16 flex flex-col sm:flex-row">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-500 w-full sm:w-72 mb-4 sm:mb-0">AI Tools</h3>
            <ul className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 list-disc pl-5">
              <li className="text-gray-800">
                <RainbowText>ChatGPT</RainbowText>
              </li>
              <li className="text-gray-800">
                <RainbowText>Claude</RainbowText>
              </li>
              <li className="text-gray-800">
                <RainbowText>Cursor</RainbowText>
              </li>
              <li className="text-gray-800">
                <RainbowText>GitHub Copilot</RainbowText>
              </li>
              <li className="text-gray-800">
                <RainbowText>Vercel v0</RainbowText>
              </li>
              <li className="text-gray-800">Grok</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
