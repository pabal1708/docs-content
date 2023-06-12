import React, { ReactNode } from 'react';
import cn from 'classnames';


interface TooltipProps {
  /** Clase principal */
  className?: string;
  /** Wording dentro del Message */
  children: ReactNode;
}


const Tooltip = ({ className, children }: TooltipProps) => {
  const tooltipClasses = cn(
    'bg-white rounded-lg shadow-lg px-12px flex items-start w-full pt-12px pb-16px text-monochrome-700 font-normal'
  );

  return (
    <div className={cn(className, tooltipClasses)}>
      <div className='flex flex-col'>
        <div className="flex items-start text-xs">{children}</div>
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  className: '',
};

export type { TooltipProps as MessageProps };
export default Tooltip;
