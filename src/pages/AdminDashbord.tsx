import { Home2 } from "iconsax-react";
import PageHeader from "../ui/PageHeader";
import SimplePage from "../ui/SimplePage";
import NoData from "../assets/nodata.png"
import MissingPersonCard from "../components/admin/missingPersonCard";
import useAdmin from "../hooks/useAdmin";
import { useEffect } from "react";

const AdminDashbord = () => {
    const { missingPersonsCount,
        isLoadingMissingCount,
        isMissingCountError,
        isMissingCountSuccess,
        refetchMissingPersonsCount,

        foundedPersonsCount,
        isLoadingFoundedCount,
        isFoundedCountError,
        isFoundedCountSuccess,
        refetchFoundedPersonsCount, } = useAdmin()

          useEffect(() => {
            refetchFoundedPersonsCount()
            refetchMissingPersonsCount()
          }, []);
    return (
        <>
            <SimplePage className="!bg-slate-100">
                <PageHeader
                    title="خانه"
                    icon={<Home2 variant="Bulk" />}
                    withoutBack
                ></PageHeader>
                <div className="bg-gradient-to-b from-[#2189FF] to-[#0064E1] rounded-3xl text-white p-4 mt-4 mx-2 shadow-md">
                    <div className="flex justify-between items-center text-sm font-semibold px-4">
                        <div className="flex-1 text-center">تعداد پیداشدگان</div>
                        <div className="w-[1px] h-6 bg-white mx-2" />
                        <div className="flex-1 text-center">تعداد گمشدگان</div>
                    </div>
                    <div className="flex justify-between text-center px-4 text-xl font-bold mt-2">
                        <div className="flex-1">۰</div>
                        <div className="w-[1px] h-6 bg-transparent mx-2" />
                        <div className="flex-1">۰</div>
                    </div>
                </div>

                {/* آخرین گمشدگان */}
                <div className="bg-white rounded-t-3xl mt-6 p-4">
                    <div className="flex justify-between items-center border-b pb-2 text-sm font-semibold text-gray-700">
                        <span>آخرین گمشدگان</span>
                        <span className="text-xs text-gray-500">۲۸ اردیبهشت ۱۴۰۳</span>
                    </div>

                    {/* بدون داده */}
                    <div className="flex flex-col items-center justify-center mt-10">
                        <img src={NoData} alt="No Data" className="w-28 h-28 opacity-70" />
                        <p className="text-gray-500 mt-2 text-sm">هنوز گم‌شده‌ای ثبت نشده است</p>
                    </div>
                    <div className="mb-10">
                        <MissingPersonCard
                            name="یزدان حیدری"
                            status="در حال جستجو"
                            dateTime="۱۴۰۲/۰۳/۲۴ - ۱۲:۲۳:۴۴"
                            ageRange="جوان ۲۵-۲۰"
                            gender="مرد"
                            location="ایران، تهران"
                            registerPlace="صحن حضرت زهرا"
                            destination="نجف الاشرف - باب الرضا"
                            description="رنگ پیراهن و رنگ چشم و مشخصات ظاهری"
                            reporterName="حسین امیری"
                            personAvatar="/path/to/person.jpg"
                            reporterAvatar="/path/to/reporter.jpg"
                            isSpecial={true}
                            onViewClick={() => console.log("مشاهده اطلاعات")}
                        /></div>

                </div>


            </SimplePage>
        </>
    );
};

export default AdminDashbord;