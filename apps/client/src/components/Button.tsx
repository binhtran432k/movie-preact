import { PropsWithChildren } from "preact/compat";

export default function Button({
  children,
  type,
  onClick,
}: PropsWithChildren<{ type?: string; onClick?: () => void }>) {
  return (
    <button
      type={type}
      className="bg-gray-300 bg-opacity-30 hover:bg-opacity-50 py-0.5 px-4 rounded text-sm font-bold mb-1"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
