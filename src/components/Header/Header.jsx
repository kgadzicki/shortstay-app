import styles from "../Header/header.module.css";

function Header(props) {
  return (
    <>
      <div className={styles.header}>
        <div>{props.children}</div>
      </div>
    </>
  );
}

export default Header;
