import {
  SET_MAP_DATA,
  SET_TABLE_DATA,
  SET_TIMELINE_DATA,
  SET_COLUMNS,
} from "../actionTypes";

const initialState = {};
export const abolitionData = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MAP_DATA:
      return Object.assign({}, state, {
        mapData: [...action.mapData],
        action: action,
      });
    case SET_TABLE_DATA:
      return Object.assign({}, state, {
        tableData: action.tableData,
        action: action,
      });
    case SET_TIMELINE_DATA:
      return Object.assign({}, state, {
        timelineData: action.timelineData,
        action: action,
      });
    case SET_COLUMNS:
      return Object.assign({}, state, {
        columns: action.columns,
        action: action,
      });
    default:
      return state;
  }
};
