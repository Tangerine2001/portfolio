"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type RotatingTextProps = {
  phrases: string[];
  typingSpeed?: number; // ms per character when typing
  deletingSpeed?: number; // ms per character when deleting
  pauseMs?: number; // pause after a phrase is fully typed
  loop?: boolean;
  className?: string;
  ariaLabel?: string;
  cursorClassName?: string;
};

/**
 * RotatingText — type/delete a list of phrases in place.
 * - Respects prefers-reduced-motion (renders the first phrase statically)
 * - Cleans up timers on unmount
 * - Accessible: wraps output in an aria-live container
 */
export function RotatingText({
  phrases,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseMs = 1300,
  loop = true,
  className,
  ariaLabel,
  cursorClassName,
}: RotatingTextProps) {
  const [text, setText] = React.useState("");
  const [idx, setIdx] = React.useState(0); // phrase index
  const [deleting, setDeleting] = React.useState(false);
  const mountedRef = React.useRef(false);

  const reducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  React.useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    // Reduced motion: render first phrase and stop.
    if (reducedMotion) {
      setText(phrases[0]);
      return;
    }

    const current = phrases[idx % phrases.length];

    if (!deleting) {
      // Typing
      if (text.length < current.length) {
        const timeout = setTimeout(() => {
          if (!mountedRef.current) return;
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Pause when fully typed
        const timeout = setTimeout(() => {
          if (!mountedRef.current) return;
          setDeleting(true);
        }, pauseMs);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          if (!mountedRef.current) return;
          setText(current.slice(0, text.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Move to next phrase
        const nextIdx = (idx + 1) % phrases.length;
        if (!loop && nextIdx === 0) {
          // If not looping, stop at last phrase rendered fully; set to first phrase as static
          setDeleting(false);
          setText(phrases[phrases.length - 1]);
          return;
        }
        setDeleting(false);
        setIdx(nextIdx);
      }
    }
  }, [text, deleting, idx, phrases, typingSpeed, deletingSpeed, pauseMs, loop, reducedMotion]);

  return (
    <span
      className={cn("inline-flex items-baseline", className)}
      aria-label={ariaLabel}
      aria-live="polite"
      aria-atomic="true"
    >
      <span>{text}</span>
      {!reducedMotion && (
        <span
          className={cn(
            "ml-px inline-block h-[1em] w-0.5 translate-y-[0.1em] animate-pulse bg-current align-baseline",
            cursorClassName
          )}
          aria-hidden="true"
        />
      )}
    </span>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}
