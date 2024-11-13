// import Image from 'next/image';
// import Link from 'next/link';
import { Mail, Phone, Globe, Github, Facebook, Rss } from 'lucide-react';
import PortfolioPageLayout from '../layouts/PortfolioPageLayout.tsx';

function PortfolioPage() {
  return (
    <PortfolioPageLayout>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">김도영</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="text-blue-600 hover:text-blue-800">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-blue-600 hover:text-blue-800">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-600 hover:text-blue-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="about" className="mb-12">
          <div className="flex flex-col items-center space-y-6 md:flex-row md:items-start md:space-x-12 md:space-y-0">
            <img src="/placeholder.svg" alt="김도영" width={300} height={300} className="rounded-full" />
            <div>
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                반갑습니다,
                <br />
                저는 김도영입니다.
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                서울에서 1년차 웹 프론트엔드 엔지니어로 일하고 있으며
                <br />
                좋아합니다. 나온다고 믿습니다.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="rounded-md bg-blue-600 px-6 py-2 text-white transition duration-300 hover:bg-blue-700"
                >
                  Contact Me
                </a>
                <a
                  href="#experience"
                  className="rounded-md bg-gray-200 px-6 py-2 text-gray-800 transition duration-300 hover:bg-gray-300"
                >
                  View Experience
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Work Experience</h2>
          <div className="space-y-8">
            {[
              {
                id: 1,
                company: '가이랩',
                role: 'Frontend Developer',
                period: '2020. 08 - 현재',
                description: '유지보수하고 있습니다.',
              },
              {
                id: 2,
                company: '가이랩',
                role: 'Frontend Developer',
                period: '2020. 08 - 현재',
                description: '프로젝트하고 있습니다.',
              },
              // Add more experiences as needed
            ].map((exp) => (
              <div key={exp.id} className="rounded-lg bg-white p-6 shadow">
                <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
                <p className="text-gray-600">
                  {exp.role} | {exp.period}
                </p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Contact</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600" />
              <span>dodo.dev</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-600" />
              <span>Please contact me by email</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="text-blue-600" />
              <a href="https://wiki.yowu.dev" className="text-blue-600 hover:underline">
                https://wiki.dodo.dev
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Github className="text-blue-600" />
              <a href="https://github.com/dodo" className="text-blue-600 hover:underline">
                https://github.com/creatorDodo
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Facebook className="text-blue-600" />
              <a href="https://fb.com/dodo" className="text-blue-600 hover:underline">
                https://fb.com/dodo
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Rss className="text-blue-600" />
              <a href="https://blog.dodo.dev" className="text-blue-600 hover:underline">
                https://blog.yowu.dev
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 bg-gray-100">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>© 2024 김도영. All rights reserved.</p>
        </div>
      </footer>
    </PortfolioPageLayout>
  );
}

export default PortfolioPage;
