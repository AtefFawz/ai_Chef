import { DataItem } from "./BenefitsData";
export default function BenefitCard({ item }: { item: DataItem }) {
  return (
    <div
      style={{ backgroundColor: item.background, color: item.textColor }}
      className="p-4 lg:p-10 rounded-full  flex flex-col justify-center  xl:h-[400px] min-h-[360px]  w-full"
    >
      <h1 className="text-xl lg:text-2xl font-bold "> {item.title} </h1>
      <p className="text-sm xl:text-lg mt-3 font-medium">{item.description}</p>
    </div>
  );
}
