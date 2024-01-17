import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Di sini, bukan hanya pizza yang menjadi bintang utama, tapi juga
            hidangan lezat lainnya yang siap memanjakan selera Anda. Setiap
            hidangan diracik dengan cinta dan kreativitas untuk menciptakan
            momen berkesan dalam setiap suapan.
          </p>
          <p>
            Temukan keistimewaan rasa di setiap menu kami, dan jadikan kunjungan
            Anda menjadi petualangan kuliner yang tak terlupakan. Mari bergabung
            bersama kami di [Alamat Toko] dan rasakan sensasi nikmatnya bukan
            sekadar pizza, tetapi pengalaman kuliner yang luar biasa. Selamat
            menikmati setiap detiknya!
          </p>
          <p>
          Selamat menikmati setiap detiknya!
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+62 085891088596"
          >
            +62 8589 1088 596
          </a>
        </div>
      </section>
    </>
  );
}
