import withAuth from "../components/withAuth";
import ProjectList from "../components/ProjectList";

function Dashboard() {
  const sampleProjects = [
    { id: 1, name: "Project Alpha", description: "AI-powered web app" },
    { id: 2, name: "Project Beta", description: "E-commerce platform" },
    { id: 3, name: "Project Gamma", description: "Mobile game development" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <ProjectList projects={sampleProjects} />
    </div>
  );
}

export default withAuth(Dashboard);
