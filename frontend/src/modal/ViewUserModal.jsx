// function ViewUserModal({ user, onClose }) {
//   if (!user) return null;

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white w-[500px] rounded-xl p-6 max-h-[80vh] overflow-y-auto">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">User Details</h2>
//           <button onClick={onClose} className="text-red-500 text-xl">✕</button>
//         </div>

//         {/* Basic Info */}
//         <div className="space-y-2 text-sm">

//           <p><b>Name:</b> {user.fullName || "N/A"}</p>
//           <p><b>Email:</b> {user.email || "N/A"}</p>
//           <p><b>Phone:</b> {user.phone || "N/A"}</p>
//           <p><b>Role:</b> {user.role || "N/A"}</p>
//           <p><b>Status:</b> {user.status || "N/A"}</p>

//           <hr className="my-3" />

//           {/* Recruiter */}
//           {user.role === "recruiter" && (
//             <>
//               <p><b>Company:</b> {user.companyName || "N/A"}</p>
//               <p><b>Website:</b> {user.website || "N/A"}</p>
//               <p><b>Location:</b> {user.location || "N/A"}</p>
//               <p><b>About:</b> {user.about || "N/A"}</p>
//             </>
//           )}

//           {/* Jobseeker */}
//           {user.role === "jobseeker" && (
//             <p><b>Applications:</b> {user.applicationsCount || 0}</p>
//           )}
//         </div>

//         <button
//           onClick={onClose}
//           className="mt-5 w-full bg-blue-600 text-white py-2 rounded-md"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ViewUserModal;