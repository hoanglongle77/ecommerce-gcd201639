import { Battery1Bar, Looks4 } from "@mui/icons-material";
import Link from "next/link";

export const metadata = {
  title: "Not Found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className={`container my-5`}>
      <div className={`text-center`}>
        <div className="my-2">
          <Looks4 className="fs-1" />
          <Battery1Bar className="fs-1" />
          <Looks4 className="fs-1" />
        </div>
        <h1>Page not found</h1>
        <p>
          The page you are looking for was moved, removed or might never
          existed.
        </p>
        <Link href="/" className={`btn btn-danger`}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
