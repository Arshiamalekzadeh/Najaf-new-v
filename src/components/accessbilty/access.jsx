import { UserOctagon, ArrowRight2 } from "iconsax-react";
import PageHeader from "../../ui/PageHeader";
import SimplePage from "../../ui/SimplePage";
import { useAccessible } from "../../hooks/useAccessible";
import { useState } from "react";
import AppModal from "../../ui/AppModal";
import { useEffect } from "react";

const Access = () => {
  const { isLoadingRoles, isRolesError, isRolesSuccess, refetchRoles, roles } = useAccessible();
  const [modalRole, setModalRole] = useState(null);

  const openModal = (role) => {
    setModalRole(role);
  };

  const closeModal = () => {
    setModalRole(null);
  };
  useEffect(() => {
    refetchRoles();
}, []);

  return (
    <SimplePage className="!bg-slate-100">
      <PageHeader title="مدیریت دسترسی" icon={<UserOctagon variant="Bulk" />} />
      {isLoadingRoles && <p className="text-center text-gray-500">در حال بارگذاری...</p>}
      {isRolesError && (
        <p className="text-center text-red-500">
          خطا در دریافت نقش‌ها.{" "}
          <button onClick={refetchRoles} className="text-blue-500 underline">
            تلاش مجدد
          </button>
        </p>
      )}
      {isRolesSuccess && roles?.result?.items?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {roles.result.items.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-gray-800">{role.persianName}</h3>
              <button
                onClick={() => openModal(role)}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <ArrowRight2 className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      )}
      <AppModal
        open={!!modalRole}
        handleClose={closeModal}
        title={modalRole?.persianName || "جزئیات نقش"}
        content={
          modalRole && (
            <div className="text-gray-600">
              <p>
                <strong>نام انگلیسی:</strong> {modalRole.name}
              </p>
              <p>
                <strong>توضیحات:</strong> {modalRole.description || "بدون توضیحات"}
              </p>
            </div>
          )
        }
        titleIcon={<UserOctagon variant="Bulk" />}
        size="medium"
      />
    </SimplePage>
  );
};

export default Access;