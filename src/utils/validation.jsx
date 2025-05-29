import * as Yup from "yup";

const phoneRegExp = /^(\d{2,4}-?)?\d{7,8}$/;
const postalCodeExp = /^[0-9]{10}$/;
export const validationSchema = Yup.object().shape({
  name: Yup.string().required("عنوان را وارد نمایید"),
  typeId: Yup.string().required("نوع اقامتگاه را انتخاب نمایید"),
  phone: Yup.string()
    .matches(phoneRegExp, " شماره تلفن صحیح نیست")
    .required("شماره تلفن را وارد نمایید"),
  postalCode: Yup.string()
    .matches(postalCodeExp, "  کدپستی صحیح نیست")
    .required("کدپستی را وارد نمایید"),
  address: Yup.string().required("آدرس اقامتگاه را وارد نمایید"),
  description: Yup.string().required("جزئیات اقامتگاه را وارد نمایید"),
  province: Yup.string().required("استان را انتخاب نمایید"),
  cityId: Yup.string().required("شهر را انتخاب نمایید"),
  icon: Yup.string().required("آیکون را انتخاب نمایید"),
  nationalCode: Yup.string().required(" کد ملی را وارد نمایید"),
  firstname: Yup.string().required("  نام را وارد نمایید"),
  lastname: Yup.string().required("  نام خانوادگی را وارد نمایید"),
  birthday: Yup.string().required("  تاریخ تولد را وارد نمایید"),
  gender: Yup.string().required("   جنسیت را وارد نمایید"),
  relation: Yup.string().required("   نسبت را وارد نمایید"),
  side: Yup.string().required("   مخاطب را وارد نمایید"),
  score: Yup.string().required("   نمره نظرسنجی را وارد نمایید"),
  status: Yup.string().required("    وضعیت را وارد نمایید"),
  title: Yup.string().required("    عنوان را وارد نمایید"),
  content: Yup.string().required("    محتوا را وارد نمایید"),
  publishDateTime: Yup.string().required("    تاریخ انتشار را وارد نمایید"),
  endPublishDateTime: Yup.string().required("    تاریخ پایان را وارد نمایید"),
  writer: Yup.string().required("     نویسنده را وارد نمایید"),
  priority: Yup.string().required("     اولویت را وارد نمایید"),
  capacity: Yup.string().required("     ظرفیت واحد را وارد نمایید"),
});
