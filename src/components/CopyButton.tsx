import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Code from this CodeSandbox : https://codesandbox.io/s/copy-to-clipboard-animation-qt8pf?file=/src/index.js:590-621

export const CopyButton = ({ copyText }: any) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <CopyToClipboard text={copyText}>
      <button
        onClick={() => setCopied(true)}
        className="cursor-pointer appearance-none border-none px-1 pr-2 pb-9 outline-none xs:pb-4 "
      >
        <div className="relative h-4 w-4">
          <Clippy
            className={`stroke-dasharray-50 absolute top-0 left-0 stroke-current text-gray-800 transition-all duration-300 ease-in-out`}
            css={{
              strokeDasharray: 50,
              strokeDashoffset: copied ? -50 : 0,
            }}
          />
          <Check
            isVisible={copied}
            className={`stroke-dasharray-50 absolute top-0 left-0 stroke-current text-green-500 transition-all duration-300 ease-in-out`}
            css={{
              strokeDasharray: 50,
              strokeDashoffset: copied ? 0 : -50,
            }}
          />
        </div>
      </button>
    </CopyToClipboard>
  );
};

function Clippy(props: any) {
  const { className, css } = props;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={css}
    >
      <path d="M5.75 4.75H10.25V1.75H5.75V4.75Z" />
      <path d="M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379" />
    </svg>
  );
}

function Check(props: any) {
  const { className, css } = props;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={css}
    >
      <path d="M13.25 4.75L6 12L2.75 8.75" />
    </svg>
  );
}
