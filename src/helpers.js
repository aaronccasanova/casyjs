export const vpScale = (minSize, maxSize, minScreen, maxScreen, scaleMode) => {
  let minmaxScale = {
    withPx(viewport) {
      return `calc(${minSize}px + (${maxSize} - ${minSize}) * (${viewport} - ${minScreen}px) /
        (${maxScreen} - ${minScreen}));`;
    },
    withVp(viewport) {
      return `calc(
        calc(${minScreen / 100}px * ${minSize}) + (calc(${maxScreen /
        100} * ${maxSize}) - calc(${minScreen /
        100} * ${minSize})) * (${viewport} - ${minScreen}px) /
        (${maxScreen} - ${minScreen})
      )`;
    }
  };

  switch (scaleMode) {
    case 'vw-vp':
      return minmaxScale.withVp('100vw');
    case 'vh-vp':
      return minmaxScale.withVp('100vh');
    case 'vw-px':
      return minmaxScale.withPx('100vw');
    case 'vh-px':
      return minmaxScale.withPx('100vh');
    case 'vmin-vp':
      return minmaxScale.withVp('100vmin');
    case 'vmin-px':
      return minmaxScale.withPx('100vmin');
    default:
      /* for debugging */
      console.log('vpScale - recieved invalid scale type vvv');
      console.log(
        `${minSize}, ${maxSize}, ${minScreen}, ${maxScreen}, '${scaleMode}'`
      );
  }
};
