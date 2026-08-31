import { useState } from "react";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  aspectRatio?: "4-3" | "16-10" | "1-1";
  className?: string;
}

export const PlaceholderImage = ({
  src,
  alt,
  aspectRatio = "16-10",
  className,
}: PlaceholderImageProps) => {
  const [imageError, setImageError] = useState(false);

  const ratioMap: Record<string, string> = {
    "4-3": "aspect-[4/3]",
    "16-10": "aspect-[16/10]",
    "1-1": "aspect-[1/1]",
  };

  if (imageError) {
    return (
      <div
        className={`${ratioMap[aspectRatio]} rounded-md bg-[--color-bg-surface] flex flex-col items-center justify-center text-[--color-text-secondary] overflow-hidden border border-[--border] ${className || ""}`}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="mb-2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p className="text-xs text-center px-2">Imagen no disponible</p>
        <p className="text-xs text-center px-2 opacity-75">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${ratioMap[aspectRatio]} rounded-md bg-[--color-bg-surface] object-cover w-full overflow-hidden transition-opacity ${className || ""}`}
      onError={() => setImageError(true)}
    />
  );
};
