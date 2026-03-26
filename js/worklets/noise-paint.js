/**
 * CSS Houdini Paint Worklet — Procedural noise grain overlay
 * Renders film-grain effect as a CSS background.
 * Usage: background: paint(noise-grain);
 */
class NoiseGrainPainter {
  static get inputProperties() {
    return ['--noise-intensity', '--noise-seed'];
  }

  paint(ctx, geom, properties) {
    const intensity = parseFloat(properties.get('--noise-intensity')?.toString()) || 0.04;
    const w = geom.width;
    const h = geom.height;
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 255 * intensity;
      data[i] = noise;     // R
      data[i + 1] = noise; // G
      data[i + 2] = noise; // B
      data[i + 3] = Math.abs(noise) * 2; // A
    }

    ctx.putImageData(imageData, 0, 0);
  }
}

if (typeof registerPaint !== 'undefined') {
  registerPaint('noise-grain', NoiseGrainPainter);
}
