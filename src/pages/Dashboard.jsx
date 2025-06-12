import { Grid } from "@mui/material";
import { Calendar2, House2 } from "iconsax-react";
import React from "react";
import LinkCard from "../components/linkCard";
import useRoleChecks from "../hooks/useRoles";
import PageHeader from "../ui/PageHeader";
import SimplePage from "../ui/SimplePage";
import Dashboardup from "../components/dashboardup";
import Dashboarddown from "../components/dashboarddown";

const Dashboard = () => {
  const { isAdmin } = useRoleChecks();

  return (
    <SimplePage className="!bg-slate-100">
     <div className="flex flex-col h-full">
        <Dashboardup />
        <div className="flex-grow -mt-8 overflow-hidden">
          <Dashboarddown />
        </div>
      </div>

      <div className="grow p-9">
        <Grid container className="mb-4">
          {isAdmin && (
            <>
              <LinkCard
                link="/app/accommodation"
                icon={<House2 variant="Bulk" size={44} />}
                color="bg-blue-400"
                title="اقامتگاه‌ها"
                subTitle="ورود به مدیریت اقامتگاه‌ها"
              />
              <LinkCard
                link="/app/stays"
                icon={<Calendar2 size={44} variant="Bulk" />}
                color="bg-orange-400"
                title="اقامت‌ها"
                subTitle="ورود به مدیریت اقامت‌ها"
              />
            </>
          )}
        </Grid>
      </div>
    </SimplePage>
  );
};

export default Dashboard;
