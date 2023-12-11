const ErrorIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 96 960 960"
      width="48"
    >
      <path
        d="M479.982 776q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM453 623h60V370h-60v253Zm27.266 353q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z"
        fill="fill-current"
      />
    </svg>
  );
};
const ErrorMessage = ({
  errorMessage,
  className,
  children,
}: {
  errorMessage: string;
  className?: string;
  children?: any;
}) => {
  return (
    <div
      className={`mb-4 flex w-full items-center space-x-4 border border-red-500/50 bg-red-500/5 px-4 py-3 ${className}`}
    >
      <ErrorIcon className="h-6 w-6 fill-current text-red-600" />
      <p className="text-base text-red-500 first-letter:capitalize">
        {errorMessage}
      </p>
      <span className="text-base text-dangerColor">{children}</span>
    </div>
  );
};

export default ErrorMessage;
