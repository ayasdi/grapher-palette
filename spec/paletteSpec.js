describe('grapher', function () {
  var palette = [0x666666, 0x999999, 0xcccccc];

  it('contains palettes', function () {
    expect(Grapher.palettes).toBeDefined();
  });

  it('defines new palettes', function () {
    Grapher.setPalette('greyscale', palette);
    expect(Grapher.getPalette('greyscale')).toBeDefined();
  });

  it('generates interpolated textures and swatches for links', function () {
    var swatch = Grapher.getPalette('greyscale')['0-1'];
    expect(swatch).toBeDefined();
  });
});

describe('a grapher instance', function () {
  var network, grapher;

  beforeEach(function () {
    network = {
      nodes: [
        {x: 0, y: 0, r: 20},
        {x: 1, y: 1, r: 15},
        {x: 1, y: 2, r: 25}
      ],
      links: [
        {from: 0, to: 1},
        {from: 1, to: 2}
      ]
    };
    grapher = new Grapher();
  });

  afterEach(function () {
    grapher = undefined;
  });

  it('can set its palette to a predefined palette', function () {
    var palette = 'greyScale';
    expect(grapher.palette).toBeDefined();
    grapher.palette(palette);
    expect(grapher.palette()).toBe(palette);
  });

  it('gives node and links the proper palette color', function () {
    var palette = 'greyScale',
        index = 1;

    grapher.palette(palette);
    network.nodes.push({x: 2, y: 2, r: 10, color: index});
    grapher.update().render();

    expect(grapher.nodes[grapher.nodes.length - 1].color)
        .toBe(Grapher.getPalette(palette)[index]);
  });
});
