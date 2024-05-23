import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { projectsDummyData } from "../data/projects";
import { FaPlus } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6
} from "react-icons/ri";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsDummyData.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "", label: "Project Details" }
  ];

  const phases = [
    {
      id: "phase1",
      name: "Planning",
      description:
        "Define the scope and objectives of the project or the upcoming sprint.",
      icon: <RiNumber1 size={24} />
    },
    {
      id: "phase2",
      name: "Designing",
      description:
        "Create the architecture and design for the features to be developed.",
      icon: <RiNumber2 size={24} />
    },
    {
      id: "phase3",
      name: "Development",
      description:
        "Write the code to implement the planned features and functionality.",
      icon: <RiNumber3 size={24} />
    },
    {
      id: "phase4",
      name: "Testing",
      description:
        "Verify that the code works as intended and meets the acceptance criteria.",
      icon: <RiNumber4 size={24} />
    },
    {
      id: "phase5",
      name: "Deployment",
      description:
        "Release the developed and tested features to a production or staging environment.",
      icon: <RiNumber5 size={24} />
    },
    {
      id: "phase6",
      name: "Review",
      description:
        "Assess the completed work and identify areas for improvement.",
      icon: <RiNumber6 size={24} />
    }
  ];

  const calculateStartDate = phaseIndex => {
    const daysToAdd = phaseIndex * 10; 
    const startDate = project.startdate ? new Date(project.startdate) : null;

    if (startDate) {
      if (project.completionrate >= (phaseIndex + 0) * (100 / phases.length)) {
        startDate.setDate(startDate.getDate() + daysToAdd);
        return startDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      }
    } else {
      return "Not Started";
    }

    return ""; 
  };

  const calculatePhaseStyle = phaseIndex => {
    const completionRatePerPhase = 100 / phases.length;
    const completionRateThreshold = phaseIndex * completionRatePerPhase;
    if (project.completionrate >= completionRateThreshold) {
      return {
        background: "rgb(33, 150, 243)",
        color: "#ffff"
      };
    } else {
      return {
        background: "rgb(214, 219, 223 )",
        color: "#ffff"
      };
    }
  };

  const getStatusClass = status => {
    switch (status) {
      case "Completed":
        return "text-green-500";
      case "In Progress":
        return "text-yellow-500";
      case "Not Started":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-4">
            <p className="text-3xl font-semibold">Project Details</p>
          </div>
        </div>
        <Breadcrumbs links={breadcrumbLinks} />
        <div className="mt-10">
          <p className="text-3xl font-semibold my-2">
            {project.projectname}
          </p>
          <div className="flex gap-2">
            <p className="font-semibold">Project progress:</p>{" "}
            <p className="text-primary">{project.completionrate}%</p>
          </div>
          <div className="flex gap-2">
            <p className="font-semibold">Project status:</p>
            <p className={getStatusClass(project.status)}>
              {project.status}
            </p>
          </div>
          <div>
            <p className="text-base font-semibold ">
              Assigned Dev team members
            </p>
            <div className="flex flex-wrap mt-2">
              {project.teams && project.teams.length > 0
                ? project.teams.map((member, index) =>
                    <div
                      key={index}
                      className="flex flex-col items-center mr-4 mb-4"
                    >
                      <img
                        src={member}
                        alt={`Team member ${index + 1}`}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-white"
                      />
                    </div>
                  )
                : <p>No team members available</p>}
              {(project.status === "Not Started" ||
                project.status === "In Progress") &&
                <div className="flex flex-col items-center mr-4 mb-4">
                  <div title="Add Members" className="flex justify-center bg-gray-400 rounded-full ring-2 ring-white w-16 h-16 cursor-pointer hover:opacity-75">
                    <FaPlus size={22} className="self-center text-white" />
                  </div>
                </div>}
            </div>
          </div>
          <div className="mt-8">
            <VerticalTimeline lineColor="#E5E8E8">
              {phases.map((phase, index) =>
                <VerticalTimelineElement
                  key={phase.id}
                  id={phase.id}
                  className="vertical-timeline-element--work"
                  date={
                    project.completionrate >=
                    (index + 0) * (100 / phases.length)
                      ? calculateStartDate(index)
                      : ""
                  }
                  iconStyle={calculatePhaseStyle(index)}
                  icon={phase.icon}
                >
                  <h3
                    className={`vertical-timeline-element-title text-xl font-semibold ${project.completionrate >=
                    (index + 0) * (100 / phases.length)
                      ? "text-black"
                      : "text-gray-300"}`}
                  >
                    {phase.name}
                  </h3>
                  <p
                    className={
                      project.completionrate >=
                      (index + 0) * (100 / phases.length)
                        ? "text-black"
                        : "text-gray-300"
                    }
                  >
                    {phase.description}
                  </p>
                </VerticalTimelineElement>
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
