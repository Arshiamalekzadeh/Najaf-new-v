import { Home2 } from "iconsax-react";
import PageHeader from "../ui/PageHeader";
import SimplePage from "../ui/SimplePage";
import NoData from "../assets/nodata.png";
import MissingPersonCard from "../components/admin/missingPersonCard";
import useAdmin from "../hooks/useAdmin";
import { useEffect } from "react";
import moment from "moment-jalaali";


const AdminDashbord = () => {
  const {
    missingPersonsCount,
    refetchMissingPersonsCount,

    foundedPersonsCount,
    refetchFoundedPersonsCount,

    lastMissingPersons,
    refetchLastMissingPersons,
  } = useAdmin();

  useEffect(() => {
    refetchFoundedPersonsCount();
    refetchMissingPersonsCount();
    refetchLastMissingPersons();
  }, []);

  const lastPerson = lastMissingPersons?.result?.items?.[0];

  return (
    <SimplePage className="!bg-slate-100">
      <PageHeader
        title="خانه"
        icon={<Home2 variant="Bulk" />}
        withoutBack
      />
      <div className="bg-gradient-to-b from-[#2189FF] to-[#0064E1] rounded-2xl text-white p-4 mt-4 shadow-md">
        <div className="flex justify-between items-center text-sm font-semibold px-4">
          <div className="flex-1 text-center">تعداد پیداشدگان</div>
          <div className="w-[1px] h-6 bg-white mx-2" />
          <div className="flex-1 text-center">تعداد گمشدگان</div>
        </div>
        <div className="flex justify-between text-center px-4 text-xl font-bold mt-2">
          <div className="flex-1">{foundedPersonsCount?.result?.count}</div>
          <div className="w-[1px] h-6 bg-transparent mx-2" />
          <div className="flex-1">{missingPersonsCount?.result?.count}</div>
        </div>
      </div>

      {/* آخرین گمشدگان */}
      <div className="bg-white rounded-t-3xl mt-6 p-4">
        <div className="flex justify-between items-center border-b pb-2 text-sm font-semibold text-gray-700">
          <span>آخرین گمشدگان</span>
          <span className="text-xs text-gray-500">
            {lastPerson
              ? moment(lastPerson.searcher.createdAt).format("jYYYY/jMM/jDD")
              : ""}
          </span>
        </div>

        {lastPerson ? (
          <div className="mb-10">
            <MissingPersonCard
              name={lastPerson.fullName}
              status={lastPerson.missingPersonStatus}
              dateTime={moment(lastPerson.searcher?.createdAt).format(
                "jYYYY/jMM/jDD - HH:mm:ss"
              )}
              ageRange={lastPerson.ageRange}
              gender={lastPerson.gender}
              location={`${lastPerson.countryName}، ${lastPerson.cityName}`}
              registerPlace={lastPerson.placeOfAppointment}
              destination={lastPerson.location?.title || "نامشخص"}
              description={lastPerson.description}
              reporterName={lastPerson.searcher?.fullName || "ناشناس"}
              personAvatar={lastPerson.personImageId || NoData}
              reporterAvatar={lastPerson.searcher?.profilePictureId || NoData}
              isSpecial={lastPerson.isSpecialPerson}
              onViewClick={() => console.log("مشاهده اطلاعات", lastPerson.id)}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-10">
            <img src={NoData} alt="No Data" className="w-28 h-28 opacity-70" />
            <p className="text-gray-500 mt-2 text-sm">
              هنوز گم‌شده‌ای ثبت نشده است
            </p>
          </div>
        )}
      </div>
    </SimplePage>
  );
};

export default AdminDashbord;
