function ProjectDetails({projectTitle,projectDesc}) {
  return (
    <div className="mb-4">
      <h4 className="font-bold text-light-header">
        {projectTitle}{" "}
        <span className="ml-2 bg-primary py-[2px] px-[5px] rounded-md text-dark-header text-sm">
          Primary
        </span>
      </h4>
      <p className="text-sm mt-1 text-light-text">
        {projectDesc}
      </p>
    </div>
  );
}

export default ProjectDetails;
