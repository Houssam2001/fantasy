import Logos from "./logos";

export default function BannerTop() {
  return (
    <>
      <div className=" inset-x-0 top-0 mb-5  w-full  hidden sm:hidden md:hidden lg:block">
        <div className="bg-white ">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
              <div className="flex flex-1 items-center lg:mr-3 lg:flex-none">
                <div className="ml-3 text-center font-medium text-black">
                 <Logos/>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
