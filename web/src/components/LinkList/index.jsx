import { Link } from "../Link";
import { useQuery } from "@apollo/client";
import { useSearch } from '../../contexts/SearchContext'
import { Divider } from './styles'

export const LinkList = () => {

  const { feedQuery, variable } = useSearch()

  const { data, error, loading } = useQuery(feedQuery, { variables : { filter: variable }})

  if (loading) return <h1>Loading Feed...</h1>;
  if (error) return <h1>An unexpected error ocurred.</h1>;

  return (
    <>
      {data.feed.links.map((link, index) => (
        <Link key={link.id} linkData={link} index={index} />
      ))}

      <Divider />
    </>
  );
};
