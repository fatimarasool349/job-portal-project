// import Header from "../../components/adminComponents/applicationDetail/Header";
// import CandidateCard from "../../components/adminComponents/applicationDetail/CandidateCard";
// import JobDetails from "../../components/adminComponents/applicationDetail/JobDetails";
// import Documents from "../../components/adminComponents/applicationDetail/Documents";
// import Notes from "../../components/adminComponents/applicationDetail/Notes";
// import Timeline from "../../components/adminComponents/applicationDetail/Timeline";
// import {updateApplicationStatus} from "../../redux/slices/applicationSlice.js"
// import { ApplicationData } from "../../constant/index.js";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// function ApplicationDetail() {
//   const { id } = useParams();
//   const application = useSelector((state) =>
//   state.applications.applications.find((a) => a.id == id)
// );
 
//   const dispatch = useDispatch();
 
//   const navigate = useNavigate();
//   return (
//     <main className="max-w-7xl mx-auto w-full px-8 py-8 flex-1">
//       <Header
//         status={application?.status}
//         onApprove={() =>    dispatch(updateApplicationStatus({ id: application.id, status: "accepted" }))}
//         onReject={() => dispatch(updateApplicationStatus({ id: application.id, status: "rejected" }))}
//         onMessage={() => navigate(`/dashboard/messages/${application.id}`)}
//       />

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//         {/* LEFT */}
//         <div className="lg:col-span-8 flex flex-col gap-6">
//           <CandidateCard data={ApplicationData} />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <JobDetails job={ApplicationData.job} />
//             <Documents resume={ApplicationData.resume} />
//           </div>

//           <Notes candidateId={ApplicationData.id} />
//         </div>

//         {/* RIGHT */}
//         <div className="lg:col-span-4">
//           <Timeline items={ApplicationData.timeline} />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default ApplicationDetail;
