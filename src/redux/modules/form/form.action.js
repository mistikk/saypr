import {
  CHANGE_BRAND_NAME, CHANGE_DESCRIBE, CHANGE_OBJECTIVES, CHANGE_ACTIVE_TAB,
} from '../../../constants/actionTypes';

export const changeBrandName = data => ({
  type: CHANGE_BRAND_NAME,
  payload: data,
});

export const changeDescribe = data => ({
  type: CHANGE_DESCRIBE,
  payload: data,
});

export const changeObjectives = data => ({
  type: CHANGE_OBJECTIVES,
  payload: data,
});

export const changeActiveTab = data => ({
  type: CHANGE_ACTIVE_TAB,
  payload: data,
});
