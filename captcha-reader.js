void function(d) {

  /* character eigenvalue */
  /**/var numbers = {
  /**/  1:
  /**/  [
  /**/    0, 0, 1, 1, 0, 0, 0, 0,
  /**/    1, 1, 1, 1, 0, 0, 0, 0,
  /**/    0, 0, 1, 1, 0, 0, 0, 0,
  /**/    0, 0, 1, 1, 0, 0, 0, 0,
  /**/    0, 0, 1, 1, 0, 0, 0, 0,
  /**/    0, 0, 1, 1, 0, 0, 0, 0,
  /**/    0, 0, 1, 1, 0, 0, 0, 0,
  /**/    0, 0, 1, 1, 0, 0, 0, 0,
  /**/    0, 0, 1, 1, 0, 0, 0, 0,
  /**/    0, 0, 1, 1, 0, 0, 0, 0,
  /**/    0, 0, 1, 1, 0, 0, 0, 0,
  /**/    1, 1, 1, 1, 1, 1, 0, 0
  /**/  ],
  /**/
  /**/  2:
  /**/  [
  /**/    0, 0, 1, 1, 1, 1, 0, 0,
  /**/    0, 1, 0, 0, 1, 1, 1, 0,
  /**/    1, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 0, 0,
  /**/    0, 0, 0, 0, 1, 1, 0, 0,
  /**/    0, 0, 0, 0, 1, 0, 0, 0,
  /**/    0, 0, 0, 1, 0, 0, 0, 0,
  /**/    0, 0, 1, 0, 0, 0, 0, 1,
  /**/    0, 1, 1, 1, 1, 1, 1, 1,
  /**/    1, 1, 1, 1, 1, 1, 1, 0
  /**/  ],
  /**/
  /**/  3:
  /**/  [
  /**/    0, 0, 1, 1, 1, 1, 0, 0,
  /**/    1, 1, 0, 0, 1, 1, 1, 0,
  /**/    1, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 1, 1, 0, 0,
  /**/    0, 0, 0, 1, 1, 1, 0, 0,
  /**/    0, 0, 0, 0, 1, 1, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/    1, 1, 0, 0, 1, 1, 0, 0,
  /**/    1, 1, 1, 1, 1, 0, 0, 0
  /**/  ],
  /**/
  /**/  4:
  /**/  [
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 1, 1, 1, 0,
  /**/    0, 0, 0, 1, 0, 1, 1, 0,
  /**/    0, 0, 1, 0, 0, 1, 1, 0,
  /**/    0, 0, 1, 0, 0, 1, 1, 0,
  /**/    0, 1, 0, 0, 0, 1, 1, 0,
  /**/    1, 0, 0, 0, 0, 1, 1, 0,
  /**/    1, 1, 1, 1, 1, 1, 1, 1,
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/  ],
  /**/
  /**/  5:
  /**/  [
  /**/    0, 0, 1, 1, 1, 1, 0, 0,
  /**/    0, 0, 1, 1, 1, 1, 0, 0,
  /**/    0, 1, 0, 0, 0, 0, 0, 0,
  /**/    0, 1, 1, 1, 0, 0, 0, 0,
  /**/    1, 1, 1, 1, 1, 0, 0, 0,
  /**/    0, 0, 0, 1, 1, 1, 0, 0,
  /**/    0, 0, 0, 0, 1, 1, 0, 0,
  /**/    0, 0, 0, 0, 0, 1, 0, 0,
  /**/    0, 0, 0, 0, 0, 1, 0, 0,
  /**/    0, 0, 0, 0, 0, 1, 0, 0,
  /**/    1, 0, 0, 0, 1, 0, 0, 0,
  /**/    1, 1, 1, 1, 0, 0, 0, 0
  /**/  ],
  /**/
  /**/  6:
  /**/  [
  /**/    0, 0, 0, 0, 0, 1, 1, 1,
  /**/    0, 0, 0, 1, 1, 1, 0, 0,
  /**/    0, 0, 1, 1, 0, 0, 0, 0,
  /**/    0, 1, 1, 0, 0, 0, 0, 0,
  /**/    0, 1, 0, 1, 1, 1, 0, 0,
  /**/    1, 1, 1, 0, 0, 1, 1, 0,
  /**/    1, 1, 0, 0, 0, 0, 1, 1,
  /**/    1, 1, 0, 0, 0, 0, 1, 1,
  /**/    1, 1, 0, 0, 0, 0, 1, 1,
  /**/    1, 1, 0, 0, 0, 0, 1, 1,
  /**/    0, 1, 1, 0, 0, 1, 1, 0,
  /**/    0, 0, 1, 1, 1, 1, 0, 0
  /**/  ],
  /**/
  /**/  7:
  /**/  [
  /**/    0, 1, 1, 1, 1, 1, 1, 1,
  /**/    0, 1, 1, 1, 1, 1, 1, 0,
  /**/    1, 0, 0, 0, 0, 0, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 0, 0,
  /**/    0, 0, 0, 0, 0, 1, 0, 0,
  /**/    0, 0, 0, 0, 0, 1, 0, 0,
  /**/    0, 0, 0, 0, 1, 0, 0, 0,
  /**/    0, 0, 0, 0, 1, 0, 0, 0,
  /**/    0, 0, 0, 1, 0, 0, 0, 0,
  /**/    0, 0, 0, 1, 0, 0, 0, 0,
  /**/    0, 0, 0, 1, 0, 0, 0, 0,
  /**/    0, 0, 1, 0, 0, 0, 0, 0
  /**/  ],
  /**/
  /**/  8:
  /**/  [
  /**/    0, 0, 1, 1, 1, 1, 0, 0,
  /**/    0, 1, 1, 0, 0, 0, 1, 0,
  /**/    0, 1, 0, 0, 0, 0, 1, 1,
  /**/    1, 1, 0, 0, 0, 0, 1, 1,
  /**/    0, 1, 1, 0, 0, 1, 1, 0,
  /**/    0, 0, 1, 1, 1, 0, 0, 0,
  /**/    0, 0, 1, 1, 1, 1, 0, 0,
  /**/    0, 1, 0, 0, 0, 1, 1, 0,
  /**/    1, 1, 0, 0, 0, 0, 1, 1,
  /**/    1, 1, 0, 0, 0, 0, 1, 1,
  /**/    0, 1, 1, 0, 0, 0, 1, 0,
  /**/    0, 0, 1, 1, 1, 1, 0, 0
  /**/  ],
  /**/
  /**/  9:
  /**/  [
  /**/    0, 0, 1, 1, 1, 1, 0, 0,
  /**/    0, 1, 1, 0, 0, 1, 1, 0,
  /**/    1, 1, 0, 0, 0, 0, 1, 1,
  /**/    1, 1, 0, 0, 0, 0, 1, 1,
  /**/    1, 1, 0, 0, 0, 0, 1, 1,
  /**/    1, 1, 0, 0, 0, 0, 1, 1,
  /**/    0, 1, 1, 0, 0, 0, 1, 1,
  /**/    0, 0, 1, 1, 1, 1, 1, 0,
  /**/    0, 0, 0, 0, 0, 1, 1, 0,
  /**/    0, 0, 0, 0, 1, 1, 0, 0,
  /**/    0, 0, 0, 1, 1, 0, 0, 0,
  /**/    1, 1, 1, 0, 0, 0, 0, 0
  /**/  ],
  /**/
  /**/  0:
  /**/  [
  /**/    0, 0, 1, 1, 1, 0, 0, 0,
  /**/    0, 1, 1, 0, 1, 1, 0, 0,
  /**/    0, 1, 0, 0, 0, 1, 0, 0,
  /**/    1, 1, 0, 0, 0, 1, 1, 0,
  /**/    1, 1, 0, 0, 0, 1, 1, 0,
  /**/    1, 1, 0, 0, 0, 1, 1, 0,
  /**/    1, 1, 0, 0, 0, 1, 1, 0,
  /**/    1, 1, 0, 0, 0, 1, 1, 0,
  /**/    1, 1, 0, 0, 0, 1, 1, 0,
  /**/    0, 1, 0, 0, 0, 1, 0, 0,
  /**/    0, 1, 1, 0, 1, 1, 0, 0,
  /**/    0, 0, 1, 1, 1, 0, 0, 0
  /**/  ]
  /**/
  /**/};
  /* ==================== */
  // image selctor
  var IMG_SELECTOR = 'img';
  // short cuts
  var _ = {
    $: function(selector) { return d.querySelector(selector); },
    c: function(tagName) { return d.createElement(tagName); }
  };

  var img = _.$(IMG_SELECTOR);

  // trigger callback once the image is loaded
  // trigger the callback at once if already loaded
  function onImgLoaded(img, callback) {
    if (img.complete) {
      callback.call(img);
    }
    img.addEventListener('load', callback);
  }

  // copy image to canvas
  function copyImage() {
    var canvas = _.c('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    return ctx;
  }

  // monochromizing the image
  function monochromizing(ctx, threshold) {
    var imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var data = imgData.data;
    var pixelNum = data.length / 4;

    for (var i = 0; i < pixelNum; i++) {
      // here we use the average of rgb value
      if ((data[4*i] + data[4*i+1] + data[4*i+2]) > (threshold * 3)) {
        // white pixel
        data[4*i] = data[4*i+1] = data[4*i+2] = 255;
      }
      else {
        // black pixel
        data[4*i] = data[4*i+1] = data[4*i+2] = 0;
      }
    }

    ctx.putImageData(imgData, 0, 0);

    return data;
  }

  // turn rgba value to 0-1 value
  function binarization(data) {
    var pixelData = [];
    var pixelNum = data.length / 4;

    for (var i = 0; i < pixelNum; i++) {
      if (data[4*i] === 255) {
        // white -> 0
        pixelData.push(0);
      }
      else {
        // black -> 1
        pixelData.push(1);
      }
    }

    return pixelData;
  }

  // get column data
  function getColumns(data) {
    var columns = new Array(img.width);

    for (var i = 0; i < columns.length; i++) {
      columns[i] = [];
    }

    for (var i = 0; i < data.length; i++) {
      colNum = i % img.width;
      columns[colNum].push(data[i]);
    }

    return columns;
  }

  // get x value of characters' starting pixels
  function getStartPixels(data, searchPoint) {
    var columns = getColumns(data);
    var startPixels = [];

    // search for the first column contains 1
    for (var i = 0; i < searchPoint.length; i++) {
      var colNum = searchPoint[i]
      while(columns[colNum].indexOf(1) < 0) { colNum++; }
      startPixels.push(colNum);
    }

    return startPixels;
  }

  // get character 0-1 data list
  function getCharacterDataList(ctx, startPixels, startY, width, height) {
    var characterDataList = [];

    for (var i = 0; i < startPixels.length; i++) {
      var imgData = ctx.getImageData(startPixels[i], startY, width, height);
      var characterData = binarization(imgData.data);
      characterDataList.push(characterData);
    }

    return characterDataList;
  }

  // get read result
  function getCharacter(characterData) {
    var character, max = 0;

    function getSimilarity(data1, data2) {
      var similarity = 0;
      for (var i = 0; i < data1.length; i++) {
        (data1[i] === data2[i]) && similarity++;
      }
      return similarity;
    }

    for (var key in numbers) {
      var similarity = getSimilarity(numbers[key], characterData);
      if (similarity > max) {
        max = similarity
        character = key;
      }
    }
    return character;
  }

  // read Captcha :)
  function readCaptcha() {
    console.time('read captcha');
    var ctx = copyImage();
    var pixelData = monochromizing(ctx, 128);
    var binaryData = binarization(pixelData);
    var startPixels = getStartPixels(binaryData, [5, 18, 31, 44]);
    var characterDataList = getCharacterDataList(ctx, startPixels, 4, 8, 12);

    var characters = []
    for (var i = 0; i < characterDataList.length; i++) {
      var character = getCharacter(characterDataList[i]);
      characters.push(character);
    }
    console.timeEnd('read captcha');

    if(!_.$('span')) {
      var resultSpan = _.c('span');
      d.body.appendChild(resultSpan);
    }
    else {
      var resultSpan = _.$('span');
    }
    resultSpan.innerHTML = characters.join('');

  }

  onImgLoaded(_.$(IMG_SELECTOR), readCaptcha);

}(document);
