// import { useState, useEffect, useMemo, useCallback } from "react";
// import UserTable from "../../components/adminComponents/user/UserTable";
// import Pagination from "../../components/adminComponents/common/Pagination";
// import UserFilters from "../../components/adminComponents/user/UserFilters";
// import { useRole } from "../../hooks/useRole";
// import { usePagination } from "../../hooks/usePagination";
// import { getAllUsers,deleteUser,updateUser } from "../../api/userApi";
// import ViewUserModal from "../../modal/ViewUserModal";

// function ManageUsers() {

// const [viewUser, setViewUser] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [roleFilter, setRoleFilter] = useState("All");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [loading, setLoading] = useState(false);

//   const [showModal, setShowModal] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);

//   const { canAdd, canEdit, canDelete } = useRole();

//   // 🔹 Fetch Users
//   const fetchUsers = useCallback(async () => {
//     try {
//       setLoading(true);
//       const res = await getAllUsers();
//       setUsers(res.data.users);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchUsers();
//   }, [fetchUsers]);

//   // 🔹 Filter Logic
//   const filteredUsers = useMemo(() => {
//     return users.filter((u) => {
//       if (u.isDeleted) return false;

//       const matchRole = roleFilter === "All" || u.role === roleFilter;
//       const matchStatus = statusFilter === "All" || u.status === statusFilter;

//       const matchSearch =
//         u.fullName?.toLowerCase().includes(search.toLowerCase()) ||
//         u.email?.toLowerCase().includes(search.toLowerCase());

//       return matchRole && matchStatus && matchSearch;
//     });
//   }, [users, search, roleFilter, statusFilter]);

//   // 🔹 Pagination
//   const pageSize = 10;
//   const { currentPage, paginatedData, setCurrentPage } =
//     usePagination(filteredUsers, pageSize);

//   // 🔹 Actions
//   const handleEdit = useCallback((user) => {
//     setEditingUser(user);
//     setShowModal(true);
//   }, []);

//   const handleDelete = useCallback(
//     async (id) => {
//       if (!canDelete) return;

//       const confirmDelete = window.confirm("Are you sure?");
//       if (!confirmDelete) return;

//       try {
//         await deleteUser(id); // soft delete from backend
//         setUsers((prev) =>
//           prev.map((u) =>
//             u._id === id ? { ...u, isDeleted: true } : u
//           )
//         );
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     [canDelete]
//   );

  

//   const handleStatus = useCallback(
//     async (id, newStatus) => {
//       if (!canEdit) return;

//       try {
//         await updateUser(id, { status: newStatus });

//         setUsers((prev) =>
//           prev.map((u) =>
//             u._id === id ? { ...u, status: newStatus } : u
//           )
//         );
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     [canEdit]
//   );

//  const handleView = (user) => {
//   setViewUser(user);
// };

//   return (
//     <section className="p-8 flex-1">
//       <UserFilters
//         search={search}
//         setSearch={setSearch}
//         roleFilter={roleFilter}
//         setRoleFilter={setRoleFilter}
//         statusFilter={statusFilter}
//         setStatusFilter={setStatusFilter}
//       />

//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <UserTable
//           data={paginatedData}
//           onEdit={canEdit ? handleEdit : null}
//           onDelete={canDelete ? handleDelete : null}
//           onToggleStatus={handleStatus}
//           onView={handleView}
//         />
//       )}

//       <Pagination
//         currentPage={currentPage}
//         totalEntries={filteredUsers.length}
//         pageSize={pageSize}
//         onPageChange={setCurrentPage}
//       />

//      {viewUser && (
//   <ViewUserModal
//     user={viewUser}
//     onClose={() => setViewUser(null)}
//   />
// )}
//     </section>
//   );
// }

// export default ManageUsers;