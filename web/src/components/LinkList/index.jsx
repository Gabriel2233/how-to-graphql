import { Link } from "../Link";
import { useQuery } from "@apollo/client";
import { LINKS_FEED } from "../../graphql/queries";

export const LinkList = () => {
  const { data, loading, error } = useQuery(LINKS_FEED);

  if (loading) return <h1>Loading Feed...</h1>;
  if (error) return <h1>An unexpected error ocurred.</h1>;

  return (
    <>
      {data.feed.links.map((link) => (
        <Link key={link.id} linkData={link} />
      ))}
    </>
  );
};
