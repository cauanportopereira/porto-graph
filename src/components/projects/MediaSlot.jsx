import Media from '../Media';

/** Uma célula de mídia: mostra a mídia do projeto ou um espaço reservado identificado. */
export default function MediaSlot({ item, label, size, className = '' }) {
  if (!item) {
    return (
      <div className={`media-slot media-slot--empty ${className}`} role="img" aria-label={`Espaço reservado: ${label}`}>
        <span className="media-slot__label">
          {label}
          {size && <small>{size}</small>}
        </span>
      </div>
    );
  }
  return (
    <div className={`media-slot ${className}`}>
      <Media item={item} ambient className="media-slot__media" />
    </div>
  );
}
