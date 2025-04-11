
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SkillCard = ({ title, description, icon, className, onClick }: SkillCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-sm p-6 card-hover cursor-pointer border border-gray-100",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className="mr-4 text-fss-primary">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
