/**
 * Posição de um elemento no frame de 1440x1024 do Figma (valores em px do frame).
 * Use com a classe `.abs`.
 */
export function at(x, y, w, h) {
  const style = { '--x': x, '--y': y };
  if (w != null) style['--w'] = w;
  if (h != null) style['--h'] = h;
  return style;
}

/**
 * Arte rotacionada: recebe o centro (cx, cy), o tamanho natural do SVG e o ângulo.
 */
export function rotated(cx, cy, w, h, deg) {
  return { ...at(cx - w / 2, cy - h / 2, w, h), '--r': `${deg}deg` };
}

/**
 * Foto recortada: caixa visível (x, y, w, h) + imagem posicionada dentro dela
 * (ix, iy, iw, ih relativos à caixa), como as máscaras do Figma.
 */
export function crop(x, y, w, h, ix, iy, iw, ih) {
  return { ...at(x, y, w, h), '--ix': ix, '--iy': iy, '--iw': iw, '--ih': ih };
}
