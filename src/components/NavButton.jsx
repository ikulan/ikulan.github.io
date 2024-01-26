function NavButton({ children, url }) {
  return (
    <div>
      <a href={url} className="cta">
        <span className="text-nowrap">{children} →</span>
      </a>
    </div>
  );
}

export default NavButton;
