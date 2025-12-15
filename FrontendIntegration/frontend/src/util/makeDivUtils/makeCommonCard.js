// 내부 함수입니다.
// 카드의 헤더부분 입니다.
const renderCardHeader = (title,action, actionBtn = "버튼") => {
    return (
        <>
            <div>{title}</div>
            {action && <div onClick={action}>{actionBtn}</div>}
        </>
    )
}

// 카드의 내용 부분입니다.
const renderCardContents = (contents = [], layout = "column", columns) => {
  const layoutClassMap = {
    column: "flex flex-col gap-3",
    row: "flex flex-row gap-4",
    grid: `grid grid-cols-${columns} gap-4`,
  };

  const layoutClass = layoutClassMap[layout] || layoutClassMap["column"];

  return (
    <>
        <div className={layoutClass}>
            {contents.map((content, contentIdx) => (
                <div key={contentIdx}>
                    {content}
                </div>
            ))}
        </div>
    </>
  )
}

const makeCommonCard = (title, contents = [], options = {}) => {
  const {
    action = null,
    layout = "column",
    columns = 2,
  } = options;

  return (
    <div className="border rounded-lg p-4 bg-white">
      <div>{renderCardHeader(title, action)}</div>
      <div>{renderCardContents(contents, layout, columns)}</div>
    </div>
  );
};


const makeCommonStepBox = (step = 1, mainDescription, subDescriptions = []) => {
  return (
    <div className="space-y-1">
      <div className="font-bold">STEP {step}</div>
      <div>{mainDescription}</div>
      <div className="space-y-1">
        {subDescriptions.map((sub, idx) => (
          <div key={idx}>{sub}</div>
        ))}
      </div>
    </div>
  );
};



export {makeCommonCard, makeCommonStepBox}