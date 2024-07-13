import styles from "./Banner.module.css";

function Banner({ imagem }) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('/images/banner-${imagem}.png')` }}
    />
  );
}

export default Banner;
