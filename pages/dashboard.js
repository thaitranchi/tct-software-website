import AddData from "../components/AddData";
import withAuth from "../components/withAuth";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <AddData />
      <ProjectList />
    </div>
  );
}

export default withAuth(Dashboard);