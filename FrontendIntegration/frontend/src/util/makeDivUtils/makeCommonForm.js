const makeCommonButton = (label, onClick) => {
    return (
        <>
            <button onClick={onClick}>{label}</button>
        </>
    )
}

const makeCommonInput = (placeholder, onChange, type, name) => {
  return (
    <>
        <input name={name} type={type} placeholder={placeholder} onChange={onChange} />
    </>
  );
};

const makeCommonSelectBox = (options, onChange, optionStyle = "") => {
    return (
        <>
            <select onChange={onChange}>
                {options.map((option, i) => (
                    <option 
                    className={optionStyle}
                    key={i} value={option.value}>
                    {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}

export {makeCommonButton, makeCommonInput, makeCommonSelectBox}
