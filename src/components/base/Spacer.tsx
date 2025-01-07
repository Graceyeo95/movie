import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const spacerVariants = cva([''], {
  variants: {
    mobileSize: {
      0: ['h-[0rem]'],
      1: ['h-[8.75rem]'],
      2: ['h-[6.25rem]'],
      3: ['h-[3.75rem]'],
      4: ['h-[1.5rem]'],
      5: ['h-[1rem]'],
    },
    tabletSize: {
      0: ['md:h-[0rem]'],
      1: ['md:h-[11.25rem]'],
      2: ['md:h-[8.25rem]'],
      3: ['md:h-[4.75rem]'],
      4: ['md:h-[1.75rem]'],
      5: ['md:h-[1.063rem]'],
    },
    desktopSize: {
      0: ['lg:h-[0rem]'],
      1: ['lg:h-[18.75rem]'],
      2: ['lg:h-[12.5rem]'],
      3: ['lg:h-[6.25rem]'],
      4: ['lg:h-[2.5rem]'],
      5: ['lg:h-[1.25rem]'],
    },
  },

  defaultVariants: {
    mobileSize: 3,
    tabletSize: 3,
    desktopSize: 3,
  },
});

type Props = VariantProps<typeof spacerVariants>;

export function Spacer(props: Props) {
  return (
    <div
      className={twMerge(
        spacerVariants(props as VariantProps<typeof spacerVariants>)
      )}
    ></div>
  );
}
