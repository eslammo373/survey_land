import CreateSurvey from "@/components/Dashboard/SurveyView/SurveyView";
import EmptyDash from "@/components/Dashboard/EmptyDash/EmptyDash";
import SurveyContextProvider from "@/context/SurveyContext";

const Dashboard = () => {
  return <>
    <section className="dark:bg-secondaryDark min-h-screen flex flex-col items-center pt-6  ">
      <div className="container">

        <SurveyContextProvider>

        <EmptyDash />
        </SurveyContextProvider>

      </div>
    </section>
  </>;
};

export default Dashboard;
