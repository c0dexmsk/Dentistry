
import { useEffect, useRef } from "react";

export const FadeInTextLeft = ({ children, threshold = 0.1 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        },
        { threshold }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [threshold]);

    return (
      <div ref={elementRef} className="fade-in-text-left">
        {children}
      </div>
    );
  };

 export const FadeInTextRight = ({ children, threshold = 0.1 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        },
        { threshold }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [threshold]);

    return (
      <div ref={elementRef} className="fade-in-text-right">
        {children}
      </div>
    );
  };

