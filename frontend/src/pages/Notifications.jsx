import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaBell,
  FaCheckCircle,
  FaBriefcase,
  FaTimesCircle,
} from "react-icons/fa";
import {
  fetchNotifications,
  markNotificationsAsRead,
} from "../redux/slices/notificationSlice";
import { formatDistanceToNow } from "date-fns";

function Notifications() {
  const dispatch = useDispatch();

  const { notifications, loading } = useSelector(
    (state) => state.notifications,
  );

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const loadNotifications = async () => {
      await dispatch(markNotificationsAsRead());
      dispatch(fetchNotifications());
    };

    loadNotifications();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
            <FaBell className="text-blue-600 text-2xl" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-800">Notifications</h1>

            <p className="text-slate-500">Stay updated with your activity</p>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-gray-500">Loading notifications...</p>
        )}

        {/* LIST */}
        <div className="space-y-4">
          {notifications?.map((item) => (
            <div
              key={item._id}
              className={`bg-white border rounded-2xl p-5 shadow-sm transition hover:shadow-md ${
                !item.isRead ? "border-blue-500" : "border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    {item.message.includes("accepted") ? (
                      <FaCheckCircle className="text-green-500 text-xl" />
                    ) : item.message.includes("rejected") ? (
                      <FaTimesCircle className="text-red-500 text-xl" />
                    ) : (
                      <FaBriefcase className="text-blue-500 text-xl" />
                    )}{" "}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 mt-1">{item.message}</p>

                    <p className="text-sm text-slate-400 mt-2">
                      {formatDistanceToNow(new Date(item.createdAt), {
                        addSuffix: true,
                      })}{" "}
                    </p>
                  </div>
                </div>

                {!item.isRead && <FaCheckCircle className="text-blue-500" />}
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {!loading && notifications?.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No notifications yet
          </p>
        )}
      </div>
    </div>
  );
}

export default Notifications;
