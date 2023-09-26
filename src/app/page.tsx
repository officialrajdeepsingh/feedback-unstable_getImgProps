import { unstable_getImgProps as getImgProps } from "next/image";

export default function Home() {
  // 
  const externalImage =
    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg";

  const defaultImageProperty = {
    alt: "follower image",
    width: 1224,
    height: 724,
  };
  const { props: { srcSet: follower } } = getImgProps({
    ...defaultImageProperty,
    src: "/follower.jpg",
  });

  // <div style={{
  //   backgroundImage: 'url("https://media.geeksforgeeks.org/'+
  //   'wp-content/uploads/20201221222410/download3.png")',
  //   height: "300px", backgroundRepeat: "no-repeat"
  // }}>

  //   background-image: url("large-balloons.jpg");
  // background-image: image-set(
  //   "large-balloons.avif" type("image/avif"),
  //   "large-balloons.jpg" type("image/jpeg")
  // );

  // background-image: -webkit-image-set(
  //   url("small-balloons.jpg") 1x,
  //   url("large-balloons.jpg") 2x);
  // background-image: image-set(
  //   url("small-balloons.jpg") 1x,
  //   url("large-balloons.jpg") 2x);

  const common = { alt: "Picture Logo", width: 1224, height: 724 };

  const {
    props: { srcSet: road },
  } = getImgProps({ ...common, src: "/road.jpg" });

  const {
    props: { srcSet: tree, ...rest },
  } = getImgProps({ ...common, src: "/tree.jpg" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* */}
      <h1 className="mb-12">Image background without unstable_getImgProps</h1>
      <span>{externalImage} </span>
      <div
        style={{
          backgroundImage: `image-set('${externalImage}')`,
          height: "300px",
          backgroundRepeat: "no-repeat",
        }}
        className="container bg-cover bg-center bg-no-repeat mb-12 bg-center h-[1224px] mx-auto"
      >
      </div>
      {/* */}
      <h1 className="mb-12">Image background with unstable_getImgProps</h1>
      <span>Error: {follower}</span>
      <div
        style={{
          backgroundImage: `image-set('${follower}')`,
          height: "300px",
          backgroundRepeat: "no-repeat",
        }}
        className="container bg-cover bg-center bg-no-repeat mb-12 bg-center h-[1224px] mx-auto"
      >
      </div>
      {/* Reqular */}
      <h1 className="mb-12">
        Image with picture element and using unstable_getImgProps
      </h1>
      <span>{road}</span>
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet={road} />
        <source media="(prefers-color-scheme: light)" srcSet={tree} />
        <img {...rest} />
      </picture>
    </main>
  );
}
