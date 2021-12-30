import Image from 'next/image';
import { groq } from 'next-sanity';
import { getClient } from '../lib/sanity.server';
import { urlFor } from '../lib/sanity';

const About = ({ data }) => {
  return (
    <div>
      <p>{data.blurb}</p>
      <Image src={urlFor(data.image).url()} height="200" width="200" />
    </div>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const query = groq`*[_type == "about"]`;
  const [{ blurb, image }] = await getClient(preview).fetch(query);

  return {
    props: {
      data: { blurb, image },
    },
  };
}

export default About;
