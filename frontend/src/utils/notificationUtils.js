import { Check, Info, AlertTriangle, XCircle } from "lucide-react";

export const getNotificationIcon = (type) => {
  switch (type) {
    case "success":
      return Check;
    case "info":
      return Info;
    case "warning":
      return AlertTriangle;
    case "error":
      return XCircle;
    default:
      return Info;
  }
};