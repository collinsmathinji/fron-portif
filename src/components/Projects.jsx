import React from 'react';
const projects = [
  {
    id: 1,
    title: 'Lembas',
    description: 'i mainly worked to create a weebApp that links investors with starups.The startups usually pitch their ideas which are visible to the investors the startups usually evalute their value and investors agree or disgree withe displayed share price ',
    image: 'https://s3-alpha-sig.figma.com/img/b985/72df/52cd838ce48d1584b6bca185ab241dcd?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qn-182I57EGmSoyjgbQcMkcQYa38rdHjd8kZ-weHsGdbprbmw6vrY14dLVKtZXkoTkduqLSIomyVNBo-iLTER5~HmPeNJUpO8z1RYIg0pwgwACz9xEBtRoGFrEu-m5lLGT-89q1jFRMAm85YUBwaGqfm1DU1DhBAq-OBRQ1UWV8RWvKc16xI1FYn6xe2-HOQtaZwQEAtMRaPFJo801UV5lyj~0Y5ABkpGQtsCxZhth-Rv6bsNCQdbujMwPFZyUMZEKVBgZ6Pb3spIv0n0ab3DmtONAbnEJEL7X4fV2ajSnpKKQJQk3WF7DYdJHNXsU1rtDd6ruChoTR0Loquzx3mIQ__',
    technologies: ['Express.js','Node.js', 'React', 'MongoDb'],
  },
  {
    id: 2,
    title: 'Universal Peace Federation Database',
    description: 'A comprehensive database system for the Universal Peace Federation, built with the MERN stack.i was incharge in creating a blog styled datbase hosting upto 13000 individuals.with page restrictions  depending on user role in the organistopn',
    image: 'https://th.bing.com/th/id/OIP.Kft-FCydeCfhYNySoMYMTAHaDX?rs=1&pid=ImgDetMain',
    technologies: ['Django', 'Typescript', 'React', 'Node.js'],
  },
  {
    id: 3,
    title: 'Notify.Tally',
    description: 'It was mainly Transferring their previous react website to a new react framework know as Next.js.The web app handles notifiction to individusla via email and discourse',
    image: 'https://th.bing.com/th/id/OIP.2VcEzowEE1aVODGomfsfOQHaD4?rs=1&pid=ImgDetMain',
    technologies: ['Next.js', 'React', 'Typescript'],
  }
  ,
  {
    id: 4,
    title: 'Diabetes App',
    description: 'it is main goal was for earlydetections and show the means of prevention and the ways to deal with Diabetic issues',
    image: 'https://th.bing.com/th/id/OIP.uzlo7uhweKEA1JoFGrN_8QHaD4?w=316&h=180&c=7&r=0&o=5&pid=1.7',
    technologies: ['MongoDb', 'React', 'Node.js','express.js'],
  },
  {
    id: 5,
    title: 'To-Do-list',
    description: 'its main work was totrack your to do items weather comlete or incomplete or yoou are working on it',
    image: 'https://th.bing.com/th/id/R.b6e0075c90aa863d1604fcea660ff6c3?rik=c0otgJqFF8JFsA&pid=ImgRaw&r=0',
    technologies: ['MongoDb', 'React', 'Node.js','express.js'],
  },
  {
    id: 6,
    title: 'Movie-App',
    description: 'it was to display the latest movie colllection',
    image: 'https://th.bing.com/th/id/R.0488c8bb3ae61102e9308233c339129e?rik=o3vbHjoBPZudMg&pid=ImgRaw&r=0',
    technologies: ['MongoDb', 'React', 'Node.js','express.js'],
  },
  {
    id: 7,
    title: 'Tic-Tac-Toe',
    description: 'it is a tic-Tac-Toe game',
    image: 'https://th.bing.com/th/id/R.c12e6e0dd1039d02529166522e056ad5?rik=MHmQx9UqoxccTA&pid=ImgRaw&r=0',
    technologies: ['MongoDb', 'React', 'Node.js','express.js'],
  },
  {
    id: 8,
    title: 'Tenzies Game',
    description: 'it is a tenzies game',
    image: 'https://th.bing.com/th/id/OIP.u3cmhjDyk-GPX_SKOB7AqgHaD6?rs=1&pid=ImgDetMain',
    technologies: ['MongoDb', 'React', 'Node.js','express.js'],
  },
  {
    id: 9,
    title: 'War-Crimes-Traker',
    description: 'it tracks war-crimes commited by Dictators',
    image: 'https://th.bing.com/th/id/OIP.qLIn2QibxR_M3BfpTEEKhgHaE8?w=220&h=180&c=7&r=0&o=5&pid=1.7',
    technologies: ['MongoDb', 'React', 'Node.js','express.js','remix'],
  },
];

function Projects() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          My Projects
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg">
              <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                <div className="mt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;