
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface WorkExperienceHeaderProps {
  onAddExperience: () => void;
}

const WorkExperienceHeader: React.FC<WorkExperienceHeaderProps> = ({ 
  onAddExperience
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold text-fubon-blue border-l-4 border-fubon-blue pl-2">
          工作經歷
        </h2>
      </div>
      <Button 
        type="button" 
        variant="outline" 
        onClick={onAddExperience} 
        className="flex items-center text-fubon-blue border-fubon-blue hover:bg-fubon-lightBlue"
      >
        <PlusCircle className="mr-1 h-4 w-4" />
        新增工作經歷
      </Button>
    </div>
  );
};

export default WorkExperienceHeader;
