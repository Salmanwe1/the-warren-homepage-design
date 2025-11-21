import { SquareCheckBig } from "lucide-react";

type HeroBlueTrayProps = {
  items: string[];
};

function HeroBlueTray({ items }: HeroBlueTrayProps) {
  return (
    <div className="w-full bg-[#0e1a35] py-6 px-4 flex items-center justify-center gap-16 text-white text-sm">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <SquareCheckBig size={18} className="text-[#d1b361]" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default HeroBlueTray;
