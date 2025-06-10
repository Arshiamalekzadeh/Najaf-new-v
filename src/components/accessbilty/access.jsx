import { ArrowRight2, UserOctagon } from "iconsax-react";
import { useEffect, useState } from "react";
import { useAccessible } from "../../hooks/useAccessible";
import AppModal from "../../ui/AppModal";
import PageHeader from "../../ui/PageHeader";
import SimplePage from "../../ui/SimplePage";
import noData from "../../assets/nodata.png"
import { toast } from "react-toastify";

const Access = () => {
  const {
    isLoadingRoles,
    isRolesError,
    isRolesSuccess,
    refetchRoles,
    roles,
    getRoleAccessibleDetial,
    allRoleAccessibles,
    isLoadingRoleAccessibles,
    isRoleAccessiblesSuccess,
    refetchRoleAccessibles,
    setRoleAccessible,
    isSettingRoleAccessible,
  } = useAccessible();

  const [modalRole, setModalRole] = useState(null);
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const [selectedAccessIds, setSelectedAccessIds] = useState([]);

  const { data: roleDetail, isLoading: isLoadingDetail } = getRoleAccessibleDetial(selectedRoleId);

  const openModal = (role) => {
    setModalRole(role);
    setSelectedRoleId(role.id);
    refetchRoleAccessibles();
  };

  const closeModal = () => {
    setModalRole(null);
    setSelectedRoleId(null);
    setSelectedAccessIds([]);
  };

  useEffect(() => {
    refetchRoles();
  }, []);

  useEffect(() => {
    if (roleDetail?.result?.items) {
      const ids = roleDetail.result.items.map((item) => item.accessibleFormId);
      setSelectedAccessIds(ids);
    }
  }, [roleDetail]);

  const handleCheckboxChange = (id) => {
    setSelectedAccessIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    debugger
    const payload = {
      roleId: selectedRoleId,
      accessibleFormIds: selectedAccessIds,
    };
    setRoleAccessible(payload, {
      onSuccess: (response) => {
        toast.success(response.message || "عملیات با موفقیت انجام شد", {
          position: "top-right",
        });
        closeModal();
        refetchRoleAccessibles();
      },
      onError: (error) => {
        console.error("Failed to save role accessible:", error);
      },
    });
  };

  return (
    <SimplePage className="!bg-slate-100">
      <PageHeader title="مدیریت دسترسی" icon={<UserOctagon variant="Bulk" />} />

      {isLoadingRoles && (
        <p className="text-center text-gray-500">در حال بارگذاری...</p>
      )}

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
        titleIcon={<UserOctagon variant="Bulk" />}
        size="medium"
        content={
          isLoadingDetail || isLoadingRoleAccessibles ? (
            <p className="text-center text-gray-500">در حال دریافت اطلاعات...</p>
          ) : isRoleAccessiblesSuccess ? (
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {allRoleAccessibles?.result?.items?.map((access) => (
                <div key={access.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedAccessIds.includes(access.id)}
                    onChange={() => handleCheckboxChange(access.id)}
                  />
                  <label className="text-sm text-gray-700">
                    {access.title} - <span className="text-gray-400">{access.route}</span>
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src={noData}
                alt="No data available"
                className="mx-auto w-32 h-32 object-contain"
              />
              <p className="text-gray-400">اطلاعاتی برای نمایش موجود نیست.</p>
            </div>
          )
        }
        actions={
          isRoleAccessiblesSuccess && (
            <div className="flex flex-col gap-2">
              <button
                onClick={handleSave}
                disabled={isSettingRoleAccessible}
                className={`px-4 py-2 rounded text-white ${isSettingRoleAccessible
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                {isSettingRoleAccessible ? "در حال ذخیره..." : "ذخیره تغییرات"}
              </button>
            </div>
          )
        }
      />
    </SimplePage>
  );
};

export default Access;