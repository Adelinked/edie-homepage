export const PhotosComp = ({ photos }: { photos: string[] }) => {
  return (
    <div className="flex pt-9 md:pt-0">
      <div className="flex items-center mr-2 md:mr-4 ">
        <img
          src={photos[0]}
          alt="photo1"
          className="rounded-3xl object-cover"
        />
      </div>

      <div className="flex flex-col">
        <div className="mb-2 md:mb-6">
          <img
            src={photos[1]}
            alt="photo2"
            className="rounded-3xl  object-cover"
          />
        </div>{" "}
        <div className=" ">
          <img
            src={photos[2]}
            alt="photo3"
            className=" rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
