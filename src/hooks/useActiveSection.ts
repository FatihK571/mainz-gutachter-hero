import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Track intersection state for all sections
    const sectionStates = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        // Update the state map for each entry
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          
          // Skip main-content as it's not in navigation
          if (sectionId === 'main-content') return;
          
          if (entry.isIntersecting) {
            sectionStates.set(sectionId, entry);
          } else {
            sectionStates.delete(sectionId);
          }
        });

        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let mostVisibleSection = '';

        sectionStates.forEach((entry, sectionId) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = sectionId;
          }
        });

        // Only update if we found a visible section
        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      { 
        // Trigger when section enters the middle 40% of viewport
        rootMargin: '-10% 0px -50% 0px',
        // Multiple thresholds for better granularity
        threshold: [0, 0.25, 0.5, 0.75, 1.0]
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      sectionStates.clear();
    };
  }, []);

  return activeSection;
};
