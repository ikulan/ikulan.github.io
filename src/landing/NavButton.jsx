import styles from "./NavButton.module.css";

function NavButton({ children, url }) {
  return (
    <div>
      <a href={url} className={styles.cta}>
        <span className="text-nowrap">{children} →</span>
      </a>
    </div>
  );
}

export default NavButton;
