import { stripImages } from '@/data';

export default function ImageStrip() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      {stripImages.map((image, index) => (
        <img key={index} src={image} alt="gallery" className="h-[260px] w-full object-cover md:h-[628px]" />
      ))}
    </section>
  );
}