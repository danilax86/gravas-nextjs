import { useRouter } from "next/router";
import galleries from "../../static/data/galleries";
import { withTranslation, Link } from "../../i18n";
import { useState } from "react";
import Layout, { Images, Main, Aside, Icon, Image } from "./style";
import { useTransition, animated } from "react-spring";

const Gallery = () => {
  const router = useRouter();

  const { slug } = router.query;
  const gallery = galleries.find(gallery => gallery.slug === slug);

  gallery.images = gallery.images.map((image, key) => {
    return {
      id: key,
      ...image
    };
  });

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    const nextImageIndex = index + 1;
    setIndex(nextImageIndex === gallery.images.length - 1 ? 0 : nextImageIndex);
  };

  const handleBack = () => {
    const previousImageIndex = index - 1;
    const lastImageIndex = gallery.images.length - 1;
    setIndex(previousImageIndex < 0 ? lastImageIndex : previousImageIndex);
  };
  const transitions = useTransition(gallery.images[index], image => image.id, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <Layout>
      <Icon onClick={router.back}>
        <span className="icon-close"></span>
      </Icon>
      <Images>
        <Main>
          <Image>
            <span className="icon-back" onClick={handleBack}></span>
            {transitions.map(({ item, props, key }) => (
              <animated.div key={key} style={{ ...props }}>
                <picture>
                  <img src={item.path} alt={item.title} type="image/webp" />
                </picture>
              </animated.div>
            ))}
            <span className="icon-next" onClick={handleNext}></span>
          </Image>
          <p>{gallery.images[index].title}</p>
        </Main>
        <Aside>
          {gallery.images.map((image, index) => (
            <picture>
              <img
                onClick={e => {
                  setIndex(index);
                }}
                key={index}
                src={image.path}
                alt={image.title}
                type="image/webp"
              />
            </picture>
          ))}
        </Aside>
      </Images>
    </Layout>
  );
};
Gallery.getInitialProps = async () => ({
  namespacesRequired: ["gallery"]
});

export default withTranslation("gallery")(Gallery);
