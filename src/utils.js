import { ORANGE, RED } from './config/colours';

/**
 * Generates an array of rows.
 *
 * Each row will be having 3 profile objects and their corresponding color values.
 *
 * @param {Array} data Array of profiles
 */
export const generatePeopleRows = (data) => {
  const rows = [];
  let nextColor = ORANGE;
  let currentRow = [];

  data.forEach((item) => {
    if (currentRow.length > 2) {
      rows.push(currentRow);
      currentRow = [];
    }

    currentRow.push({
      profile: item,
      color: nextColor,
    });

    nextColor = nextColor === ORANGE ? RED : ORANGE;
  });

  return rows;
};

/**
 * Generates an array of rows
 *
 * Each row will be having two quote objects and their corresponding color values.
 *
 * @param {Array} data Array of quote objects
 */
export const generateQuoteRows = (data) => {
  const rows = [];
  let nextColor = ORANGE;
  let currentRow = [];

  data.forEach((item, index) => {
    if (currentRow.length > 1) {
      rows.push(currentRow);
      currentRow = [];
    }

    currentRow.push({
      quote: item,
      color: nextColor,
    });

    // Alternate between columns
    if (index % 2 === 0) {
      nextColor = nextColor === ORANGE ? RED : ORANGE;
    }
  });

  return rows;
};
