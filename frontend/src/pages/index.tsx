// import RecentAds from "@/components/RecentAds";
import Card from "@/components/Card";
import Info from "@/components/Info";
import Layout from "@/components/Layout";
import LogoAnimation from "@/components/LogoAnimation";
import Link from "next/link";
import { useEffect, useRef } from "react";
export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 1; // change this to any speed (e.g., 2.0 for double speed, 0.5 for half speed)
  //   }
  // }, []);
  return (
    <>
      <Layout pageTitle="Acceuil">
        <div className="relative h-screen flex items-center justify-center w-screen ">
          <video
            // ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover brightness-90"
            src="/images/vid.mp4"
            autoPlay
            muted
            playsInline
            loop
          ></video>

          {/* <img
            src="/images/hero1.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover "
            alt=""
          /> */}

          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          <div className=" w-80 md:w-2/6  absolute   top-24 md:top-28 text-center ">
            <h1 className="mb-5 text-4xl drop-shadow-xl text-white font-bold">
              Cooptens, créateur d'opportunités
            </h1>
            <h2 className="drop-shadow-md text-lg mb-5 text-white font-semibold">
              Cabinet de conseil en Ressources Humaines, spécialisé dans le
              recrutement de Cadres
            </h2>

            <div className=" flex justify-evenly text-white">
              <Link href={"/candidants"}>
                <button className="bg-sky-500/100 bg-primary p-2 px-3 rounded-xl text-xl drop-shadow-md">
                  Candidats
                </button>
              </Link>
              <Link href={"/expertise"}>
                <button className="bg-sky-500/100  bg-primary p-2 px-3 rounded-xl text-xl drop-shadow-md">
                  Entreprises
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Info></Info>
        <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
          {/* <div className="relative isolate overflow-hidden bg-base-200 py-24 sm:py-32">
           */}
          {/* <img
            alt=""
            src="/images/hero.jpg"
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
          /> */}

          <div className="max-w-5xl mx-auto">
            <h2 className=" md:text-4xl font-semibold text-gray-900 mb-10">
              Nos valeurs
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Engagement</h3>
                <p className="mt-2 text-gray-700">
                  Afin d’assurer une entière satisfaction, nous mettons en œuvre
                  tous nos efforts, moyens et outils pour répondre aux exigences
                  de chacun.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Confiance</h3>
                <p className="mt-2 text-gray-700">
                  L’élément indispensable d’une relation simple, qui nous permet
                  d’entretenir des liens uniques dans le temps, avec tous nos
                  interlocuteurs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Transparence</h3>
                <p className="mt-2 text-gray-700">
                  Point essentiel qui assure à nos clients et nos talents des
                  informations claires et concises, fluidifiant nos échanges.
                </p>
              </div>
            </div>

            <blockquote className="mt-12 border-l-4 border-sky-500 pl-6 italic text-gray-800 text-lg">
              « Nous travaillons avec persévérance, clé de notre réussite, pour
              assurer une bonne adéquation entre les talents et les opportunités
              professionnelles »
            </blockquote>
          </div>
        </section>

        <div className=" md:flex justify-evenly py-28">
          <Card
            titre="Immobilier / Construction"
            description=" Nous accompagnons des promoteurs, investisseurs, sociétés de
                services, aménageurs, bailleurs sociaux, utilisateurs et maître
                d’oeuvre dans leur recherche de talents."
            img="..\images\Immobilier.jpg"
          ></Card>
          <Card
            titre="Assurance"
            description=" Nos recrutements se portent sur les cadres de ce secteur d’activité."
            img="..\images\Assurance.jpg"
          ></Card>
        </div>
        {/* <div className="hero bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="..\images\Immobilier.jpg"
              className=" rounded-lg shadow-2xl"
            />
            <div>
              <h3 className="text-5xl font-bold"></h3>
              <p className="py-6">
                Nous accompagnons des promoteurs, investisseurs, sociétés de
                services, aménageurs, bailleurs sociaux, utilisateurs et maître
                d’oeuvre dans leur recherche de talents.
              </p>
              <button className="btn btn-primary">En savoir plus</button>
            </div>
          </div>
        </div> */}
        {/* 
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Bienvenue ! Trouvez les meilleurs talents ou découvrez des
                opportunités professionnelles passionnantes. Explorez nos offres
                et connectez-vous dès aujourd'hui!
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </Layout>
    </>
  );
}
