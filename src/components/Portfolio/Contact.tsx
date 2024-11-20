import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaBlogger, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="w-full py-12">
      <div className="container px-10">
        <h2 className="text-4xl font-bold mb-8">
          Contact<span className="text-blue-600">.</span>
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">difbfl4750@naver.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700 font-semibold">Please contact me by email</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub className="h-5 w-5 text-blue-600" />
            <a href="https://github.com/CreatorDodo" className="text-gray-700 hover:text-blue-600">
              https://github.com/CreatorDodo
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaBlogger className="h-5 w-5 text-blue-600" />
            <a href="https://medium.com/@Dodo3" className="text-gray-700 hover:text-blue-600">
              https://medium.com/@Dodo3
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FaLinkedin className="h-5 w-5 text-blue-600" />
            <a href="https://www.linkedin.com/in/creatordodo/" className="text-gray-700 hover:text-blue-600">
              https://www.linkedin.com/in/creatordodo/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
