function Contact(): JSX.Element {
  return (
    <div className="text-white">
      <a
        href="tel:8 (800) 333-55-99"
        className="hover:text-hover-orange tracking-extra-sm align-middle"
      >
       <span className="relative top-[2px]">8 (800)</span> 333-55-99
      </a>
    </div>
  );
}

export default Contact;