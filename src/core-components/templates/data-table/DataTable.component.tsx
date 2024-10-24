import { useEffect, useState } from "react";

import "./DataTable.style.scss";
import { RegEx } from "../../../core-constants/regex.constant";
import { Pagination } from "../../molecules/pagination/Pagination.component";
import { Button } from "../../atoms/button/Button.component";
import { Tooltip } from "../../atoms/tooltip/Tooltip.component";
import { IG_Input } from "../../atoms/input/IG_Input.component";
import { Checkbox } from "../../atoms/checkbox/Checkbox.component";
import { Icon } from "../../atoms/icon/Icon.component";
import { Radio } from "../../atoms/radio/Radio.component";
import {
  uniqueElem,
  useDebounceFunc,
} from "../../../core-hooks/use-debounce.hook";
import { sortDirectionForTable } from "../../../core-constants/app.constant";

interface DataTableProps {
  data: any[];
  columns: TabColumns[];
  totalCount?: number;
  isDisabled?: boolean;
  onRowPress?: (item: any) => void;
  onDataPress?: (item: any) => void;
  classes?: string;
  isDataSaved?: boolean;
  onMinOrMaximise?: () => void;
  isShowToolBar?: boolean;
  extraTools?: React.JSX.Element;
  pageSizeNo?: number;
  extraTools2?: React.JSX.Element;
  showSearch?: boolean;
  showMinMaxBtn?: boolean;
  pagination?: boolean;
  searchTitle?: string;
  outerSearchFunc?: (val: any) => void;
  isSearchButton?: boolean | false;
  loadFromServer?: (
    currentPage: number,
    pageSize: number,
    params?: object | undefined
  ) => void;
  noData?: React.JSX.Element;
  defaultPage?: number;
  tableContainerClass?: string;
  width?: string;
  rowClass?: string;
  footer?: React.JSX.Element;
  tableHeaderContainer?: React.JSX.Element;
  toolbarStyle?: string[];
  selectionType?: "radio" | "checkbox" | null;
  onSelection?: (_data: any) => void;
  rejectDataPressColumn?: string[];
  tray?: string;
  onCallPagination?: (page: any) => void;
  setPageCallback?: (func: (arg: number) => void) => void;
  searchDefaultValue?: string | null;
  setDefaultValue?: (val: any) => void;
  selectedRows?: Array<number | string>;
}

export interface TabColumns {
  name: React.JSX.Element | string | any;
  key: string;
  onShowMaximize?: boolean;
  hidden?: boolean;
  headerClasses?: string;
  classes?: string;
  sort?: boolean;
  sortDirection?: string;
  width?: string;
  search?: true;
  onFormatter?: (
    item: any,
    colProps: TabColumns,
    key: string,
    index: number
  ) => React.JSX.Element | string;
  onSorter?: (row1: any, row2: any, colProps: TabColumns) => number | null;
  onServerSorter?: (side: TabColumns) => void;
  onHeaderClick?: (item: any) => void;
  onColSearch?: (
    rowData: any,
    colProps: TabColumns,
    searchText: string
  ) => boolean;
}

export const DataTable = ({
  data,
  columns = [],
  totalCount,
  classes,
  onRowPress,
  pageSizeNo,
  isDataSaved = false,
  onMinOrMaximise,
  isShowToolBar = true,
  extraTools = <></>,
  extraTools2 = <></>,
  showSearch = true,
  showMinMaxBtn = true,
  pagination = true,
  isSearchButton = false,
  searchTitle = "",
  outerSearchFunc,
  loadFromServer,
  noData,
  defaultPage = 0,
  isDisabled,
  tableContainerClass = "table-container",
  width,
  rowClass,
  footer,
  tableHeaderContainer,
  toolbarStyle,
  selectionType,
  onSelection,
  onDataPress,
  rejectDataPressColumn = [],

  onCallPagination,
  setPageCallback,
  searchDefaultValue,
  setDefaultValue,
  selectedRows,
}: DataTableProps) => {
  const debounceTime = 1000;
  const [maximize, setMaximize] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [noOfPages, setNoOfPages] = useState(1);
  const [pageSize] = useState<number>(pageSizeNo ?? 10);
  const [currentPage, setCurrentPage] = useState<number>(defaultPage);
  const [colPropsState, setColPropsState] = useState<TabColumns[]>(
    columns ?? []
  );
  const [dataList, setDataList] = useState<any[]>([]);
  const [initialList, setInitialData] = useState<any[]>(data);
  const [selectedItems, setSelectedItems] = useState<any[]>(
    isDataSaved ? data : []
  );
  const [intialDataLength, setInitialDataLength] = useState<number>(
    data?.length
  );
  const [pageWiseCheckbox, setPageWiseCheckbox] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    if (!searchDefaultValue) {
      setSearchInput("");
    }
  }, [searchDefaultValue]);

  useEffect(() => {
    setColPropsState(columns);
  }, [columns]);

  useEffect(() => {
    if (loadFromServer) {
      setDataList(data);
      setNoOfPages(Math.ceil((totalCount ?? 0) / pageSize));
      setPageCallback?.(setCurrentPage);
    }
    if (currentPage)
      if (intialDataLength !== data?.length) {
        setCurrentPage(0);
        setInitialDataLength(data?.length);
      } else {
        setCurrentPage(currentPage);
      }
    else {
      setCurrentPage(0);
    }
  }, [data]);

  useEffect(() => {
    if (!loadFromServer) {
      (!searchInput || outerSearchFunc) && setInitialData(data);
      setDataList(sliceData());

      setNoOfPages(Math.ceil((initialList.length ?? 0) / pageSize));
    }
    searchInput && setDefaultValue?.(searchInput);
  }, [currentPage, searchInput, initialList, data]);
  const defaultSort = (item1: any, item2: any, updatedColProps: any) => {
    if (
      updatedColProps?.sortDirection &&
      updatedColProps.sortDirection === "asc"
    ) {
      if (RegEx.onlyDigit.test(deepGet(item1, updatedColProps.key))) {
        return (
          deepGet(item1, updatedColProps.key) -
          deepGet(item2, updatedColProps.key)
        );
      } else {
        return deepGet(item1, updatedColProps.key).localeCompare(
          deepGet(item2, updatedColProps.key)
        );
      }
    } else {
      if (RegEx.onlyDigit.test(deepGet(item1, updatedColProps.key))) {
        return (
          deepGet(item2, updatedColProps.key) -
          deepGet(item1, updatedColProps.key)
        );
      } else {
        return deepGet(item2, updatedColProps.key).localeCompare(
          deepGet(item1, updatedColProps.key)
        );
      }
    }
  };

  const sortingLogic = (
    objRow1: any,
    objRow2: any,
    colPropsConfig: TabColumns
  ) => {
    if (colPropsConfig?.onServerSorter) {
      colPropsConfig.onServerSorter(colPropsConfig);
    }
    if (colPropsConfig.onSorter) {
      return colPropsConfig.onSorter(objRow1, objRow2, colPropsConfig);
    } else {
      return defaultSort(objRow1, objRow2, colPropsConfig);
    }
  };

  const handleDataListSort = (args1: any, args2: any) => {
    return args1.sort((obj1: any, obj2: any) =>
      sortingLogic(obj1, obj2, args2 as TabColumns)
    );
  };

  const onChangeSort = (value: TabColumns) => {
    try {
      if (value.sort) {
        const newState = colPropsState.map((datum) => {
          if (datum.key === value.key) {
            return {
              ...datum,
              sortDirection: datum.sortDirection === "asc" ? "desc" : "asc",
            };
          } else {
            return {
              ...datum,
              sortDirection: "",
            };
          }
        });
        setColPropsState(newState);
        const updatedColProps = newState.find(
          (datum) => datum.key === value.key
        );
        const tempDataList = handleDataListSort(dataList, updatedColProps);
        setDataList(tempDataList);
      }
    } catch (error: any) {
      throw new Error("Something went wrong in sorting", error);
    }
  };

  const deepGet = (obj: any, key: any) =>
    key
      .split(".")
      .reduce(
        (xs: any, x: any) =>
          xs?.[x] !== null && xs[x] !== undefined ? xs[x] : null,
        obj
      );

  const onClickSearchBtn = (searchText: any) => {
    let tempDataList = data ?? [];
    if (searchText) {
      const searchAbleColumns = colPropsState.filter((datum) => datum.search);

      tempDataList = tempDataList?.filter((obj) => {
        const conditions: boolean[] = [];
        searchAbleColumns.forEach((item) => {
          let result = false;
          if (item.onColSearch) {
            result = item.onColSearch(obj, item, searchText);
          } else {
            const str = deepGet(obj, item?.key)?.toLowerCase();
            const toBeMatched = searchText.toLowerCase();
            result = str?.includes(toBeMatched);
          }
          conditions.push(result);
        });
        return conditions.reduce((arg1, arg2) => arg1 || arg2);
      });
    }
    setCurrentPage(0);
    setInitialData(tempDataList);
  };
  const sliceData = () => {
    if (pagination) {
      return (
        initialList?.slice(
          currentPage * pageSize,
          (currentPage + 1) * pageSize
        ) ?? []
      );
    } else {
      return initialList;
    }
  };

  const generateStyle = (dataObj: TabColumns) => {
    const obj = {};
    if (dataObj.width) {
      Object.assign(obj, { width: dataObj.width, maxWidth: dataObj.width });
    } else {
      Object.assign(obj, {
        width: `${100 / columns.length}%`,
        maxWidth: `${100 / columns.length}%`,
      });
    }
    if ("hidden" in dataObj && dataObj.hidden === true) {
      Object.assign(obj, { display: "none" });
    }

    if ("hidden" in dataObj && dataObj.hidden === true) {
      "onShowMaximize" in dataObj && maximize && dataObj.onShowMaximize
        ? Object.assign(obj, { display: "" })
        : Object.assign(obj, { display: "none" });
    }
    return obj;
  };
  const onColFormatter = (
    item: any,
    columnProp: TabColumns,
    key: string,
    index: number
  ) => {
    if ("onFormatter" in columnProp) {
      return columnProp.onFormatter?.(item, columnProp, key, index);
    }
    return deepGet(item, key);
  };
  const deBouncedFunc = useDebounceFunc(onClickSearchBtn, debounceTime);
  const deBouncedOuterFunc = useDebounceFunc(outerSearchFunc, debounceTime);

  const onCallPaginationChange = (page: number) => {
    if (onCallPagination) {
      onCallPagination(page);
    }
    setCurrentPage(page);
    if (loadFromServer) {
      loadFromServer(page, pageSize, {
        searchInput,
      });
    } else {
      setDataList(sliceData());

      setNoOfPages(Math.ceil((initialList.length ?? 0) / pageSize));
    }
  };
  const onSelectionClick = (
    item: any,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const flag = event.target.checked;
    let newList: any = [];
    if (flag) {
      newList = [...selectedItems, ...item];
    } else {
      newList = selectedItems.filter(
        (pv) =>
          pv.serial !== item.find((e: any) => e.serial === pv.serial)?.serial
      );
    }
    const uniqueRows = uniqueElem(newList, "serial");
    setSelectedItems(uniqueRows);
    onSelection?.(uniqueRows);
  };
  const onRadionSelection = (event: any) => {
    setSelectedItems([event]);
    onSelection?.([event]);
  };

  const paginationMinmaxContainer = () => {
    return (
      <>
        {pagination &&
          (noOfPages > 0 ? (
            <Pagination
              noOfPages={noOfPages}
              currentPage={currentPage}
              onHandlePagination={(page: any, _pageSize: any) => {
                onCallPaginationChange(page);
              }}
            />
          ) : (
            ""
          ))}
        {showMinMaxBtn && (
          <Button
            dataTestId="ACCT-STMT-MAXI"
            classes="maximizeOrMinimize ml-4 h-[34.83px]"
            btnType="secondary-gray"
            iconName={maximize ? "minimizeIcon" : "maximizeIcon"}
            iconPos="left"
            size="md"
            onClick={() => {
              setMaximize(!maximize);
              onMinOrMaximise?.();
            }}
          />
        )}
        <Tooltip
          id=".maximizeOrMinimize"
          place="top"
          content={maximize ? "Minimize" : "Maximize"}
          variant="dark"
        />
      </>
    );
  };

  const dataSnoList: string[] = dataList?.map((item) => item.serial);
  const selectedItemList: string[] = selectedItems?.map((item) => item.serial);

  const matchWithSelected = dataSnoList.every((value) =>
    selectedItemList.includes(value)
  );

  const defaultSelected =
    selectedRows &&
    data.filter(
      (pv) =>
        pv?.serial?.toString() ===
        selectedRows
          ?.find((e) => e.toString() === pv?.serial.toString())
          ?.toString()
    );

  useEffect(() => {
    setPageWiseCheckbox({
      ...pageWiseCheckbox,
      [currentPage]: matchWithSelected,
    });
  }, [matchWithSelected]);

  useEffect(() => {
    const uniqueRows = uniqueElem(defaultSelected ?? [], "serial");
    setSelectedItems(uniqueRows);
    onSelection?.(uniqueRows);
  }, [selectedRows]);

  return (
    <div className="data-table-component-container">
      {isShowToolBar && (
        <div className={`toolbar-container ${toolbarStyle?.join(" ")}`}>
          {extraTools2}
          <div className="search-paging-container">
            {showSearch && (
              <div className="flex flex-1 search-bar gap-x-3">
                <IG_Input
                  id="SRCH-STMT"
                  prefixIcon="searchIcon"
                  placeholder={searchTitle}
                  classes="search-input ellipsis"
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    outerSearchFunc !== undefined
                      ? deBouncedOuterFunc(e.target.value)
                      : deBouncedFunc(e.target.value);
                  }}
                  suffixIcon={searchInput !== "" ? "close" : ""}
                  onIconClick={() => {
                    setSearchInput("");
                    outerSearchFunc !== undefined
                      ? deBouncedOuterFunc("")
                      : deBouncedFunc("");
                  }}
                />
                {isSearchButton && (
                  <Button
                    dataTestId={"ENTR"}
                    iconName="arrowRightCircle"
                    backgroundColor="white"
                    onClick={() => onClickSearchBtn(searchInput)}
                  />
                )}
              </div>
            )}
            {extraTools}

            {(pagination || showMinMaxBtn) && (
              <div className="pagination-container-top">
                {paginationMinmaxContainer()}
              </div>
            )}
          </div>
        </div>
      )}

      {dataList?.length > 0 && tableHeaderContainer && tableHeaderContainer}

      {!(dataList?.length === 0 && noData) && (
        <div className={tableContainerClass}>
          <div className={`data-table-container ${classes}`}>
            <div className="data-table-headers">
              {colPropsState?.map((item, index) => {
                return (
                  <div
                    className={`header m-text-sm-bold text-gray-800 ${
                      selectionType ? "selection-header items-center" : ""
                    } ${item.headerClasses ?? ""}`}
                    key={index}
                    style={generateStyle(item)}
                    onClickCapture={(event) => {
                      item?.onHeaderClick && event.stopPropagation();
                      item?.onHeaderClick?.(item.key);
                    }}
                  >
                    {index === 0 && selectionType === "checkbox" && (
                      <span className="selection-type">
                        <Checkbox
                          checked={
                            pageWiseCheckbox[currentPage] && matchWithSelected
                          }
                          disabled={isDisabled}
                          onChange={(event) => {
                            const flag = event.target.checked;

                            setPageWiseCheckbox({
                              ...pageWiseCheckbox,
                              [currentPage]: flag,
                            });
                            if (flag) {
                              onSelectionClick(dataList, event);
                              return;
                            }
                            onSelectionClick(dataList, event);
                          }}
                          id="CC"
                        />
                      </span>
                    )}

                    <div className="flex items-center">
                      <span>{item.name}</span>
                      <div className="ml-1" onClick={() => onChangeSort(item)}>
                        {item.sort &&
                          (item.sortDirection
                            ? item.sortDirection === ""
                            : true) && (
                            <span>
                              <Icon
                                height={16}
                                width={16}
                                icon="chevron-neutral"
                                color="none"
                              />
                            </span>
                          )}
                        {item.sort &&
                          item.sortDirection === sortDirectionForTable.asc && (
                            <Icon
                              height={16}
                              width={16}
                              icon="chevron-up-arrow"
                              color="none"
                            />
                          )}
                        {item.sort &&
                          item.sortDirection === sortDirectionForTable.desc && (
                            <Icon height={16} width={16} icon="chevron-down" />
                          )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="data-table-body" style={{ width }}>
              {dataList?.map((item: any, index: number) => {
                return (
                  <div
                    className={`data-table-row cursor-pointer ${
                      rowClass ?? ""
                    }`}
                    key={index}
                    onClick={() => {
                      onRowPress?.(item);
                    }}
                  >
                    {colPropsState.map((itemCol: TabColumns, innerIn) => {
                      return (
                        <div
                          onClick={(_event) => {
                            !rejectDataPressColumn.includes(String(innerIn)) &&
                              onDataPress?.(item);
                          }}
                          className={`data-table-data ${
                            itemCol.classes ?? "m-text-md-regular text-gray-600"
                          }`}
                          key={innerIn}
                          style={generateStyle(itemCol)}
                        >
                          <div
                            className={`${
                              itemCol.onFormatter ? "cellFormatter" : "cell"
                            } ${
                              selectionType ? "checkbox-cell items-center" : ""
                            }`}
                          >
                            {innerIn === 0 && selectionType && (
                              <span
                                className="selection-type"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {selectionType === "checkbox" ? (
                                  <Checkbox
                                    onChange={(event) => {
                                      event.stopPropagation();
                                      onSelectionClick([item], event);
                                    }}
                                    disabled={isDisabled}
                                    id={`CHK-${index}`}
                                    checked={selectedItems?.some(
                                      (si) => si.serial === item.serial
                                    )}
                                  />
                                ) : (
                                  <Radio
                                    isChecked={
                                      item?.dataIndex ===
                                      selectedItems?.[0]?.dataIndex
                                    }
                                    id={`RADIO-${item?.dataIndex as string}`}
                                    onClick={() => {
                                      onRadionSelection(item);
                                    }}
                                  />
                                )}
                              </span>
                            )}
                            <span
                              className={`${
                                (selectionType === "checkbox" ||
                                  selectionType === "radio") &&
                                innerIn === 0
                                  ? "text-gray-900 m-text-sm-medium"
                                  : ""
                              }`}
                            >
                              {onColFormatter(
                                item,
                                itemCol,
                                itemCol.key,
                                index
                              )}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {isShowToolBar && (pagination || showMinMaxBtn) && (
        <div className="pagination-container-bottom">
          {paginationMinmaxContainer()}
        </div>
      )}
      {!(dataList?.length === 0 && noData) && footer && footer}
      {dataList?.length === 0 && noData}
    </div>
  );
};
