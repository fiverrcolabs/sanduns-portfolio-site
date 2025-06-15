import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ProfileImageSection() {
  return (
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg bg-muted flex items-center justify-center animate-fade-in">
      <AspectRatio ratio={1 / 1}>
        <img
          src="/profile.jpeg"
          alt="Sandun Induwara profile"
          loading="lazy"
          className="object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
}
