import { DotSpinner } from "@uiball/loaders";

const ActiorLoader = () => {
  return (
    <div className="flex items-center justify-center translate-x-50% translate-y-[50%]">
      {" "}
      <DotSpinner className="text-white" color="white" />
    </div>
  );
};

export default ActiorLoader;
