import React from "react";
import { Keys } from "./Keys";
import { SuperSPKeys } from "./SuperSPKeys";

export const KeyBoardBody = () => {
  return (
    <div className="text-white w-full  my- flex justify-center items-center">
      <div className="rounded-xl bg-body overflow-hidden">
        <div className="p-2 flex flex-col gap-1">
          <Row1 />
          <Row2 />
          <Row3 />
          <Row4 />
          <Row5 />
          <Row6 />
        </div>
      </div>
    </div>
  );
};

const Row1 = () => {
  return (
    <div className="flex gap-1.5">
      <Keys KeyTitle="esc" spLKeys="true" />
      <FnKeys />
      <TouchId />
    </div>
  );
};
const Row2 = () => {
  return (
    <div className="flex gap-1.5">
      <Keys KeyTitle="`" keyIcon="~" />
      <NumKeys />
      <Keys KeyTitle="-" keyIcon="_" />
      <Keys KeyTitle="=" keyIcon="+" />
      <Keys KeyTitle="delete" spRKeys="true" />
    </div>
  );
};
const Row3 = () => {
  return (
    <div className="flex gap-1.5">
      <Keys KeyTitle="tab" spLKeys="true" />
      <QToP />
      <Keys KeyTitle="[" keyIcon="{" />
      <Keys KeyTitle="]" keyIcon="}" />
      <Keys KeyTitle="\" keyIcon="|" />
    </div>
  );
};

const Row4 = () => {
  return (
    <div className="flex gap-1.5">
      <Keys KeyTitle="caps lock" spLKeys="true" />
      <AToL />
      <Keys KeyTitle=";" keyIcon=":" />
      <Keys KeyTitle="'" keyIcon='"' />
      <Keys KeyTitle="return" spRKeys="true" />
    </div>
  );
};

const Row5 = () => {
  return (
    <div className="flex gap-1.5">
      <Keys KeyTitle="shift" spLKeys="true" />
      <ZToM />
      <Keys KeyTitle="," keyIcon="<" />
      <Keys KeyTitle="." keyIcon=">" />
      <Keys KeyTitle="/" keyIcon="?" />
      <Keys KeyTitle="shift" spRKeys="true" />
    </div>
  );
};
const Row6 = () => {
  return (
    <div className="flex gap-1.5">
      <SuperSPKeys
        top="fn"
        down={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-globe-icon lucide-globe"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        }
      />
      <SuperSPKeys
        top={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-up-icon lucide-chevron-up"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        }
        down="control"
      />
      <SuperSPKeys
        top={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-option-icon lucide-option"
          >
            <path d="M3 3h6l6 18h6" />
            <path d="M14 3h7" />
          </svg>
        }
        down="option"
      />
      <SuperSPKeys
        top={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-command-icon lucide-command"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
        }
        down="command"
        size={2}
      />
      <Keys space="true" />
      <SuperSPKeys
        top={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-command-icon lucide-command"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
        }
        down="command"
        size={2}
      />
      <SuperSPKeys
        top={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-option-icon lucide-option"
          >
            <path d="M3 3h6l6 18h6" />
            <path d="M14 3h7" />
          </svg>
        }
        down="option"
      />
      <ArrowButtons />
    </div>
  );
};



const ArrowButtons = () => {
  return (
    <div className="flex gap-1.5 items-end">
      <div className="h-8 w-14 flex justify-center items-center  rounded-keys bg-keys cursor-pointer shadow-2xl shadow-neutral-100 transition duration-200 border-neutral-600 border-t hover:shadow-neutral-100/15  hover:scale-95 hover:border-r hover:border-b hover:border-t-0 hover:border-l-0  gap-1">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            transform="rotate(270)"
          >
            <path d="M12 8l6 6H6z" />
          </svg>
        </span>
      </div>
      <div className="flex-col ">
        <div className="h-8 w-14 flex justify-center items-center  rounded-keys bg-keys cursor-pointer shadow-2xl shadow-neutral-100 transition duration-200 border-neutral-600 border-t hover:shadow-neutral-100/15  hover:scale-95 hover:border-r hover:border-b hover:border-t-0 hover:border-l-0  gap-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 8l6 6H6z" />
            </svg>
          </span>
        </div>
        <div className="h-8 w-14 flex justify-center items-center  rounded-keys bg-keys cursor-pointer shadow-2xl shadow-neutral-100 transition duration-200 border-neutral-600 border-t hover:shadow-neutral-100/15  hover:scale-95 hover:border-r hover:border-b hover:border-t-0 hover:border-l-0  gap-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              transform="rotate(180)"
            >
              <path d="M12 8l6 6H6z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="h-8 w-14 flex justify-center items-center  rounded-keys bg-keys cursor-pointer shadow-2xl shadow-neutral-100 transition duration-200 border-neutral-600 border-t hover:shadow-neutral-100/15  hover:scale-95 hover:border-r hover:border-b hover:border-t-0 hover:border-l-0  gap-1">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            transform="rotate(90)"
          >
            <path d="M12 8l6 6H6z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

const FnKeys = () => {
  return (
    <div className="flex gap-1.5">
      <Keys
        KeyTitle="F1"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sun-dim-icon lucide-sun-dim"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 4h.01" />
            <path d="M20 12h.01" />
            <path d="M12 20h.01" />
            <path d="M4 12h.01" />
            <path d="M17.657 6.343h.01" />
            <path d="M17.657 17.657h.01" />
            <path d="M6.343 17.657h.01" />
            <path d="M6.343 6.343h.01" />
          </svg>
        }
      />
      <Keys
        KeyTitle="F2"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sun-icon lucide-sun"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        }
      />
      <Keys
        KeyTitle="F3"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-panels-top-left-icon lucide-panels-top-left"
          >
            <rect width="14" height="14" x="3" y="3" rx="2" />
            <path d="M3 9h14" />
            <path d="M9 21V9" />
          </svg>
        }
      />
      <Keys
        KeyTitle="F4"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search-icon lucide-search"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
        }
      />
      <Keys
        KeyTitle="F5"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mic-icon lucide-mic"
          >
            <path d="M12 19v3" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <rect x="9" y="2" width="6" height="13" rx="3" />
          </svg>
        }
      />
      <Keys
        KeyTitle="F6"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-moon-icon lucide-moon"
          >
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
          </svg>
        }
      />
      <Keys
        KeyTitle="F7"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-rewind-icon"
          >
            <path d="M12 18a2 2 0 0 1-3.414 1.414l-6-6a2 2 0 0 1 0-2.828l6-6A2 2 0 0 1 12 10z" />
            <path d="M22 18a2 2 0 0 1-3.414 1.414l-6-6a2 2 0 0 1 0-2.828l6-6A2 2 0 0 1 22 10z" />
          </svg>
        }
      />
      <Keys
        KeyTitle="F8"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-skip-forward-icon lucide-skip-forward"
          >
            <path d="M21 4v16" />
            <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
          </svg>
        }
      />
      <Keys
        KeyTitle="F9"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-fast-forward-icon lucide-fast-forward"
          >
            <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 14z" />
            <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 14z" />
          </svg>
        }
      />
      <Keys
        KeyTitle="F10"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-volume-x-icon lucide-volume-x"
          >
            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
            <line x1="22" x2="16" y1="9" y2="15" />
            <line x1="16" x2="22" y1="9" y2="15" />
          </svg>
        }
      />
      <Keys
        KeyTitle="F11"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-volume1-icon lucide-volume-1"
          >
            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
            <path d="M16 9a5 5 0 0 1 0 6" />
          </svg>
        }
      />
      <Keys
        KeyTitle="F9"
        keyIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-volume2-icon lucide-volume-2"
          >
            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
            <path d="M16 9a5 5 0 0 1 0 6" />
            <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
          </svg>
        }
      />
    </div>
  );
};

const TouchId = () => {
  return (
    <div className="h-14 w-14 flex justify-center items-center  rounded-keys bg-keys cursor-pointer shadow-2xl shadow-neutral-100 transition duration-200 border-neutral-600 border-t hover:shadow-neutral-100/15  hover:scale-95 hover:border-r hover:border-b hover:border-t-0 hover:border-l-0  gap-1">
      <span className="w-8 h-8  rounded-full bg-neutral-800 inset-shadow-sm inset-shadow-neutral-500/60 hover:inset-shadow-neutral-500/20"></span>
    </div>
  );
};

const NumKeys = () => {
  return (
    <div className="flex gap-1.5">
      <Keys KeyTitle="1" keyIcon="!" />
      <Keys KeyTitle="2" keyIcon="@" />
      <Keys KeyTitle="3" keyIcon="#" />
      <Keys KeyTitle="4" keyIcon="$" />
      <Keys KeyTitle="5" keyIcon="%" />
      <Keys KeyTitle="6" keyIcon="^" />
      <Keys KeyTitle="7" keyIcon="&" />
      <Keys KeyTitle="8" keyIcon="*" />
      <Keys KeyTitle="9" keyIcon="(" />
      <Keys KeyTitle="0" keyIcon=")" />
    </div>
  );
};
const QToP = () => {
  return (
    <div className="flex gap-1.5">
      <Keys KeyTitle="Q" />
      <Keys KeyTitle="W" />
      <Keys KeyTitle="E" />
      <Keys KeyTitle="R" />
      <Keys KeyTitle="T" />
      <Keys KeyTitle="Y" />
      <Keys KeyTitle="U" />
      <Keys KeyTitle="I" />
      <Keys KeyTitle="O" />
      <Keys KeyTitle="P" />
    </div>
  );
};
const AToL = () => {
  return (
    <div className="flex gap-1.5">
      <Keys KeyTitle="A" />
      <Keys KeyTitle="S" />
      <Keys KeyTitle="D" />
      <Keys KeyTitle="F" />
      <Keys KeyTitle="G" />
      <Keys KeyTitle="H" />
      <Keys KeyTitle="J" />
      <Keys KeyTitle="K" />
      <Keys KeyTitle="L" />
    </div>
  );
};
const ZToM = () => {
  return (
    <div className="flex gap-1.5">
      <Keys KeyTitle="Z" />
      <Keys KeyTitle="X" />
      <Keys KeyTitle="C" />
      <Keys KeyTitle="V" />
      <Keys KeyTitle="B" />
      <Keys KeyTitle="N" />
      <Keys KeyTitle="M" />
    </div>
  );
};
