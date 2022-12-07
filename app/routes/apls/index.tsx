import { Link } from "@remix-run/react";

export default function AplIndexPage() {
  return (
    <p>
      No APL selected. Select an APL on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new APL.
      </Link>
    </p>
  );
}
