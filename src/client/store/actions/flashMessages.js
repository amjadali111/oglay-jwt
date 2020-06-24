/* eslint-disable import/prefer-default-export */
import { ADD_FLASH_MESSAGE } from '../types/types';

export function addFlashMessages(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  };
}
