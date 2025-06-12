import { Location, Profile } from "iconsax-react";

const MissingPersonCard = (props) => {
  const {
    name,
    status,
    dateTime,
    ageRange,
    gender,
    location,
    registerPlace,
    destination,
    description,
    reporterName,
    reporterAvatar,
    personAvatar,
    isSpecial,
    onViewClick,
  } = props;

  const getAgeRangeLabel = (code) => {
    const map = {
      0: "ناشناخته",
      1: "کودک ۰–۱۲",
      2: "نوجوان ۱۲–۱۸",
      3: "جوان ۱۸–۲۵",
      4: "میانسال ۲۵–۵۰",
      5: "سالمند ۵۰+",
    };
    return map[code] || "نامشخص";
  };

  const getGenderLabel = (code) => {
    const map = {
      0: "مرد",
      1: "زن",
    };
    return map[code] || "نامشخص";
  };

  const getStatusLabel = (code) => {
    const map = {
      0: "در حال جستجو",
      1: "پیدا شده",
    };
    return map[code] || "نامشخص";
  };

  return (
    <div className="rounded-2xl shadow-md bg-white p-4 space-y-2 w-full">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex gap-3">
            <img
              src={personAvatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">{name}</p>
              <p className="text-sm text-gray-500">{getStatusLabel(status)}</p>
            </div>
            <div>
              <div className="flex flex-col  items-end text-sm text-gray-600">
                {isSpecial && <span className="text-orange-500 font-semibold">افراد خاص</span>}
                <span>{dateTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Location size={16} />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Profile size={16} />
          <span>{getGenderLabel(gender)}</span>
          <span className="mx-1">|</span>
          <span>{getAgeRangeLabel(ageRange)}</span>
        </div>
      </div>

      <div className="text-sm space-y-1 text-gray-800">
        <p>
          <span className="font-medium">محل ثبت:</span>{" "}
          <span className="text-green-600">{registerPlace}</span>
        </p>
        <p>
          <span className="font-medium">محل قرار:</span>{" "}
          <span className="text-green-600">{destination}</span>
        </p>
        <p>
          <span className="font-medium">توضیحات:</span>{" "}
          <span className="text-green-600">{description}</span>
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t">
        <div className="flex items-center gap-2 text-sm text-gray-800">
          <img
            src={reporterAvatar}
            alt={reporterName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{reporterName}</span>
        </div>
        <button
          className="text-blue-600 text-sm font-medium"
          onClick={onViewClick}
        >
          مشاهده اطلاعات
        </button>
      </div>
    </div>
  );
};

export default MissingPersonCard;
