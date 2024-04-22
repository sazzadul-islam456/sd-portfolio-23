import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                 Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/sazzadul-islam-talha-716b04232/',
            style: 'rounded-tr-md'
        },

        {
          id: 2,
          child: (
              <>
               Facebook <FaFacebook size={30} />
              </>
          ),
          href: 'https://www.facebook.com/sazzad.sazzad.10236?mibextid=ZbWKwL',
          style: 'rounded-tr-md',
         
      },

        {
            id: 3,
            child: (
                <>
                 Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/sazzadul-islam456',
            style: 'rounded-tr-md'
        },

        {
            id: 4,
            child: (
                <>
                 Mail <HiOutlineMail size={30} />
                </>
            ),
            href:'mailto:sazzad.isalm.608@gmail.com',
           
        },

        {
            id: 5,
            child: (
                <>
                 Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/public/resume.pdf', // Check if this is a valid link to your PDF file
            style: 'rounded-br-md',
            download: true,
        },
    ];

  return (
    <div className="hidden lg:flex  flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
           <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500`+""+style}>
             <a href={href} className="flex justify-between items-center w-full text-white"
             download={download}
             target="_blank"
             rel="noreferrer"
             >
               {child}
             </a>
           </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
