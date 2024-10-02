import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinkButton({ children, icon, href }) {
  return (
    <a href={`${href}`} target="_blank" className="flex items-center px-3 py-2 mb-5 space-x-5 transition-all border shadow-lg border-slate-50 hover:opacity-40 shadow-slate-500/80">
        <FontAwesomeIcon icon={icon} />

      <p>{children}</p>
    </a>
  );
}
