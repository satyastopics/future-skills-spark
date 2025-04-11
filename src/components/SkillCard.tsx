
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  badge?: string;
}

const SkillCard = ({ title, description, icon, className, onClick, badge }: SkillCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-sm p-6 card-hover cursor-pointer border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-fss-primary/20",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className="mr-4 text-fss-primary p-2 bg-fss-light rounded-full">{icon}</div>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            {badge && (
              <span className="text-xs px-2 py-1 bg-fss-light text-fss-primary rounded-full">
                {badge}
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
