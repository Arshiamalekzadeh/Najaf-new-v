import { Grid } from "@mui/material";
import { Calendar2, House2, Monitor } from "iconsax-react";
import React from "react";
import LinkCard from "../components/linkCard";
import useRoleChecks from "../hooks/useRoles";
import PageHeader from "../ui/PageHeader";
import SimplePage from "../ui/SimplePage";

const Dashboard = () => {
  const { isAdmin } = useRoleChecks();

  return (
    <>
      <SimplePage className="!bg-slate-100">
        <PageHeader
          title="داشبورد"
          icon={<Monitor variant="Bulk" />}
          withoutBack
        ></PageHeader>
          
        <div className="grow p-9">
          <Grid container spacing={2} className="mb-4">
            {isAdmin && (
              <>
                <LinkCard
                  link="/app/accommodation"
                  icon={<House2 variant="Bulk" size={44} />}
                  color="bg-blue-400"
                  title="اقامتـگاه‌هـا"
                  subTitle="ورود به مدیریت اقامتـگاه‌هـا"
                />
                <LinkCard
                  link="/app/stays"
                  icon={<Calendar2 size={44} variant="Bulk" />}
                  color="bg-orange-400"
                  title="اقامت‌هـا"
                  subTitle="ورود به مدیریت اقامت‌هـا"
                />
              </>
            )}
          </Grid>
        </div>
      </SimplePage>
    </>
  );
};

export default Dashboard;
