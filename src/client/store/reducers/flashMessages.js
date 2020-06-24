import shortid from 'shortid';
import { ADD_FLASH_MESSAGE } from '../types/types';

/* eslint-disable import/prefer-default-export */
export const flashMessages = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    default: return state;
  }
};
