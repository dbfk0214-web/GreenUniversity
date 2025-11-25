import axios from "axios";
import {useContext, useEffect, useState } from "react";
import { typeEnum } from "../api/commonApi";
import AdminSelectedContext from "../components/admin/AdminSelectContext";
import { createButton } from "../util/button";
import AdminTableListComponent from "../components/admin/AdminTableListComponent";
import AdminWriteComponent from "../components/admin/AdminWriteComponent";
import AdminUpdateComponent from "../components/admin/AdminUpdateComponent";
import AdminModalComponent from "../components/admin/AdminModalComponent";
import AdminSearchFormComponent from "../components/admin/AdminSearchFormComponent";
import AdminDeleteViewComponent from "../components/admin/AdminDeleteViewComponent";
import AdminDetailViewComponent from "../components/admin/AdminDetailViewComponent";

const AdminLayout = ({ config }) => {
  // 데이터 가져오기
  const { key, tableInfo, columns, funcs, formData, type, buttonDataList, extrahButtonDataList, color } = config;
  const { findByKeyword, readAll, readOne, writeOne, deleteOne, updateOne } = funcs;

  // 리덕스
  const { selectedIds, setSelectId } = useContext(AdminSelectedContext);

  const selectId = selectedIds[key]; // 현재 테이블 선택 ID

  const changeSelectId = (id) => {
    setSelectId(key, id); // Context에 전달
  };


  // useState 사용
  const [readData, setReadData] = useState([]);
  const [findReadOne, setFindReadOne] = useState({});
  const [form, setForm] = useState(formData);
  const [isLoading, setLoading] = useState(false);

  const [findData, setFindData] = useState([]);
  const [findColumns, setFindColumns] = useState({});
  const [selectData, setSelectData] = useState({});

  // 갱신용 useState
  const [viewMode, setViewMode] = useState(typeEnum.default);

  const [selectedColumn, setSelectedColumn] = useState([]);
  const [formColumn, setFormColumn] = useState([]);
  const [targetColumn, setTargetColumn] = useState(null);

  const [buttonList, setButtonList] = useState(buttonDataList);
  const [extrahButtonList, setExtrahButtonList] = useState(extrahButtonDataList);

  // 출력될 버튼 모음
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const getList = (result) => {
    try {
      const data = result;
      setReadData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const changeViewMode = (newMode) => {
    if (viewMode === newMode) return;
    setViewMode(newMode);
  }

  // 핸들러
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e, action) => {
    e.preventDefault();

    const relatedColumns = extrahButtonList.map(data => data.columns);
    const formData = new FormData(e.target);

    for (const columns of relatedColumns) {
      for (const column of Object.keys(columns)) {
        const searchObject = formData.get(column);

        if (!searchObject || searchObject.trim() === "") {
          alert(`'${column}' 값이 비었습니다. 입력해주세요.`);
          return;
        }
      }
    }

    setLoading(true);
    action(form)
      .then((result) => {
        console.log("입력값 : ", form);
        console.log("결과값 : ", result);
      })
      .catch(err => console.log("에러발생 : ", err))
      .finally(() => {
        setLoading(false);
      })
  }

  const onSearch = (e) => {
    e.preventDefault();

    // form에서 데이터 추출
    const formData = new FormData(e.target);
    const selectKeyword = formData.get('selectKeyword');
    const searchText = formData.get('searchText'); // 추가된 name으로 값 추출

    console.log("선택된 컬럼:", selectKeyword);
    console.log("입력된 검색어:", searchText);

    setLoading(true);
    findByKeyword(selectKeyword, searchText)
      .then((result) => {
        console.log("결과값 : ", result);
        setReadData(result);
      })
      .catch(err => console.log("에러발생 : ", err))
      .finally(() => {
        setLoading(false);
      })
  }

  const selectCheckbox = (id) => {
    setSelectData(findData[id]);
    updateForm(findData[id]);
  }

  const updateForm = (selectData) => {
    if (!selectData || Object.keys(selectData).length === 0) return;

    setForm(prev => ({ ...prev, [targetColumn]: selectData }));
  }

  useEffect(() => {
    if (typeof columns === "object") {
      const columnKey = Object.keys(columns);
      if (columnKey.length > 0) {
        setSelectedColumn(columnKey);
      }
    }

    if (typeof formData === "object") {
      const formColumnKey = Object.keys(formData);
      if (formColumnKey.length > 0) {
        setFormColumn(formColumnKey);
      }
    }

    // 버튼 생성
    if (buttonDataList && buttonDataList.length > 0) {
      setButtonList(buttonDataList);
    }


    // 모달에서 쓰이는 버튼 생성
    if (extrahButtonDataList && extrahButtonDataList.length > 0) {
      setExtrahButtonList(extrahButtonDataList);
    }

  }, []);

  useEffect(() => {
    // 실행 조건
    if (!selectId) return;
    if (viewMode !== typeEnum.readOne) return;

    // 데이터가 리스트 형태여서 0번을 가져오기로함. 수정이 필요함
    setLoading(true);
    readOne(selectId)
      .then((item) => {
        if (item && item.length > 0) {
          setFindReadOne(item[0]);
          setForm(item[0]);
        } else {
          setFindReadOne(item);
          setForm(item);
        }
      })
      .finally(() => {
        setLoading(false);
      })
  }, [viewMode, selectId]);

  return (
    <div className={`container mx-auto mt-8 px-4 ${color} py-10`}>
      {tableInfo && <>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {tableInfo.tableName}
        </h2>
      </>}

      {/* isOpen가 true혹은 false일 경우 구분 */}
      {isOpen ?
        <>
          {/* 테이블 비활성화 버튼 */}
          <div className="w-full flex justify-center">
            {createButton({
              label: "테이블 닫기",
              style: "bg-green-300 hover:bg-green-700",
              size: "90%",
              onClick: () => {
                setOpen(false);
              }
            })}
          </div>
          {/* 테이블에 쓰이는 버튼 버튼 */}
          <div className="flex flex-wrap mb-6">
            {buttonList.map((btnData, index) => (
              <div key={index} className={`flex justify-center flex-1 basis-1/${buttonList.length}`}>
                {/* Component, index, arr */}
                {createButton({
                  label: btnData.label,
                  style: btnData.style,
                  onClick: () => {
                    changeViewMode(btnData.enumType);
                    if (btnData.action) {
                      btnData.action().then(result => {
                        if (btnData.enumType === typeEnum.read) {
                          getList(result);
                        }
                      })
                    }
                  }
                })}
              </div>
            ))}
          </div>
          {/* 테이블 열린 상태 */}
          <div>
            {/* enum값이 read 경우, findAll모드 */}
            {viewMode === typeEnum.read && (
              <AdminTableListComponent
                tableInfo={tableInfo}
                columns={columns}
                selectedColumn={selectedColumn}
                readData={readData}
                changeViewMode={changeViewMode}
                changeSelectId={changeSelectId}
              />
            )}

            {/* enum값이 write 경우, 추가모드 */}
            {viewMode === typeEnum.write && (
              <AdminWriteComponent
                formColumn={formColumn}
                form={form}
                formData={formData}
                extrahButtonList={extrahButtonList}
                setForm={setForm}
                setSelectData={setSelectData}
                changeHandler={changeHandler}
                onSubmit={e => onSubmit(e, writeOne)}
                setModalOpen={setModalOpen}
                setTargetColumn={setTargetColumn}
              />
            )}

            {/* enum값이 readone 경우, 하나 읽기 모드 */}
            {viewMode === typeEnum.readOne && (
              <AdminDetailViewComponent 
                tableInfo={tableInfo}
                findReadOne={findReadOne}
                selectedColumn={selectedColumn}
                columns={columns}
                createButton={createButton}
                typeEnum={typeEnum}
                changeViewMode={changeViewMode}
              />
            )}

            {/* enum값이 search 경우, search모드 */}
            {viewMode === typeEnum.search && (
              <AdminSearchFormComponent
                onSubmit={onSubmit}
                selectedColumn={selectedColumn}
                tableInfo={tableInfo}
              />
            )}

            {/* enum값이 delete 경우, 삭제모드 */}
            {viewMode === typeEnum.delete && (
              <AdminDeleteViewComponent 
                tableInfo={tableInfo}
                findReadOne={findReadOne}
                selectedColumn={selectedColumn}
                columns={columns}
                createButton={createButton}
                typeEnum={typeEnum}
                changeViewMode={changeViewMode}
                deleteOne={deleteOne}
              />
            )}

            {/* enum값이 update 경우, 업데이트모드 */}
            {viewMode === typeEnum.update && (
              <AdminUpdateComponent
                formColumn={selectedColumn}
                form={form}
                formData={formData}
                extrahButtonList={extrahButtonList}
                setForm={setForm}
                setSelectData={setSelectData}
                changeHandler={changeHandler}
                onSubmit={e => onSubmit(e, updateOne)}
                setModalOpen={setModalOpen}
                setTargetColumn={setTargetColumn}
              />
            )}
          </div>

          {/* 모달창 */}
          {isModalOpen &&
            <AdminModalComponent
              isModalOpen={isModalOpen}
              setModalOpen={setModalOpen}
              selectCheckbox={selectCheckbox}
              selectId={selectId}
              changeSelectId={changeSelectId}
              setFindData={setFindData}
              findData={findData}
              findColumns={findColumns}
              setFindColumns={setFindColumns}
              extrahButtonList={extrahButtonList}
              targetColumn={targetColumn}
              createButton={createButton}
              tableInfo={tableInfo}
            />
          }
        </>
        :
        <>
          {/* 테이블 비활성화 버튼 */}
          <div className="w-full flex justify-center">
            {createButton({
              label: "테이블 열기",
              style: "bg-green-300 hover:bg-green-700",
              size: "90%",
              onClick: () => {
                setOpen(true);
                changeViewMode(type);
              }
            })}
          </div>
        </>}
    </div >
  );
}
export default AdminLayout;
