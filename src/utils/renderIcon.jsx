import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PaymentIcon from "@mui/icons-material/Payment";
import HotelIcon from "@mui/icons-material/Hotel";
import { ExportCircle } from "iconsax-react";
import { Pending } from "@mui/icons-material";
import { CheckCircle } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";
import EventBusyIcon from '@mui/icons-material/EventBusy';

export const RenderIcon = (statusCode) => {
  switch (statusCode) {
    case 0:
      return <Pending className="text-slate-500" />;
    case 1:
      return <HourglassBottomIcon className="text-blue-500" />;
    case 2:
      return <MilitaryTechIcon className="text-green-500" />;
    case 3:
      return <PaymentIcon className="text-pink-400" />;
    case 4:
      return <CheckCircle className="text-green-500" />;
    case 5:
      return <HotelIcon className="text-blue-500" />;
    case 6:
      return <Cancel className="text-red-500" />;
    case 7:
      return <EventBusyIcon className="text-red-500" />;
    case 8:
      return <ExportCircle className="text-red-500" />;
    default:
      return null; // or a default icon
  }
};

export default RenderIcon;
