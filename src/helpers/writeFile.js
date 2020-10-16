import * as FileSaver from 'file-saver';

const getBlob = (icsData) => new Blob([icsData], {
  type: 'application/octet-stream'
});

const getFileName = (title) => {
  if (!title) {
    return 'event.ics';
  }

  return `${title.replace(/[^\w ]/ug, '')}.ics`;
};

const safariFileSave = (data, fileName) => {
  const anchor = document.createElement('a');
  const encodedData = encodeURIComponent(data);

  anchor.setAttribute('href', `data:text/calendar;charset=utf-8,${encodedData}`);
  anchor.setAttribute('download', fileName);
  anchor.setAttribute('target', 'self');

  if (document.createEvent) {
    const event = document.createEvent('MouseEvents');

    event.initEvent('click', true, true);
    anchor.dispatchEvent(event);
  } else {
    anchor.click();
  }
};

const download = (title, data) => {
  if (!process.isClient) {
    return;
  }

  const fileName = getFileName(title);

  /* eslint-disable prefer-named-capture-group */
  /* eslint-disable require-unicode-regexp */
  const newLocal = /^((?!chrome|android).)*safari/i;
  /* eslint-enable prefer-named-capture-group */
  /* eslint-enable require-unicode-regexp */

  if (newLocal.test(navigator.userAgent)) {
    safariFileSave(data, fileName);
  } else {
    const blob = getBlob(data);

    FileSaver.saveAs(blob, fileName);
  }
};

export default download;
