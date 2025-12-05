const makeSitemap = (items = [], title = "title") => {
  return (
    <div>
      <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{title}</div>

      <div>
        {items.map((item, idx) => (
          <div key={idx}>
            <a href="/">{item}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export { makeSitemap };
