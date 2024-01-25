function NavButton({ children }) {
  return (
    <div>
      <a href="#" className="cta">
        <span className="text-nowrap">{children} →</span>
      </a>
    </div>
  );
}

export default NavButton;
