import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FILTER_CHIPS } from '../data/viuData';

interface CategoryChipsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryChips: React.FC<CategoryChipsProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="sticky top-14 z-30 bg-[#0f0f0f]/95 backdrop-blur-md py-2.5 px-4 md:px-6 flex items-center border-b border-[#222222]/50">
      {/* Scroll Left Button */}
      {canScrollLeft && (
        <button
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#1e1e1e] hover:bg-[#2e2e2e] text-white shadow-lg mr-2 shrink-0 transition-colors cursor-pointer border border-[#333333]"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}

      {/* Chips Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex items-center gap-2.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5"
      >
        {FILTER_CHIPS.map(chip => {
          const isSelected = selectedCategory === chip;
          return (
            <button
              key={chip}
              onClick={() => onSelectCategory(chip)}
              className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                isSelected
                  ? 'bg-[#FFE600] text-black font-bold shadow-md shadow-[#FFE600]/20'
                  : 'bg-[#272727] text-[#f1f1f1] hover:bg-[#383838]'
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>

      {/* Scroll Right Button */}
      {canScrollRight && (
        <button
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#1e1e1e] hover:bg-[#2e2e2e] text-white shadow-lg ml-2 shrink-0 transition-colors cursor-pointer border border-[#333333]"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
