import React from "react";

export const ExternalLink = ({ classNameName }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`group-hover:rotate-45 transition-all 5s ease-in-out`}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
};

export const HeroSvg = ({ classNameName }: any) => {
  return (
    <svg
      viewBox="0 0 1572 795"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
    >
      <mask
        id="mask0_340_660"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1572"
        height="795"
      >
        <rect width="1572" height="795" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_340_660)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M862.574 -54.9121V0.955067L808.953 0.955063L808.953 1.95506L862.574 1.95507V74.6094H808.953L808.953 75.6094H862.574V148.264H808.953L808.953 149.264H862.574V221.918H808.953L808.953 222.918H862.574V295.572H808.953L808.953 296.572H862.574V369.227H808.953L808.953 370.227H862.574V442.881H808.953L808.953 443.881H862.574V516.535H808.953L808.953 517.535H862.574V573.404H863.574V517.535H936.23V573.404H937.23V517.535H1009.88V573.404H1010.88V517.535H1083.53V573.404H1084.53V517.535L1157.19 517.535V573.404H1158.19V517.535H1230.85V573.404H1231.85V517.535H1304.5V573.404H1305.5V517.535H1378.15V573.404H1379.15V517.535H1437.27V516.535H1379.15V443.881H1437.27V442.881H1379.15V370.227H1437.27V369.227H1379.15V296.572H1437.27V295.572H1379.15V222.918H1437.27V221.918H1379.15V149.264H1437.27V148.264H1379.15V75.6094H1437.27V74.6094H1379.15V1.95509L1437.27 1.95509V0.95509L1379.15 0.955086V-54.9121H1378.15V0.955086H1305.5V-54.9121H1304.5V0.955086L1231.85 0.955082V-54.9121H1230.85V0.955082L1158.19 0.955078V-54.9121H1157.19V0.955078L1084.53 0.955074V-54.9121H1083.53V0.955074L1010.88 0.95507V-54.9121H1009.88V0.95507L937.23 0.955067V-54.9121H936.23V0.955067H863.574V-54.9121H862.574ZM1378.15 516.535V443.881H1305.5V516.535H1378.15ZM1304.5 516.535V443.881H1231.85V516.535H1304.5ZM1230.85 516.535V443.881H1158.19V516.535H1230.85ZM1157.19 516.535V443.881H1084.53V516.535L1157.19 516.535ZM1083.53 516.535V443.881H1010.88V516.535H1083.53ZM1009.88 516.535V443.881H937.23V516.535H1009.88ZM936.23 516.535V443.881H863.574V516.535H936.23ZM936.23 442.881H863.574V370.227H936.23V442.881ZM1009.88 442.881H937.23V370.227H1009.88V442.881ZM1083.53 442.881H1010.88V370.227H1083.53V442.881ZM1157.19 442.881H1084.53V370.227H1157.19V442.881ZM1230.85 442.881H1158.19V370.227H1230.85V442.881ZM1304.5 442.881H1231.85V370.227H1304.5V442.881ZM1378.15 442.881H1305.5V370.227H1378.15V442.881ZM1378.15 369.227V296.572H1305.5V369.227H1378.15ZM1304.5 369.227V296.572H1231.85V369.227H1304.5ZM1230.85 369.227V296.572H1158.19V369.227H1230.85ZM1157.19 369.227V296.572H1084.53V369.227H1157.19ZM1083.53 369.227V296.572H1010.88V369.227H1083.53ZM1009.88 369.227V296.572H937.23V369.227H1009.88ZM936.23 369.227V296.572H863.574V369.227H936.23ZM936.23 295.572H863.574V222.918H936.23V295.572ZM1009.88 295.572H937.23V222.918H1009.88V295.572ZM1083.53 295.572H1010.88V222.918H1083.53V295.572ZM1157.19 295.572H1084.53V222.918H1157.19V295.572ZM1230.85 295.572H1158.19V222.918H1230.85V295.572ZM1304.5 295.572H1231.85V222.918H1304.5V295.572ZM1378.15 295.572H1305.5V222.918H1378.15V295.572ZM1378.15 221.918V149.264H1305.5V221.918H1378.15ZM1304.5 221.918V149.264L1231.85 149.264V221.918H1304.5ZM1230.85 221.918V149.264H1158.19V221.918H1230.85ZM1157.19 221.918V149.264H1084.53V221.918H1157.19ZM1083.53 221.918V149.264H1010.88V221.918H1083.53ZM1009.88 221.918V149.264L937.23 149.264V221.918H1009.88ZM936.23 221.918V149.264H863.574V221.918H936.23ZM936.23 148.264H863.574V75.6094H936.23V148.264ZM1009.88 148.264L937.23 148.264V75.6094L1009.88 75.6094V148.264ZM1083.53 148.264H1010.88V75.6094H1083.53V148.264ZM1157.19 148.264H1084.53V75.6094H1157.19V148.264ZM1230.85 148.264H1158.19V75.6094H1230.85V148.264ZM1304.5 148.264L1231.85 148.264V75.6094L1304.5 75.6094V148.264ZM1378.15 148.264H1305.5V75.6094H1378.15V148.264ZM1378.15 74.6094V1.95509H1305.5V74.6094H1378.15ZM1304.5 74.6094V1.95509L1231.85 1.95508V74.6094L1304.5 74.6094ZM1230.85 74.6094V1.95508L1158.19 1.95508V74.6094H1230.85ZM1157.19 74.6094V1.95508L1084.53 1.95507V74.6094H1157.19ZM1083.53 74.6094V1.95507L1010.88 1.95507V74.6094H1083.53ZM1009.88 74.6094V1.95507L937.23 1.95507V74.6094L1009.88 74.6094ZM936.23 74.6094V1.95507H863.574V74.6094H936.23Z"
          fill="url(#paint0_radial_340_660)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M492.574 251.088V306.955L438.953 306.955L438.953 307.955L492.574 307.955V380.609H438.953L438.953 381.609H492.574V454.264H438.953L438.953 455.264H492.574V527.918H438.953L438.953 528.918H492.574V601.572H438.953L438.953 602.572H492.574V675.227H438.953L438.953 676.227H492.574V748.881H438.953L438.953 749.881H492.574V822.535H438.953L438.953 823.535H492.574V879.404H493.574V823.535H566.23V879.404H567.23V823.535H639.878V879.404H640.878V823.535H713.535V879.404H714.535V823.535L787.191 823.535V879.404H788.191V823.535H860.847V879.404H861.847V823.535H934.496V879.404H935.496V823.535H1008.15V879.404H1009.15V823.535H1067.27V822.535H1009.15V749.881H1067.27V748.881H1009.15V676.227H1067.27V675.227H1009.15V602.572H1067.27V601.572H1009.15V528.918H1067.27V527.918H1009.15V455.264H1067.27V454.264H1009.15V381.609H1067.27V380.609H1009.15V307.955L1067.27 307.955V306.955L1009.15 306.955V251.088H1008.15V306.955H935.496V251.088H934.496V306.955L861.847 306.955V251.088H860.847V306.955L788.191 306.955V251.088H787.191V306.955L714.535 306.955V251.088H713.535V306.955L640.878 306.955V251.088H639.878V306.955L567.23 306.955V251.088H566.23V306.955H493.574V251.088H492.574ZM1008.15 822.535V749.881H935.496V822.535H1008.15ZM934.496 822.535V749.881H861.847V822.535H934.496ZM860.847 822.535V749.881H788.191V822.535H860.847ZM787.191 822.535V749.881H714.535V822.535L787.191 822.535ZM713.535 822.535V749.881H640.878V822.535H713.535ZM639.878 822.535V749.881H567.23V822.535H639.878ZM566.23 822.535V749.881H493.574V822.535H566.23ZM566.23 748.881H493.574V676.227H566.23V748.881ZM639.878 748.881H567.23V676.227H639.878V748.881ZM713.535 748.881H640.878V676.227H713.535V748.881ZM787.191 748.881H714.535V676.227H787.191V748.881ZM860.847 748.881H788.191V676.227H860.847V748.881ZM934.496 748.881H861.847V676.227H934.496V748.881ZM1008.15 748.881H935.496V676.227H1008.15V748.881ZM1008.15 675.227V602.572H935.496V675.227H1008.15ZM934.496 675.227V602.572H861.847V675.227H934.496ZM860.847 675.227V602.572H788.191V675.227H860.847ZM787.191 675.227V602.572H714.535V675.227H787.191ZM713.535 675.227V602.572H640.878V675.227H713.535ZM639.878 675.227V602.572H567.23V675.227H639.878ZM566.23 675.227V602.572H493.574V675.227H566.23ZM566.23 601.572H493.574V528.918H566.23V601.572ZM639.878 601.572H567.23V528.918H639.878V601.572ZM713.535 601.572H640.878V528.918H713.535V601.572ZM787.191 601.572H714.535V528.918H787.191V601.572ZM860.847 601.572H788.191V528.918H860.847V601.572ZM934.496 601.572H861.847V528.918H934.496V601.572ZM1008.15 601.572H935.496V528.918H1008.15V601.572ZM1008.15 527.918V455.264H935.496V527.918H1008.15ZM934.496 527.918V455.264L861.847 455.264V527.918H934.496ZM860.847 527.918V455.264H788.191V527.918H860.847ZM787.191 527.918V455.264H714.535V527.918H787.191ZM713.535 527.918V455.264H640.878V527.918H713.535ZM639.878 527.918V455.264L567.23 455.264V527.918H639.878ZM566.23 527.918V455.264H493.574V527.918H566.23ZM566.23 454.264H493.574V381.609H566.23V454.264ZM639.878 454.264L567.23 454.264V381.609L639.878 381.609V454.264ZM713.535 454.264H640.878V381.609H713.535V454.264ZM787.191 454.264H714.535V381.609H787.191V454.264ZM860.847 454.264H788.191V381.609H860.847V454.264ZM934.496 454.264L861.847 454.264V381.609L934.496 381.609V454.264ZM1008.15 454.264H935.496V381.609H1008.15V454.264ZM1008.15 380.609V307.955H935.496V380.609H1008.15ZM934.496 380.609V307.955L861.847 307.955V380.609L934.496 380.609ZM860.847 380.609V307.955L788.191 307.955V380.609H860.847ZM787.191 380.609V307.955L714.535 307.955V380.609H787.191ZM713.535 380.609V307.955L640.878 307.955V380.609H713.535ZM639.878 380.609V307.955L567.23 307.955V380.609L639.878 380.609ZM566.23 380.609V307.955H493.574V380.609H566.23Z"
          fill="url(#paint1_radial_340_660)"
        />
        <g opacity="0.4" filter="url(#filter0_f_340_660)">
          <ellipse
            cx="1097.67"
            cy="90.2204"
            rx="278.006"
            ry="262.262"
            transform="rotate(-157.304 1097.67 90.2204)"
            fill="url(#paint2_linear_340_660)"
            fillOpacity="0.23"
          />
        </g>
        <g opacity="0.4" filter="url(#filter1_f_340_660)">
          <ellipse
            cx="645.778"
            cy="-170.165"
            rx="362.917"
            ry="211.851"
            transform="rotate(46.3553 645.778 -170.165)"
            fill="#8244FF"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_340_660"
          x="627.875"
          y="-368.511"
          width="939.586"
          height="917.463"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="97"
            result="effect1_foregroundBlur_340_660"
          />
        </filter>
        <filter
          id="filter1_f_340_660"
          x="48.0703"
          y="-774.799"
          width="1195.42"
          height="1209.27"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="152"
            result="effect1_foregroundBlur_340_660"
          />
        </filter>
        <radialGradient
          id="paint0_radial_340_660"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1123.11 259.246) rotate(90) scale(238.243)"
        >
          <stop stopColor="#8244FF" stopOpacity="0.29" />
          <stop offset="1" stopColor="#8244FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_340_660"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(753.111 565.246) rotate(90) scale(238.243)"
        >
          <stop stopColor="#8244FF" stopOpacity="0.29" />
          <stop offset="1" stopColor="#8244FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_340_660"
          x1="1356.37"
          y1="-139.487"
          x2="1240.56"
          y2="384.088"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F926AE" />
          <stop offset="0.21875" stopColor="#F926AE" />
          <stop offset="1" stopColor="#F926AE" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export function AlignCenterHorizontalIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20" />
      <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
      <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
      <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
      <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function BoltIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function PlayIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

export function RocketIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export function ShieldCheckIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

{
  /*

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Unlock the Power of Personalized Experiences
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Leverage our cutting-edge technology to deliver tailored content and experiences that captivate your
              audience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button size="lg">Get Started</Button>
            <Link
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
              href="#"
            >
              <PlayIcon className="w-6 h-6" />
              Watch Demo
            </Link>
          </div>
        </div>

    </section>
  )
}

function AlignCenterHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20" />
      <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
      <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
      <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
      <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
    </svg>
  )
}


function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShieldCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


*/
}
