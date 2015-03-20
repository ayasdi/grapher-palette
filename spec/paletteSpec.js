var palette = [0x666666, 0x999999, 0xcccccc],
    paletteName = 'greyscale';

describe('grapher', function () {
  it('contains palettes', function () {
    expect(Grapher.palettes).toBeDefined();
  });

  it('defines new palettes', function () {
    Grapher.setPalette(paletteName, palette);
    expect(Grapher.getPalette(paletteName)).toBeDefined();
  });

  it('generates interpolated textures and swatches for links', function () {
    var swatch = Grapher.getPalette(paletteName)['0-1'];
    expect(swatch).toBeDefined();
  });
});

describe('a grapher instance', function () {
  var network, grapher;
  var index = 1;

  beforeEach(function () {
    network = {
      nodes: [
        {x: 0, y: 0, r: 20},
        {x: 1, y: 1, r: 15},
        {x: 1, y: 2, r: 25, color: index}
      ],
      links: [
        {from: 0, to: 1},
        {from: 1, to: 2}
      ]
    };
    grapher = new Grapher({});
  });

  afterEach(function () {
    grapher = undefined;
  });

  it('can set its palette to a predefined palette', function () {
    expect(grapher.palette).toBeDefined();
    grapher.palette(paletteName);
    expect(grapher.palette()).toBe(Grapher.getPalette(paletteName));
  });

  it('gives node and links the proper palette color', function () {
    grapher.data(network);
    grapher.palette(paletteName).render();
    var last = grapher.nodes[grapher.nodes.length - 1];
    expect(last.color).toBe(Grapher.getPalette(paletteName)[index]);
  });
});
