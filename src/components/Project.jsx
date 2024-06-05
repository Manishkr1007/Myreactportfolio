import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Project = ({ githubLink, projectLink, image, name, details }) => {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center gap-2 p-2">
        <div className="w-[250px]">
          <img src={image} />
        </div>
        <div className="flex justify-center items-center p-2">
          <h2 className="font-burtons font-semibold text-2xl">{name}</h2>
        </div>
        <div className="flex justify-center items-center">
          <p>{details}</p>
        </div>
      </div>
      <div>
        {/* <button className='bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md \ml-8' onClick={openLink}>View Project</button> */}
        {projectLink ? (
          <div className="flex gap-2 justify-center items-center">
            <a rel="noreferrer" href={githubLink} target="_blank">
              <AiFillGithub className="cursor-pointer text-2xl transition duration-500 hover:scale-125 ease-in-out" />
            </a>

            <a rel="noreferrer" href={projectLink} target="_blank">
              <AiOutlineLink className="cursor-pointer text-2xl transition duration-500 hover:scale-125 ease-in-out hover:fill-purple-600" />
            </a>
          </div>
        ) : (
          <div>
            <a rel="noreferrer" href={githubLink} target="_blank">
              <AiFillGithub className="cursor-pointer text-2xl transition duration-500 hover:scale-125 ease-in-out" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
