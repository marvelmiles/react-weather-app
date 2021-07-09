module.exports = {
  get: () => {
    return Promise.resolve({
      data: {
        id: 0,
        name: 'Lagos',
        sys: {country:'ng'},
        main: {temp:'28'},
        weather: [{description: "So hot"}]
      }
    });
  }
};