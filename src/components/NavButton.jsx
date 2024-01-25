function NavButton({ children }) {
  return (
    <div>
      <a href="#" className="cta">
        <span>{children} →</span>
      </a>
    </div>
  );
}

export default NavButton;
