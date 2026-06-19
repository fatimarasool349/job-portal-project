import { createElement } from "react";
import { Check, Info, AlertTriangle, XCircle } from "lucide-react";

export const getNotificationIconElement = (type, className = "text-gray-600") => {
  switch (type) {
    case "success":
      return createElement(Check, { className });
    case "info":
      return createElement(Info, { className });
    case "warning":
      return createElement(AlertTriangle, { className });
    case "error":
      return createElement(XCircle, { className });
    default:
      return createElement(Info, { className });
  }
};