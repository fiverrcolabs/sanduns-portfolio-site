import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { Counter } from "counterapi";

interface ViewCounterProps {
  className?: string;
}

/**
 * ViewCounter Component
 * 
 * Displays visitor count for the portfolio site.
 * Uses CounterAPI library for reliable counting.
 */
export const ViewCounter = ({ className = "" }: ViewCounterProps) => {
  const [viewCount, setViewCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // CounterAPI workspace configuration from environment variable
    const COUNTER_WORKSPACE = import.meta.env.VITE_COUNTER_WORKSPACE;
    
    // Check if environment variable is set
    if (!COUNTER_WORKSPACE) {
      console.error("Counter API configuration missing. Please set VITE_COUNTER_WORKSPACE in .env file");
      setIsLoading(false);
      setViewCount(null);
      return;
    }
    
    const trackEvent = async () => {
      try {
        // Initialize the counter with workspace
        const counter = new Counter({
          workspace: COUNTER_WORKSPACE
        });
        
        // Track the page visit event and increment counter
        const result = await counter.up('first-counter-2520');
        
        // Set the count from the result (up_count field contains the total count)
        // Result structure: { code, data: { up_count, ... }, message }
        setViewCount((result as any).data.up_count);
      } catch (error) {
        console.error("Failed to track view count:", error instanceof Error ? error.message : error);
        setViewCount(null);
      } finally {
        setIsLoading(false);
      }
    };

    trackEvent();
  }, []);

  if (isLoading) {
    return (
      <div className={`flex items-center gap-1.5 text-muted-foreground ${className}`}>
        <Eye className="w-4 h-4" />
        <span className="text-xs">Loading...</span>
      </div>
    );
  }

  if (viewCount === null) {
    // Don't show anything if API failed
    return null;
  }

  return (
    <div className={`flex items-center gap-1.5 text-muted-foreground ${className}`}>
      <Eye className="w-4 h-4" />
      <span className="text-xs">
        {viewCount.toLocaleString()} {viewCount === 1 ? "visit" : "visits"}
      </span>
    </div>
  );
};
