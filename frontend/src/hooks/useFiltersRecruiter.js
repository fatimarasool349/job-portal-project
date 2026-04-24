import { useMemo } from "react";

export const useFilteredRecruiters = (data = [], search = "", statusFilter = "All") => {
  return useMemo(() => {
    const searchText = search.toLowerCase();

    return data.filter((item) => {
      const company =
        (item.company?.name || item.company || "").toString().toLowerCase();

      const name =
        (item.name || "").toString().toLowerCase();

      const matchesSearch =
        company.includes(searchText) ||
        name.includes(searchText);

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [data, search, statusFilter]);
};