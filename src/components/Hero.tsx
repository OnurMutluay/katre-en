

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">Turning Insights Into Impact</h1>{" "}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          We help businesses thrive by combining strategic thinking with
          actionable solutions. From sales strategy to digital marketing, market
          analysis, content creation, import & export, and innovative IT
          solutions — we turn your vision into measurable success.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4"></div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <img src="/hero.png" style={{ borderRadius: 10 }} />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
