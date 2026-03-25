"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: Set<string | number>;
  toggle: (value: string | number) => void;
}

const AccordionContext = React.createContext<AccordionContextValue>({
  openItems: new Set(),
  toggle: () => {},
});

function Accordion({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [openItems, setOpenItems] = React.useState<Set<string | number>>(
    new Set()
  );

  const toggle = React.useCallback((value: string | number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return next;
    });
  }, []);

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div
        data-slot="accordion"
        className={cn("flex w-full flex-col", className)}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
}

function AccordionItem({
  className,
  value,
  children,
  ...props
}: AccordionItemProps) {
  const { openItems } = React.useContext(AccordionContext);
  const isOpen = openItems.has(value);

  return (
    <div
      data-slot="accordion-item"
      data-state={isOpen ? "open" : "closed"}
      className={cn("border-b last:border-b-0", className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<{
              _accordionValue?: string | number;
              _isOpen?: boolean;
            }>,
            {
              _accordionValue: value,
              _isOpen: isOpen,
            }
          );
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  _accordionValue?: string | number;
  _isOpen?: boolean;
}

function AccordionTrigger({
  className,
  children,
  _accordionValue,
  _isOpen,
  ...props
}: AccordionTriggerProps) {
  const { toggle } = React.useContext(AccordionContext);

  return (
    <h3 className="flex">
      <button
        type="button"
        data-slot="accordion-trigger"
        aria-expanded={_isOpen}
        onClick={() =>
          _accordionValue !== undefined && toggle(_accordionValue)
        }
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            "h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200",
            _isOpen && "rotate-180"
          )}
        />
      </button>
    </h3>
  );
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  _accordionValue?: string | number;
  _isOpen?: boolean;
}

function AccordionContent({
  className,
  children,
  _accordionValue: _unused,
  _isOpen,
  ...props
}: AccordionContentProps) {
  void _unused;
  if (!_isOpen) return null;

  return (
    <div
      data-slot="accordion-content"
      className={cn("overflow-hidden pb-4 pt-0 text-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
