const HeadingVariant1 = (
  { headingText }: { headingText: string },
) => {
  return (
    <h1 className="mx-2 my-4 text-4xl lg:text-5xl underline decoration-solid decoration-secondary">
      {headingText}
    </h1>
  );
};

export default HeadingVariant1;
