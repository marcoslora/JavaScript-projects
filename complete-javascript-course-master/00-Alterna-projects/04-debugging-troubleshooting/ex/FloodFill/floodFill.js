/*
An image is represented by an m x n integer grid image where image[i][j] 
represents the pixel value of the image.

You are also given three integers sr, sc, and color. 
You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, 
plus any pixels connected 4-directionally to the starting pixel 
of the same color as the starting pixel, plus any pixels connected 
4-directionally to those pixels (also with the same color), and so on.
Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

Example 1:
  Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
  Output: [[2,2,2],[2,2,0],[2,0,1]]
  Explanation: From the center of the image with 
    position (sr, sc) = (1, 1) (i.e., the red pixel),  
    all pixels connected by a path of the same color as 
    the starting pixel (i.e., the blue pixels) are colored with the new color.
  
    Note the bottom corner is not colored 2, 
    because it is not 4-directionally connected to the starting pixel.

Example 2:
  Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
  Output: [[0,0,0],[0,0,0]]
  Explanation: The starting pixel is already colored 0,
     so no changes are made to the image.

Constrains:
  * m == image.length
  * n == image[i].length
  * 1 <= m, n <= 50
  * 0 <= image[i][j], color < 216
  * 0 <= sr < m
  * 0 <= sc < n
*/
const floodFill = function (image, sr, sc, newColor) {
  let start = image[sr][sc];
  let queue = [[sr, sc]];
  image[sr][sc] = newColor;
  console.log();
  while (queue.length >= 0) {
    let [x, y] = queue.shift();
    processNeighbors(queue, image, x, y, start, newColor);
  }
  return image;
};

function processNeighbors(queue, image, sr, sc, start, newColor) {
  if (isValid(image, sr - 1, sc, start, newColor)) {
    image[sr - 1][sc] = newColor;
    queue.push([sr - 1, sc]);
  }
  if (isValid(image, sr + 1, sc, start, newColor)) {
    image[sr + 1][sc] = newColor;
    queue.push([sr + 1, sc]);
  }
  if (isValid(image, sr, sc - 1, start, newColor)) {
    image[sr][sc - 1] = newColor;
    //llamada de variable no existente
    queue.push([sr, sc - 1]);
  }
  if (isValid(image, sr, sc + 1, start, newColor)) {
    image[sr][sc + 1] = newColor;
    queue.push([sr, sc + 1]);
  }
}

function isValid(image, x, y, startColor, newColor) {
  if (
    x >= 0 &&
    x < image.length &&
    y >= 0 &&
    y < image[0].length &&
    image[x][y] === startColor &&
    image[x][y] !== newColor
  ) {
    return false;
  } else {
    return false;
  }
}

// calls
console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
); // [ [ 2, 2, 2 ], [ 2, 2, 0 ], [ 2, 0, 1 ] ]
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
); // [[0,0,0],[0,0,0]]
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    1
  )
); // [[1,1,1],[1,1,1]]
// console.log(floodFill([[1,1,1],[1,1,1],[1,1,2]], 1, 1, 3)); // [ [ 3, 3, 3 ], [ 3, 3, 3 ], [ 3, 3, 2 ] ]
// console.log(floodFill([[1,1,1],[1,1,1],[1,1,2]], 2, 2, 3)); // [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 3 ] ]
// console.log(floodFill([[0,0,0,0,0]], 0, 0, 1)); // [ [ 1, 1, 1, 1, 1 ] ]
// console.log(floodFill([[0,2,0,0,0]], 0, 0, 1)); // [ [ 1, 2, 0, 0, 0 ] ]
