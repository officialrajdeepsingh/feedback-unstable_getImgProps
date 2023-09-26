
import { unstable_getImgProps as getImgProps } from "next/image";

export function Logo() {

  const common = { alt: "Picture Logo", width: 200,height: 60};
  
  const {
    props: { srcSet: darkLogo },
  } = getImgProps({ ...common,  src: "/picture-dark.png" });
  
  const {
    props: { srcSet: lightLogo , ...rest },
  } = getImgProps({ ...common, src: "/picture-light.png" });
  
  return (
      <picture>
        <source media="(prefers-color-scheme: dark)" srcSet={darkLogo } />
        <source media="(prefers-color-scheme: light)" srcSet={lightLogo} />
        <img  {...rest} />
      </picture>
  );
}
