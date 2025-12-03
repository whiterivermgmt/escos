import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Host 1',
    image: '/logo/host1.jpg', 
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Host 2',
    image: '/logo/host2.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Exec',
    image: '/logo/exec.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
];

const OurTeam = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <div className="flex space-x-4">
                <a href={member.socials.facebook} className="text-blue-600 hover:text-blue-800">
                  <FaFacebookF />
                </a>
                <a href={member.socials.twitter} className="text-blue-400 hover:text-blue-600">
                  <FaTwitter />
                </a>
                <a href={member.socials.linkedin} className="text-blue-700 hover:text-blue-900">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
