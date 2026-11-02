import MediaSlot from './MediaSlot';

/* Ordem das 5 células do mosaico do Figma (grupo de 846 x 615). */
const SLOTS = [
  { key: 'tall', label: 'Imagem 1', size: '344 × 615' },
  { key: 'tl', label: 'Imagem 2', size: '241 × 303' },
  { key: 'bl', label: 'Imagem 3', size: '241 × 303' },
  { key: 'tr', label: 'Imagem 4', size: '241 × 303' },
  { key: 'br', label: 'Imagem 5', size: '241 × 303' },
];

export default function ProjectMosaic({ project, className = '', style }) {
  return (
    <div className={`mosaic ${className}`} style={style}>
      {SLOTS.map((slot, i) => (
        <MediaSlot
          key={slot.key}
          item={project.cover?.[i]}
          label={slot.label}
          size={slot.size}
          className={`mosaic__${slot.key}`}
        />
      ))}
    </div>
  );
}
