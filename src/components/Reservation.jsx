import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Reversation.css'
const Reservation = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <form className=" flex flex-col items-center">
    <div className=" border-black p-4 space-y-12 w-[80%] text-right   ">
    <h2 className="text-2xl text-center font-semibold leading-7 text-gray-900">استمارة حجز مقسم</h2>
    <Slider {...settings}>
    { /*first section */}
      <div className=" rounded-xl    bg-gray-800 text-white p-4 pb-12  ">
        <h2 className="text-base font-semibold leading-7 "> مقدم الطلب</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
            اسم الأب 
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6">
              الاسم الثنائي للمستثمر
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>
           

          <div className="sm:col-span-3 ">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
           تاريخ الولادة 
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="first-name"
                id="first-name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6">
            اسم الأم
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

            
          
            

         <div className="sm:col-span-3 ">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6">
            الموطن المختار
                      </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6">
              الرقم الوطني
              </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 ">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6">
             رقم الجوال 
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6 ">
              رقم الهاتف 
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 ">
             البريد الالكتروني
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className=" w-full md:w-[49%] rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         </div>
      </div>

     { /*second section */}
 
     <div className=" rounded-xl   bg-gray-800 text-white p-4 pb-12">
        <h2 className="text-base font-semibold leading-7 ">معلومات المنشأة</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
            كيان المنشأة القانوني (فردية أو يوجد شركاء) 
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6 ">
              الاسم المقترح للمنشأة 
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>
           

          <div className="sm:col-span-3 ">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
             بعد التحية نتقدم إليكم بطلب الترخيص بإقامة منشأة صناعية لصناعة
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete=""
                className="block  w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6 ">
             مكان إقامة المنشأة
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete=""
                value="محافظة حمص_المدينة الصناعية في حسياء"
                className="block w-full rounded-md border-0 p-1 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right text-[12px] md:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-full">
            <label htmlFor="name" className="block text-sm font-medium leading-6">
            رقم التصنيف 
              </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete=""
                className=" w-full md:w-[49%] rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         </div>
      </div>  
   
      {/*third section */}
      <div className="rounded-xl   bg-gray-800 text-white p-4 pb-12">
        <h2 className="text-base font-semibold leading-7 "> معلومات عامة عن المشروع</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-3 ">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6">
            عدد العاملين الكلي
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6 ">
            رأس المال الكلي
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>
           

          <div className="sm:col-span-3 ">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
            عدد أيام العمل السنوية 
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6 ">
            عدد ساعات العمل اليومية
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

            
          
            

         <div className="sm:col-span-3 ">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
            قيمة الآلات والمعدات التقديرية
                      </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6 ">
            مدة التنفيذ
              </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 ">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
            تاريخ 
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="first-name"
                id="first-name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6 ">
            الحاجة السنوية من المياه(متر مكعب) 
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-right sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full ">
              <label htmlFor="country" className="block text-sm font-medium leading-6 ">
                الدفع
              </label>
              <div className="mt-2 ">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className=" w-full  rounded-md border-0 py-1.5 bg-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>نقدي</option>
                  <option>تقسيط</option>
                </select>
              </div>
            </div>
         </div>
      </div>
      {/*fourth section */}
      <div className="rounded-xl   bg-gray-800 text-white p-1 pb-8">
        <h2 className="text-base font-semibold leading-7 ">مستندات وتعهدات</h2>
        <div className="mt-2 space-y-2">
            <fieldset>
              
              <div className="mt-6 space-y-6">
                <div className="relative flex flex-row-reverse gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="">أتعهّد بالالتزام بتعليمات وزارة الصناعة وأحكام القانون رقم 12 لعام 2012 وتعليماته التنفيذية الخاصة بالبيئة والأنظمة والقوانين المعمول بها في المدينة الصناعية وخاصة نظام الاستثمار رقم /1536/ق لعام 2012 وبكامل مواده وفقراته وأتعهّد بأن تكون مواصفات المنتج مطابقة للمعايير والمواصفات القياسية السورية.</p>
                  </div>
                </div>
                <div className="relative flex flex-row-reverse gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="">أصرّح بأنني غير موظف لدى الجهات العامة في الدولة</p>
                  </div>
                </div>
                <div className="relative flex flex-row-reverse gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="">أصرّح بأن جميع المعلومات المقدمة من قبلي والمتعلّقة بهذا المشروع هي صحيحة ومطابقة للواقع</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="text-right">يرجى تحميل صورة عن هوية كل من المستثمرين والشركاء مكتوب عليها رقم الموبايل مع عنوان السكن (يجب تحميل صورة واحدة على الأقل)</div>
               {/* Remaining Five Lines */}
               {[1, 2, 3, 4, 5].map((lineNumber) => 
                               <div key={lineNumber} className="flex justify-end space-x-2">
                               <input type="file" className="border rounded-md bg-gray-400 p-2" />
                               </div>
                   )}
            </div>

            <div className="mt-6  flex items-center   gap-x-6">
      <button type="button" className="rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md bg-gray-500  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>

    </div>
        
      </div>  
      </Slider>
    </div>
    

    
    
  </form>
  )
}

export default Reservation