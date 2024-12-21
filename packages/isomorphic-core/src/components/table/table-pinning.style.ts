export const pinningStyles = {
  baseStyle: `before:[&_.sticky-left]:pointer-events-none before:[&_.sticky-left]:absolute before:[&_.sticky-left]:bottom-0 before:[&_.sticky-left]:end-0 before:[&_.sticky-left]:top-0 before:[&_.sticky-left]:hidden before:[&_.sticky-left]:w-5 before:[&_.sticky-left]:shadow-[inset_10px_0_8px_-8px_rgba(0,0,0,0.2)] first:before:[&_.sticky-left]:block dark:before:[&_.sticky-left]:shadow-[inset_10px_0_8px_-8px_rgba(130,136,155,0.1)] before:[&_.sticky-left]:transition-shadow before:[&_.sticky-left]:duration-300 before:[&_.sticky-left]:translate-x-full after:[&_.sticky-right]:pointer-events-none after:[&_.sticky-right]:absolute after:[&_.sticky-right]:-bottom-[1px] after:[&_.sticky-right]:start-0 after:[&_.sticky-right]:top-0 after:[&_.sticky-right]:hidden after:[&_.sticky-right]:w-5 after:[&_.sticky-right]:shadow-[inset_-10px_0_8px_-8px_rgba(0,0,0,0.2)] last:after:[&_.sticky-right]:block dark:after:[&_.sticky-right]:shadow-[inset_-10px_0_8px_-8px_rgba(130,136,155,0.1)] after:[&_.sticky-right]:transition-shadow after:[&_.sticky-right]:duration-300 after:[&_.sticky-right]:-translate-x-full before:[&_.sticky-right]:content-[""] after:[&_.sticky-right]:content-[""]`,
  variants: {
    classic: `[&_th.sticky-left]:bg-gray-100 [&_td.sticky-left]:bg-white dark:[&_td.sticky-left]:bg-gray-50 [&_th.sticky-right]:bg-gray-100 [&_td.sticky-right]:bg-white dark:[&_td.sticky-right]:bg-gray-50`,
    modern: `[&_th.sticky-left]:bg-gray-100 [&_td.sticky-left]:bg-white dark:[&_td.sticky-left]:bg-gray-50 [&_th.sticky-right]:bg-gray-100 [&_td.sticky-right]:bg-white dark:[&_td.sticky-right]:bg-gray-50`,
    minimal: `[&_th.sticky-left]:bg-gray-100 [&_td.sticky-left]:bg-white dark:[&_td.sticky-left]:bg-gray-50 [&_th.sticky-right]:bg-gray-100 [&_td.sticky-right]:bg-white dark:[&_td.sticky-right]:bg-gray-50`,
    elegant: `[&_th.sticky-left]:bg-white [&_td.sticky-left]:bg-white [&_th.sticky-right]:bg-white [&_td.sticky-right]:bg-white`,
    retro: `[&_th.sticky-left]:bg-white [&_td.sticky-left]:bg-white [&_th.sticky-right]:bg-white [&_td.sticky-right]:bg-white`,
  },
};