import axios from "axios";

export const renderTransition =  (index) =>  {
    switch (index) {
      case 1: case 7:
        return "slide-left"
      case 3: case 6:
        return "slide-right"
      case 2:
        return "slide-down"
      default:
        return "slide-up";
    }
  }

export function convertISOToSimpleDate(isoString) {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month starts from 0
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function getGeneralSetting(value)
{
  try {
  } catch (error) {
    return {
      success : false,
      message : error.message
    }
  }
}