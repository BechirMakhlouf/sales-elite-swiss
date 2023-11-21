const ImageVariant1 = (
  props: { alt: string; width: number; height: number },
) => {
  return (
    <>
      <div
        style={{ width: props.width, height: props.height }}
        className="border-2 border-secondary border-dashed rounded-md"
      >
      </div>
    </>
  );
};

export default ImageVariant1;
