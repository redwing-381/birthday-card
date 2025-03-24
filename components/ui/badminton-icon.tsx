import type { SVGProps } from "react"

export function BadmintonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.5 1.5c-.5 1-1.5 2-2.5 3 2 1.5 3 3.5 3 6v1c0 1-1 2-1 2l5 5c.5.5 1 1 2 1s1.5-.5 2-1 .5-1 0-1.5-4.5-4.5-4.5-4.5 0-.5.5-1.5.5-2 .5-3-1-1.5-5-7z" />
      <path d="M11 3c-1.5.5-3 1-3.5 2.5-.5 1.5.5 3 1 4.5l-2 2c-1 1-1.5 2-1.5 3s.5 2 1.5 3 2 1.5 3 1.5 2-.5 3-1.5l2-2c1.5.5 3 1.5 4.5 1 1.5-.5 2-2 2.5-3.5-1.5-1-3-2.5-4.5-3.5l-6-7z" />
    </svg>
  )
}

