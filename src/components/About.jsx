import aboutSvg from "../assets/logo.png";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img
          src={aboutSvg}
          alt="about"
          className="w-full h-64 object-contain"
        />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-500 mt-8 leading-loose">
            Hello! My name is Maciej and I've found a passion for creating
            things that live on the internet. I started my journey with
            front-end in 2020, creating simple WordPress websites. Lately, I've
            been lurking on forums, trying to learn how to properly build
            websites, and as a result, I've fallen in love with programming.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
