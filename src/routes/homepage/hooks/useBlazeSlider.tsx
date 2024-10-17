  import { useEffect, useRef } from "react";
  import BlazeSlider, { BlazeConfig } from "blaze-slider";
  export function useBlazeSlider(config?: BlazeConfig) {
    const sliderRef = useRef<BlazeSlider | null>(null);
    const sliderElRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
      if (
        typeof window !== "undefined" &&
        !sliderRef.current &&
        !!sliderElRef.current
      ) {
        const blazeSlider = new BlazeSlider(sliderElRef.current,config);
        sliderRef.current = blazeSlider;
      }
    }, []);
    return { sliderElRef, sliderRef };
  }



/* import { useEffect, useRef } from "react";
import BlazeSlider, { BlazeConfig } from "blaze-slider";
import 'blaze-slider/dist/blaze.css';

export function useBlazeSlider(config?: BlazeConfig) {
    const sliderRef = useRef<BlazeSlider | null>(null);
    const sliderElRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleVisibilityChange() {
            if (document.visibilityState === 'visible' && sliderElRef.current && !sliderRef.current) {
                sliderRef.current = new BlazeSlider(sliderElRef.current, config);
            }
        }

        document.addEventListener("visibilitychange", handleVisibilityChange);

        if (typeof window !== "undefined" && !sliderRef.current && !!sliderElRef.current) {
            sliderRef.current = new BlazeSlider(sliderElRef.current, config);
        }

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [config]);

    return { sliderElRef, sliderRef };
} */
