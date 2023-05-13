import {SiGithub} from "react-icons/si";
import {TiSocialLinkedin} from "react-icons/ti";
import {BsTwitter} from "react-icons/bs";
import {ImBlog} from "react-icons/im";

const Socials = () => {
  return (
    <div className="p-10 mdh:fixed bottom-0 mdh:mx-auto w-full mdh:w-0">
      <ul className="flex flex-row mdh:flex-col items-center mdh:after:block after:w-0.5 mdh:after:h-20 after:bg-gray-700 mdh:after:mt-2 flex-wrap w-full justify-center mdh:justify-start">
        <li className="hover:-translate-y-0.5 transition">
          <a
            className="block p-2.5 hover:text-pink"
            target="_blank"
            href="https://github.com/marijanasevo"
          >
            <SiGithub className="w-5 h-5" />
          </a>
        </li>
        <li className="transition hover:-translate-y-0.5">
          <a
            className="block p-2.5 hover:text-pink"
            target="_blank"
            href="https://www.linkedin.com/in/marijanas/"
          >
            <TiSocialLinkedin className="w-6 h-6" />
          </a>
        </li>
        <li className="transition hover:-translate-y-0.5">
          <a
            className="block p-2.5 hover:text-pink"
            target="_blank"
            href="https://twitter.com/devlprr"
          >
            <BsTwitter className="w-5 h-5" />
          </a>
        </li>
        <li className="hover:-translate-y-0.5 transition">
          <a
            className="vertical block p-2.5 hover:text-pink"
            target="_blank"
            href="mailto:marijana@webdevlpr.com"
          >
            marijana@webdevlpr.com
          </a>
        </li>
        <li className="transition hover:-translate-y-0.5">
          <a
            className="block p-2.5 hover:text-pink"
            target="_blank"
            href="https://webdevlpr.com/"
          >
            <ImBlog className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials;