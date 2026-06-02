import API from "./axiosConfig";

export const getRecommendedJobs = async () => {
  try {
    const res = await API.get("/recommendations"); // no userId needed if backend uses req.user
    return res.data;
  } catch (error) {
    console.log("Error fetching recommended jobs:", error);
    return [];
  }
};

export const trackJobView = async (jobId, jobTitle) => {
  try {
       console.log("TRACKING JOB:", jobId, jobTitle);

    const res = await API.post("/recommendations", {
      jobId: jobId,
      jobTitle: jobTitle,
      actionType: "view",
    });
    console.log("TRACK RESPONSE:", res.data);
  } catch (error) {
    console.log("Error tracking job view:", error);
  }
};
