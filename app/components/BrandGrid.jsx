export function BrandGrid({data}) {

  const brandImages =
    data?.images?.references?.edges.map(
      (data) => data.node.image.url,
    );

  return (
    <section className={`brand-sec`}>
      <div className="container">
        <div className="brand-wrap flex flex-row flex-wrap gap-7 lg:gap-10 xl:gap-16 items-center justify-center">
        {brandImages.map((image, index) => (
            <a className="brand-logo opacity-50 hover:opacity-100 w-28 sm:w-40 h-14" href="#" key={index}>
              <img
                className="w-full h-full object-contain"
                src={image}
                alt=""
              />
            </a>
        ))}
        </div>
      </div>
    </section>
  );
}
