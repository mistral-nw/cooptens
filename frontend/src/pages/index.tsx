// import RecentAds from "@/components/RecentAds";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useRef } from "react";
export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // change this to any speed (e.g., 2.0 for double speed, 0.5 for half speed)
    }
  }, []);
  return (
    <>
      <Layout pageTitle="Acceuil">
        <div className="relative h-screen flex items-center justify-center w-screen">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover brightness-90"
            src="/images/vid.mp4"
            autoPlay={true}
            muted={true}
            playsInline={true}
            loop
          ></video>
          {/* <img
            src="/images/hero1.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover "
            alt=""
          /> */}

          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          <div className=" w-80 md:w-2/6  absolute   top-24 md:top-28 text-center">
            <h1 className="mb-5 text-4xl drop-shadow-xl text-white">
              Cooptens, créateur d'opportunités
            </h1>
            <h3 className="drop-shadow-md text-lg mb-5 text-white">
              Cabinet de conseil en Ressources Humaines, spécialisé dans le
              recrutement de Cadres
            </h3>

            <div className=" flex justify-evenly text-white">
              <Link href={"/candidants"}>
                <button className="bg-sky-500/100 bg-primary p-2 px-3 rounded-xl text-xl drop-shadow-md">
                  Candidants
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
        {/* <section className="text-center p-5">
          <h2 className="text-1xl">
            Cabinet de conseil en Ressources Humaines, spécialisé dans le
            recrutement de Cadres
          </h2>
        </section> */}
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
        </div>
      </Layout>
    </>
  );
}
