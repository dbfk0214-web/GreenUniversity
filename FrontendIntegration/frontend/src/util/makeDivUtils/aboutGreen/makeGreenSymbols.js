const makeImageSection = (backgroundImage, title = "none", paragraphs = []) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "420px",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div style={{ marginTop: "50px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              paddingBottom: "8px",
              borderBottom: "2px solid #1d4ed8", // 파란 줄
              display: "inline-block",
            }}
          >
            {title}
          </h2>
          <div>
            {paragraphs.map((paragraph) => (
              <div
                style={{
                  fontSize: "20px",
                  color: "orange",
                  marginBottom: "24px",
                  fontFamily: "bold",
                }}
              >
                {paragraph}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { makeImageSection };
