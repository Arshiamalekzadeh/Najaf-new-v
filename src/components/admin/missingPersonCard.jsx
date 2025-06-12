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

  return (
    <div className="rounded-2xl shadow-md bg-white p-4 space-y-2 w-full">
      <div className="flex justify-between items-center text-sm text-gray-600">
        {isSpecial && <span className="text-orange-500 font-semibold">افراد خاص</span>}
        <span>{dateTime}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{status}</p>
        </div>
        <img
          src={personAvatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border"
        />
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Location size={16} />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Profile size={16} />
          <span>{gender}</span>
          <span className="mx-1">|</span>
          <span>{ageRange}</span>
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
        <button
          className="text-blue-600 text-sm font-medium"
          onClick={onViewClick}
        >
          مشاهده اطلاعات
        </button>
        <div className="flex items-center gap-2 text-sm text-gray-800">
          <img
            src={reporterAvatar}
            alt={reporterName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{reporterName}</span>
        </div>
      </div>
    </div>
  );
};

export default MissingPersonCard;
